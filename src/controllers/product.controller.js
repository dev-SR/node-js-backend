import Product from '../db/models/product.model.js';

const newProduct = async (req, res) => {
   const product = await Product.create(req.body);
   res.json({
      success: true,
      data: product
   });
};

const getAllProduct = async (req, res) => {
   const products = await Product.find();
   res.json({
      success: true,
      count: products.length,
      data: products
   });
};
const getSingleProduct = async (req, res) => {
   const product = await Product.findById(req.params.id);
   if (!product)
      return res.json({
         success: false,
         message: 'Product not found'
      });

   res.json({
      success: true,
      data: product
   });
};

const updateProduct = async (req, res) => {
   let product = await Product.findById(req.params.id);
   if (!product)
      return res.json({
         success: false,
         message: 'Product not found'
      });

   product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false
   });
   res.json({
      success: true,
      data: product
   });
};


const deleteProduct = async (req, res) => {
   const product = await Product.findById(req.params.id);
   if (!product)
      return res.json({
         success: false,
         message: 'Product not found'
      });

   await product.remove();
   res.json({
      success: true,
         message: 'Product is deleted'
   });
};
export const ProductController = {
   getAllProduct,
   getSingleProduct,
   newProduct,
   updateProduct,
   deleteProduct
};
