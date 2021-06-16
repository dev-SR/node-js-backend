import User from '../db/models/user.model.js';
import Comment from '../db/models/comment.model.js';
import Blog from '../db/models/blog.model.js';
import f from 'faker';

const createBlogs = async (r, res) => {
   const u = await User.findById('60c8e5977008b5518069f813');
   const b = new Blog({
      title: 'New blog',
      user: u._id,
      body: 'Hi this is my new blogs',
      comments: ['60ca03b6f3256e1f403de467']
   });

   u.blogs.push(b);
   await u.save();
   await b.save();

   res.json(u);
};

const deleteUser = async (r, res) => {
   const u = await User.findOneAndDelete({ _id: '60c8e5977008b5518069f813' });

   res.json(u);
};
const getUserController = async (req, res) => {
   const u = await User.findOne({ _id: '60c8e5977008b5518069f813' }).populate({
      path: 'blogs', // populate blogs
      // not model name 'Blog'
      select: 'comments title'
      // populate: {
      //    path: 'comments', // in blogs, populate comments
      //    //not model name "Comment"
      //    select: 'body user'
      // }
   });

   res.json(u);

   // res.json(u);
};

export { getUserController, createBlogs, deleteUser };
