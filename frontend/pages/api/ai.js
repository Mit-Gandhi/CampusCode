// pages/api/ai.js
export default async function handler(req, res) {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'No prompt provided' });
    }

    // Proxy the request to your chatbot server
    const response = await fetch(`http://localhost:8000/${encodeURIComponent(prompt)}`);
    const data = await response.json();

    res.status(200).json({ message: data });
  } catch (error) {
    console.error('Error communicating with chatbot server:', error);
    res.status(500).json({ error: 'Failed to generate a response' });
  }
}
