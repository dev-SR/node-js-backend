import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
   title: String,
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
   },
   body: String,
   comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Comment'
      }
   ]
});

const Blog = mongoose.model('Blog', BlogSchema);

export default Blog;
