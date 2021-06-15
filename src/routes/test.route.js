import { Router } from 'express';
import { getUserController } from '../controllers/user.controller.js';
const router = Router();

router.get('/u', getUserController);

export default router;
