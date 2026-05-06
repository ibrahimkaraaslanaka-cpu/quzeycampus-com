import { kv } from '@vercel/kv';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const keys = await kv.keys('submission:*');
        const submissions = await Promise.all(keys.map(key => kv.get(key)));
        
        // Sort by date (newest first)
        submissions.sort((a, b) => new Date(b.date) - new Date(a.date));

        // Create CSV content
        const header = 'ID,Type,Name,Email,Date,Details\n';
        const rows = submissions.map(s => `"${s.id}","${s.type}","${s.name}","${s.email}","${s.date}","${(s.details || '').replace(/"/g, '""')}"`).join('\n');
        const csv = header + rows;

        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; filename=submissions.csv');
        return res.status(200).send(csv);
    } catch (error) {
        console.error('Export error:', error);
        return res.status(500).json({ error: 'Failed to export submissions' });
    }
}
