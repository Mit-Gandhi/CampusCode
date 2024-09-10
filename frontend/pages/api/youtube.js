// pages/api/youtube.js
import axios from 'axios';

export default async function handler(req, res) {
  const { videoId } = req.query; // Expecting a videoId in the query string
  const API_KEY = process.env.YOUTUBE_API_KEY; // Store your API key in .env.local

  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos`,
      {
        params: {
          part: 'snippet,contentDetails,statistics',
          id: videoId,
          key: API_KEY,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching video data:', error);
    res.status(500).json({ error: 'Failed to fetch video data' });
  }
}