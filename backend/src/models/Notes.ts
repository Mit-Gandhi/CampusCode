import mongoose from 'mongoose';

const NoteSchema = new mongoose.Schema({
  videoId: String,
  content: String,
});

const Note = mongoose.model('Note', NoteSchema);

export default Note;
