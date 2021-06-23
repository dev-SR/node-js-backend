import Product from '../db/models/product.model.js';
import ErrorHandler from '../utils/errorHandler.js';
import catchAsyncError from '../middlewares/catchAsyncErrors.js';

const newProduct = catchAsyncError(async (req, res) => {
   const product = await Product.create(req.body);
   res.json({
      success: true,
      data: product
   });
});

const getAllProduct = catchAsyncError(async (req, res) => {
   const products = await Product.find();
   res.json({
      success: true,
      count: products.length,
      data: products
   });
});
const getSingleProduct = catchAsyncError(async (req, res, next) => {
   const product = await Product.findById(req.params.id);
   if (!product) return next(new ErrorHandler('Product Not Found'));

   res.json({
      success: true,
      data: product
   });
});

const updateProduct = catchAsyncError(async (req, res) => {
   let product = await Product.findById(req.params.id);
   if (!product) return next(new ErrorHandler('Product Not Found'));

   product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false
   });
   res.json({
      success: true,
      data: product
   });
});

const deleteProduct = catchAsyncError(async (req, res) => {
   const product = await Product.findById(req.params.id);
   if (!product) return next(new ErrorHandler('Product Not Found'));
   await product.remove();
   res.json({
      success: true,
      message: 'Product is deleted'
   });
});
export const ProductController = {
   getAllProduct,
   getSingleProduct,
   newProduct,
   updateProduct,
   deleteProduct
};
