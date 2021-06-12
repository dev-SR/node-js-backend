import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: true,
         maxlength: 50
      },
      price: {
         type: Number,
         required: true,
         min: 0
      },
      onSale: {
         type: Boolean,
         default: false
      },
      categories: [String],
      qty: {
         online: {
            type: Number,
            default: 0
         },
         inStore: {
            type: Number,
            default: 0
         }
      },
      others: {
         photos: {
            type: [String]
         }
      }
   },
   { timestamps: true }
);

ProductSchema.methods.toggleOnSale = function () {
   this.onSale = !this.onSale;
   return this.save();
};

ProductSchema.methods.findProductsInSameCategory = function () {
   return this.model('products').find({
      categories: { $in: [this.categories[0]] }
   });
};
ProductSchema.statics.findByCategory = function (cat) {
   return this.find({
      categories: { $in: [...cat] }
   });
};
ProductSchema.methods.addCategory = function (addCat) {
   this.categories.push(addCat);
   return this.save();
};

export default mongoose.model('products', ProductSchema);
