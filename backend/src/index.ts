import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Use the MongoDB URI from the .env file
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase';

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

import Comment from './models/comment';
import Note from './models/Notes';

// API route to post a new comment
app.post('/api/comments', async (req, res) => {
  try {
    const { videoId, text } = req.body;
    const newComment = new Comment({ videoId, text });
    await newComment.save();
    res.json(newComment);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save comment' });
  }
});

// API route to get notes by videoId
app.get('/api/notes/:videoId', async (req, res) => {
  try {
    const notes = await Note.findOne({ videoId: req.params.videoId });
    if (!notes) {
      return res.status(404).json({ error: 'Notes not found' });
    }
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve notes' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});