import { Router } from 'express';
import {
   getUserController,
   createUserController,
   createPostController
} from '../controllers/user.controller.js';
const router = Router();

router.get('/', getUserController);
router.post('/', createUserController);
router.post('/post/:id', createPostController);

export default router;
