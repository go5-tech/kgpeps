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

    // Constant-time secret check
    const provided = body.secret || '';
    const expected = env.ADMIN_SECRET || '';
    if (!timingSafeEqual(provided, expected)) return json({ error: 'Unauthorized' }, 401);

    // Ping — just validates the secret
    if (body.action === 'ping') return json({ ok: true });

    // Change password — updates ADMIN_SECRET via Cloudflare API
    if (body.action === 'changePassword') {
      const newSecret = body.newSecret || '';
      if (!newSecret || newSecret.length < 8) return json({ error: 'Password must be at least 8 characters' }, 400);
      if (!env.CF_API_TOKEN) return json({ error: 'CF_API_TOKEN not configured' }, 500);
      const cfRes = await fetch(
        `https://api.cloudflare.com/client/v4/accounts/${env.CF_ACCOUNT_ID}/workers/scripts/${env.CF_WORKER_NAME}/secrets`,
        {
          method: 'PUT',
          headers: { 'Authorization': `Bearer ${env.CF_API_TOKEN}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: 'ADMIN_SECRET', text: newSecret, type: 'secret_text' })
        }
      );
      const cfData = await cfRes.json();
      if (!cfRes.ok) return json({ error: 'Cloudflare API error', detail: cfData }, 502);
      return json({ ok: true });
    }

    const { file, content, message } = body;
    if (!file || !content) return json({ error: 'Missing file or content' }, 400);

    const apiUrl = `https://api.github.com/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/contents/${file}`;
    const headers = {
      Authorization: `Bearer ${env.GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
      'User-Agent': 'kgpeps-worker',
    };

    // Get current SHA
    const getRes = await fetch(apiUrl, { headers });
    if (!getRes.ok && getRes.status !== 404) return json({ error: 'Failed to fetch file SHA' }, 502);
    const existing = getRes.ok ? await getRes.json() : null;
    const sha = existing?.sha;

    // Commit — if raw:true, content is already base64 (for binary files like images)
    const encoded = body.raw ? content : btoa(unescape(encodeURIComponent(content)));
    const putRes = await fetch(apiUrl, {
      method: 'PUT',
      headers,
      body: JSON.stringify({
        message: message || 'Admin: update config',
        content: encoded,
        ...(sha ? { sha } : {}),
      }),
    });

    if (!putRes.ok) {
      const err = await putRes.text();
      return json({ error: 'GitHub API error', detail: err }, 502);
    }

    return json({ ok: true, status: putRes.status });
  }
};

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
