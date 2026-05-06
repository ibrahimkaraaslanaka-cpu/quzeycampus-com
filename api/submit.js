export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    console.log('Submission received:', data);
    
    // NOTE: In a production environment with Vercel, you would use 
    // a database like Vercel KV or Supabase to store these submissions.
    
    return res.status(200).json({ 
      success: true, 
      message: 'Başvurunuz başarıyla alındı!' 
    });
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
