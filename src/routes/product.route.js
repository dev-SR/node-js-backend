import { Router } from 'express';

const router = Router();
import { ProductController } from '../controllers/product.controller.js';

router.get('/products', ProductController.getAllProduct);
router.get('/product/:id', ProductController.getSingleProduct);
router.post('/admin/product/new', ProductController.newProduct);
router.route( '/admin/product/:id' )
	.put( ProductController.updateProduct )
	.delete( ProductController.deleteProduct );

export default router;
