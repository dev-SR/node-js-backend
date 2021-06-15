import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
   name: String,
   email: String,
   blogs: [
      // [...'uid']
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Blog'
      }
   ]
});

const User = mongoose.model('Users', UserSchema);

export default User;
