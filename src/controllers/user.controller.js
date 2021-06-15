import User from '../db/models/user.model.js';
import Comment from '../db/models/comment.model.js';
import Blog from '../db/models/blog.model.js';

const getUserController = async (req, res) => {
   const u = await User.findOne({ _id: '60c8e5977008b5518069f814' }).populate({
      path: 'blogs', // populate blogs
      // not model name 'Blog'
      select: 'comments title',
      populate: {
         path: 'comments', // in blogs, populate comments
         //not model name "Comment"
         select: 'body user'
      }
   });

   res.json(u);

   // res.json(u);
};

export { getUserController };
