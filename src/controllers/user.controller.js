import User from '../db/models/user.model.js';

const userController = async (req, res, next) => {
   const u = await User.create({ name: 'ABC' });
   res.json(u);
};

export { userController };
