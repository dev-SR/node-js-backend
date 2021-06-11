import mongoose from 'mongoose';

// Create User Schema
const UserSchema = new mongoose.Schema({
   name: {
      type: String,
      required: [true, 'Please enter user name'],
      minlength: [2, 'Minimum 2 character is required'],
      maxlength: 20,
      trim: true
   }
});
const PostSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 20,
      trim: true
   },
   postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
   },
   comments: [
      {
         text: String,
         postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
         }
      }
   ],
   createdAt: {
      type: Date,
      default: Date.now
   }
});
// We then need to create models to use it
const User = mongoose.model('users', UserSchema);
const Post = mongoose.model('posts', PostSchema);

export { User, Post };
