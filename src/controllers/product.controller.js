import Product from '../db/models/product.model.js';
import ErrorHandler from '../utils/errorHandler.js';
import catchAsyncError from '../middlewares/catchAsyncErrors.js';
import QueryHelper from '../utils/QueryHelper.js';

const newProduct = catchAsyncError(async (req, res) => {
	const product = await Product.create(req.body);
	res.json({
		success: true,
		data: product
	});
});

const getAllProduct = catchAsyncError(async (req, res) => {
	//if there is no defined callback, a query builder interface is returned
	//by static helper methods of Mongoose model
	let queryBuilder = Product.find();
	// const QHInstance = new QueryHelper(queryBuilder, req.query);
	// const QHInstance = QHInstance.search();
	// const products = await QHInstance;
	const QHInstance = new QueryHelper(queryBuilder, req.query)
		.search()
		.filter();
	const products = await QHInstance.query;
	res.json({
		success: true,
		count: products.length,
		data: products
	});
});
const getSingleProduct = catchAsyncError(async (req, res, next) => {
	const product = await Product.findById(req.params.id);
	if (!product) return next(new ErrorHandler('Product Not Found', 404));

	res.json({
		success: true,
		data: product
	});
});

const updateProduct = catchAsyncError(async (req, res) => {
	let product = await Product.findById(req.params.id);
	if (!product) return next(new ErrorHandler('Product Not Found', 404));

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
	if (!product) return next(new ErrorHandler('Product Not Found', 404));
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
