import { sql } from '@vercel/postgres';

function checkAuth(req) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Basic ')) return false;
  const decoded = Buffer.from(auth.split(' ')[1], 'base64').toString();
  const [user, pass] = decoded.split(':');
  return user === (process.env.ADMIN_USER || 'quzeycampusadmin') && pass === (process.env.ADMIN_PASS || 'Quzeycampus21626admin*');
}

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  if (!checkAuth(req)) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const { rows } = await sql`SELECT * FROM submissions ORDER BY created_at DESC`;
    const headers = ['ID','Tur','Ad Soyad','Telefon','E-posta','Sehir','Egitim','Ulke','Diger Ulke','Mesaj','Tarih'];
    const csvRows = [headers.join(',')];
    rows.forEach(r => {
      csvRows.push([
        r.id, r.form_type, `"${(r.name||'').replace(/"/g,'""')}"`, r.phone, r.email,
        `"${(r.city||'').replace(/"/g,'""')}"`, `"${(r.education||'').replace(/"/g,'""')}"`,
        `"${(r.country||'').replace(/"/g,'""')}"`, `"${(r.other_country||'').replace(/"/g,'""')}"`,
        `"${(r.message||'').replace(/"/g,'""')}"`, r.created_at
      ].join(','));
    });
    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Content-Disposition', 'attachment; filename=quzeycampus_basvurular.csv');
    return res.status(200).send('\uFEFF' + csvRows.join('\n'));
  } catch (error) {
    console.error('Export error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
