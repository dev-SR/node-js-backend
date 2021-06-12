import log from '../core/logger.js';
import fs from 'fs';
import faker from 'faker';
import path from 'path';
const rootDir = path.resolve(path.dirname(''));
const __dirname = path.join(rootDir, 'seeds');

function GenerateData(fileName = 'data.json', N = 10) {
   let data = [];
   let i;
   //Customs Helpers
   let _ = {
      arrayOfCat: function () {
         //Generate Array of categories
         let ar = [];
         let N = Math.floor(Math.random() * 5) + 1;
         for (let i = 0; i < N; i++) {
            let cat = faker.commerce.department();
            ar.push(cat);
         }
         return ar;
      },
      arrayOfPhotos: function () {
         let ar = [];
         // 0 or 1
         let ZeroOrOne = Math.floor(Math.random() * 2) + 0;
         // if 1 generate multiple image
         if (ZeroOrOne === 1) {
            let N = Math.floor(Math.random() * 5) + 1;
            for (let i = 0; i < N; i++) {
               let img = faker.image.image();
               ar.push(img);
            }
            return ar;
         } else {
            //if 0  use default image
            ar.push('no-photos.png');
            return ar;
         }
      }
   };
   for (i = 0; i < N; i++) {
      data.push({
         name: faker.commerce.productName(),
         price: faker.commerce.price(),
         onSale: faker.datatype.boolean(),
         categories: _.arrayOfCat(),
         qty: {
            online: faker.datatype.number(50),
            inStore: faker.datatype.number(50)
         },
         others: {
            photos: _.arrayOfPhotos()
         }
      });
   }

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
