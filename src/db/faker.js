import log from '../core/logger.js';
import fs from 'fs';
import faker from 'faker';
import path from 'path';
const rootDir = path.resolve(path.dirname(''));
const __dirname = path.join(rootDir, 'seeds');

function GenerateData(fileName = 'data.json', N = 10) {
   let user = [];
   let i;
   for (i = 0; i < N; i++) {
      user.push({
         name: faker.name.firstName(),
         email: faker.internet.email()
      });
   }

   // Delete Old File !!not necessary as writeFileSync overwrite old data.
   try {
      fs.unlinkSync(`${__dirname}\\${fileName}`);
      log.info('Old file File deleted!');
   } catch (err) {}

   //Create New FIle
   fs.writeFileSync(`${__dirname}\\${fileName}`, JSON.stringify(user, null, 3));
   log.info(`${N}th items generated at: ${__dirname}\\${fileName}`);
}

let [, , fileName, N] = process.argv;
GenerateData(fileName, N);
/**
Generating data: yarn faker [file_name]! [no. of items]!
EX: yarn faker 
EX: yarn faker user.json 
EX: yarn faker user.json 100
*/
