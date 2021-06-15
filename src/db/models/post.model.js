import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
   title: {
      type: String
   },
   postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users'
   },
   comments: [
      {
         text: String,
         by: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
         }
      }
   ]
});
const Post = mongoose.model('posts', PostSchema);
export default Post;
