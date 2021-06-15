import mongoose from 'mongoose';

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
const User = mongoose.model('User', UserSchema);

export default User;
