import Product from '../db/models/product.model.js';
import log from '../core/logger.js';

export const updateProduct = async (req, res) => {
   const { id } = req.params;

   try {
      const newP = await Product.findOneAndUpdate(
         { _id: id },
         { name: 'UPdated', price: 100 },
         { new: true, runValidators: true, select: 'price name' }
      );
      res.json(newP);
   } catch (e) {
      log.error(e);
      res.json(e);
   }
};

export const findProduct = async (req, res) => {
   const pp = await Product.findByCategory(['Shoes']);
   res.json({ searched: pp });
};
