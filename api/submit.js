import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    await sql`CREATE TABLE IF NOT EXISTS submissions (
      id SERIAL PRIMARY KEY, form_type VARCHAR(50), name VARCHAR(255),
      phone VARCHAR(100), email VARCHAR(255), city VARCHAR(255),
      education TEXT, country TEXT, other_country VARCHAR(255),
      message TEXT, created_at TIMESTAMP DEFAULT NOW()
    )`;

    const { formType, name, phone, email, city, education, country, otherCountry, message } = req.body;
    await sql`INSERT INTO submissions (form_type,name,phone,email,city,education,country,other_country,message)
      VALUES (${formType||'consult'},${name||''},${phone||''},${email||''},${city||''},${education||''},${country||''},${otherCountry||''},${message||''})`;

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Submit error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
