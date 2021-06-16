import mongoose from 'mongoose';
import Blog from './blog.model.js';
const UserSchema = new mongoose.Schema({
   name: String,
   email: String,
   blogs: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Blog'
      }
   ]
});
UserSchema.post('findOneAndDelete', async function (deleted_user) {
   if (deleted_user.blogs.length) {
      await Blog.deleteMany({ _id: { $in: deleted_user.blogs } });
      //delete from Blogs by ID that are in deleted user 'blogs' array of IDs.
   }
});

const User = mongoose.model('User', UserSchema);

export default User;
