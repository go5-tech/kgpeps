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
