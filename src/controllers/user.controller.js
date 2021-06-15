import User from '../db/models/user.model.js';
import Comment from '../db/models/comment.model.js';
import Blog from '../db/models/blog.model.js';

const getUserController = async (req, res) => {
   const u = await User.findOne({ _id: '60c8e5977008b5518069f814' }).populate(
      'blogs'
   );
   //use property of user 'blogs' not the model "Blog"

   res.json(u);

   // res.json(u);
};

export { getUserController };
