const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') return new Response(null, { headers: CORS });
    if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

    let body;
    try { body = await request.json(); } catch { return json({ error: 'Invalid JSON' }, 400); }

    // Auth: check admin-config.json hash first, fallback to ADMIN_SECRET
    const provided = body.secret || '';
    const authed = await validateSecret(provided, env);
    if (!authed) return json({ error: 'Unauthorized' }, 401);

    // Ping — just validates the secret
    if (body.action === 'ping') return json({ ok: true });

    // Change password — stores SHA-256 hash in admin-config.json on GitHub
    if (body.action === 'changePassword') {
      const newSecret = body.newSecret || '';
      if (!newSecret || newSecret.length < 8) return json({ error: 'Password must be at least 8 characters' }, 400);
      const hash = await sha256(newSecret + (env.ADMIN_SECRET || ''));
      const config = JSON.stringify({ passwordHash: hash }, null, 2);
      const result = await commitToGitHub('admin-config.json', config, 'Admin: update password hash', env);
      if (!result.ok) return json({ error: result.error || 'Failed to save password' }, 502);
      return json({ ok: true });
    }

    const { file, content, message } = body;
    if (!file || !content) return json({ error: 'Missing file or content' }, 400);

    const result = await commitToGitHub(file, content, message || 'Admin: update config', env, body.raw);
    if (!result.ok) return json({ error: result.error || 'GitHub API error' }, 502);
    return json({ ok: true, status: result.status });
  }
};

async function validateSecret(provided, env) {
  const master = env.ADMIN_SECRET || '';
  // Try config file hash first
  try {
    const apiUrl = `https://api.github.com/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/contents/admin-config.json`;
    const res = await fetch(apiUrl, {
      headers: { Authorization: `Bearer ${env.GITHUB_TOKEN}`, 'User-Agent': 'kgpeps-worker' }
    });
    if (res.ok) {
      const file = await res.json();
      const config = JSON.parse(atob(file.content.replace(/\n/g, '')));
      if (config.passwordHash) {
        const hash = await sha256(provided + master);
        return hash === config.passwordHash;
      }
    }
  } catch {}
  // Fallback: direct constant-time compare against ADMIN_SECRET
  return timingSafeEqual(provided, master);
}

async function sha256(text) {
  const data = new TextEncoder().encode(text);
  const buf = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function commitToGitHub(file, content, message, env, raw = false) {
  const apiUrl = `https://api.github.com/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/contents/${file}`;
  const headers = {
    Authorization: `Bearer ${env.GITHUB_TOKEN}`,
    'Content-Type': 'application/json',
    'User-Agent': 'kgpeps-worker',
  };
  const getRes = await fetch(apiUrl, { headers });
  if (!getRes.ok && getRes.status !== 404) return { ok: false, error: 'Failed to fetch file SHA' };
  const existing = getRes.ok ? await getRes.json() : null;
  const sha = existing?.sha;
  const encoded = raw ? content : btoa(unescape(encodeURIComponent(content)));
  const putRes = await fetch(apiUrl, {
    method: 'PUT',
    headers,
    body: JSON.stringify({ message, content: encoded, ...(sha ? { sha } : {}) }),
  });
  if (!putRes.ok) {
    const err = await putRes.text();
    return { ok: false, error: err };
  }
  return { ok: true, status: putRes.status };
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json' },
  });
}

function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return result === 0;
}
