import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  videoId: String,
  text: String,
  date: { type: Date, default: Date.now },
});

const Comment = mongoose.model('Comment', CommentSchema);

export default Comment;