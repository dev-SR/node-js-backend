import { User, Post } from '../db/models/user.model.js';

const getUserController = async (req, res) => {
   const u = await User.find({});
   res.json(u);
};
const createUserController = async (req, res) => {
   const u = await User.create({ name: req.body.name });
   res.json(u);
};

const createPostController = async (req, res) => {
   const { id } = req.params;
   const p = await Post.create({
      title: 'Hello world Hello worldHello world',
      postedBy: id,
      comments: [
         {
            text: 'hi',
            postedBy: id
         },
         {
            text: 'Hello',
            postedBy: id
         },
         {
            text: 'bye',
            postedBy: id
         }
      ]
   });
   res.json(p);
};
export { getUserController, createUserController, createPostController };
