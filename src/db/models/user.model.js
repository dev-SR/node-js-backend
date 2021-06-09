import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
   name: {
      type: String,
      required: [true, 'Please Enter name'],
      trim: true,
      maxLength: [100, 'Max is 100']
   }
});

export default mongoose.model('User', UserSchema);
