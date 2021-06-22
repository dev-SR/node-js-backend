import log from '../core/logger.js';
import fs from 'fs';
import faker from 'faker';
import ObjectID from 'bson-objectid';

import path from 'path';
const rootDir = path.resolve(path.dirname(''));
const __dirname = path.join(rootDir, 'seeds');

// Generate Object id
// let GeneratedObjectIDs = [];
// for (let i = 0; i < 5; i++) {
//    let id = ObjectID();
//    ObjectIDs.push(id);
// }
let counter1 = 0;
let counter2 = 0;

function getRandom(N) {
   let r = Math.floor(Math.random() * N) + 1;
   return r;
}

function GenerateData(fileName = 'data.json', N = 10) {
   //Customs Helpers
   let _ = {
      unique_id: 0,
      random_unique_FromGiven: function (arr, count) {
         if (this.unique_id === arr.length) {
            log.error(
               `Array Out of Bound; Max Allowed ${this.unique_id} items`
            );
            process.exit();
         }
         let one = arr[this.unique_id++];
         return uuid;
      },
      arrayOfUUID: function () {
         let ar = [];
         let N = Math.floor(Math.random() * 4) + 1;
         for (let i = 0; i < N; i++) {
            // let uid = this.randomUUIDFromGiven();
            // let uid = this.randomUUIDFromGenerated();
            let uid = ObjectID();
            ar.push(uid);
         }
         return ar;
      }
   };
   //Generate Data:
   let data = [...Array(N)].map(() => ({
      name: faker.commerce.productName(),
      price: faker.commerce.price(10, 1000000),
      description: faker.lorem.sentences(4),
      rating: faker.datatype.number(5),
      images: [...Array(getRandom(5))].map(() => ({
         url: faker.image.food(),
         public_id: faker.datatype.uuid()
      })),
      category: faker.random.arrayElement([
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
      ]),
      seller: faker.company.companyName(),
      stock: faker.datatype.number(5),
      reviews: [...Array(getRandom(4))].map(() => ({
         name: faker.name.findName(),
         rating: faker.datatype.number(5),
         comment: faker.lorem.sentences()
      }))
   }));

   // Delete Old File !!not necessary as writeFileSync overwrite old data.
   try {
      fs.unlinkSync(`${__dirname}\\${fileName}`);
      log.info('✖ Old file File deleted!');
   } catch (err) {}

   //Create New FIle
   fs.writeFileSync(`${__dirname}\\${fileName}`, JSON.stringify(data, null, 3));
   log.info(`✔ ${N}th items generated at: ${__dirname}\\${fileName}`);
}

let [, , fileName, N] = process.argv;
GenerateData(fileName, N);
//https://github.com/Marak/faker.js
//https://fakerjsdocs.netlify.app
//https://rawgit.com/Marak/faker.js/master/examples/browser/index.html
/**
Generating data: yarn faker [file_name]! [no. of items]!
EX: yarn faker 
EX: yarn faker user.json 
EX: yarn faker user.json 100
*/
