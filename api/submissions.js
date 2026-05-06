export default async function handler(req, res) {
  if (req.method === 'GET') {
    // NOTE: This returns mock data. In a real application, 
    // you would fetch this from a persistent database.
    const mockSubmissions = [
      { 
        id: 1, 
        type: 'consult', 
        name: 'Test User', 
        email: 'test@example.com', 
        date: '2025-05-06',
        details: 'UK - English Course'
      },
      { 
        id: 2, 
        type: 'contact', 
        name: 'Jane Doe', 
        email: 'jane@example.com', 
        date: '2025-05-05',
        details: 'Inquiry about visa'
      }
    ];
    return res.status(200).json(mockSubmissions);
  } else {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
