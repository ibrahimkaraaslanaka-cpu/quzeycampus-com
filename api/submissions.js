import { sql } from '@vercel/postgres';

function checkAuth(req) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Basic ')) return false;
  const decoded = Buffer.from(auth.split(' ')[1], 'base64').toString();
  const [user, pass] = decoded.split(':');
  return user === (process.env.ADMIN_USER || 'quzeycampusadmin') && pass === (process.env.ADMIN_PASS || 'Quzeycampus21626admin*');
}

export default async function handler(req, res) {
  if (!checkAuth(req)) return res.status(401).json({ error: 'Unauthorized' });

  try {
    await sql`CREATE TABLE IF NOT EXISTS submissions (
      id SERIAL PRIMARY KEY, form_type VARCHAR(50), name VARCHAR(255), phone VARCHAR(100),
      email VARCHAR(255), city VARCHAR(255), education TEXT, country TEXT,
      other_country VARCHAR(255), message TEXT, created_at TIMESTAMP DEFAULT NOW()
    )`;

    if (req.method === 'GET') {
      const { rows } = await sql`SELECT * FROM submissions ORDER BY created_at DESC`;
      return res.status(200).json(rows);
    }
    if (req.method === 'DELETE') {
      const { id } = req.query;
      if (!id) return res.status(400).json({ error: 'Missing id' });
      await sql`DELETE FROM submissions WHERE id = ${id}`;
      return res.status(200).json({ success: true });
    }
    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Submissions error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
