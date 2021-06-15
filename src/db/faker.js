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

function GenerateData(fileName = 'data.json', N = 10) {
   let data = [];
   let i;
   //Customs Helpers
   let _ = {
      randomUUIDFromGiven: function (arr) {
         let uid = faker.random.arrayElement(arr);
         return uid;
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
   for (i = 0; i < N; i++) {
      data.push({
         user: _.randomUUIDFromGiven([
            '60c8e5977008b5518069f811',
            '60c8e5977008b5518069f812',
            '60c8e5977008b5518069f813',
            '60c8e5977008b5518069f814',
            '60c8e5977008b5518069f815'
         ]),
         blog: _.randomUUIDFromGiven([
            '60c8f614e8b4a334bc378b27',
            '60c8f614e8b4a334bc378b28',
            '60c8f614e8b4a334bc378b26',
            '60c8f614e8b4a334bc378b29',
            '60c8f614e8b4a334bc378b2a',
            '60c8f614e8b4a334bc378b2b',
            '60c8f614e8b4a334bc378b2c',
            '60c8f614e8b4a334bc378b2d',
            '60c8f614e8b4a334bc378b2e',
            '60c8f614e8b4a334bc378b2f'
         ]),
         body: faker.lorem.sentences(2)
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
