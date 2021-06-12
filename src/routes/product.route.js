import { Router } from 'express';
import {
   updateProduct,
   findProduct
} from '../controllers/product.controllers.js';
const router = Router();

router.put('/p/:id', updateProduct);
router.get('/p', findProduct);

export default router;
