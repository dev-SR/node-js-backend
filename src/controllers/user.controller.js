import User from '../db/models/user.model.js';
import Post from '../db/models/post.model.js';

const getUserController = async (req, res) => {
   const u = await User.find();
   res.json(u);
};

export { getUserController };
