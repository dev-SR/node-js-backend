import mongoose from 'mongoose';
const CommentSchema = new mongoose.Schema({
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
   },
   blog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Blog'
   },
   body: String
});

const Comment = mongoose.model('Comment', CommentSchema);

export default Comment;
