import { Router } from 'express';
import {
   getUserController,
   createBlogs,
   deleteUser
} from '../controllers/user.controller.js';
const router = Router();

router.get('/u', getUserController);
router.post('/u/b', createBlogs);
router.delete('/u', deleteUser);

export default router;
