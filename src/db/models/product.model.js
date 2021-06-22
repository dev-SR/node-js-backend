import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         require: [true, 'Please enter product name'],
         trim: true,
         maxLength: [100, 'Product name cannot exceed 100 characters']
      },
      price: {
         type: Number,
         require: [true, 'Please enter product price'],
         default: 0.0,
         maxLength: [8, 'Product price cannot exceed']
      },
      description: {
         type: String,
         require: [true, 'Please enter product description']
      },
      rating: {
         type: Number,
         default: 0
      },
      images: [
         {
            public_id: {
               type: String,
               required: true
            },
            url: {
               type: String,
               required: true
            }
         }
      ],
      category: {
         type: String,
         required: [true, 'Please select category for this product'],
         enum: {
            values: [
               'Electronics',
               'Cameras',
               'Laptop',
               'Accessories',
               'Headphones',
               'Food',
               'Books',
               'Clothes/Shoes',
               'Beauty/Health',
               'Sports',
               'Outdoor',
               'Home'
            ],
            message: 'Please select correct category for product'
         }
      },
      seller: {
         type: String,
         required: [true, 'Please enter product seller']
      },
      stock: {
         type: Number,
         required: [true, 'Please enter product stock'],
         default: 0,
         maxLength: [5, 'Product price cannot exceed 100 characters']
      },
      reviews: [
         {
            name: {
               type: String,
               required: true
            },
            rating: {
               type: Number,
               required: true
            },
            comment: {
               type: String,
               required: true
            }
         }
      ]
   },
   { timestamps: true }
);

export default mongoose.model('Product', ProductSchema);
