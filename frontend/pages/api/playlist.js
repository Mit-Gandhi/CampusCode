import axios from 'axios';

export default async function handler(req, res) {
  const { playlistId } = req.query; // Expecting a playlistId in the query string
  const API_KEY = process.env.YOUTUBE_API_KEY; // Store your API key in .env.local

  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlistItems`,
      {
        params: {
          part: 'snippet',
          maxResults: 25,
          playlistId: playlistId,
          key: API_KEY,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching playlist data:', error);
    res.status(500).json({ error: 'Failed to fetch playlist data' });
  }
}
