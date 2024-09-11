export default async function handler(req, res) {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'No prompt provided' });
    }

    // Use the deployed backend URL from environment variables
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/chatbot`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: prompt }),
    });

    // Handle non-OK responses (e.g., 500, 404)
    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({ error: `Error from server: ${errorText}` });
    }

    const data = await response.json();
    return res.status(200).json({ message: data.response });
  } catch (error) {
    console.error('Error communicating with chatbot server:', error);
    return res.status(500).json({ error: 'Failed to generate a response' });
  }
}
