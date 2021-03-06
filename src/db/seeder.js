import mongoose from 'mongoose';
import log from '../utils/logger.js';

import path from 'path';
const __dirname = path.resolve(path.dirname(''));
const envPath = path.join(__dirname, '../../.env');
import dotenv from 'dotenv';
dotenv.config({
   path: envPath
});
const db_uri = process.env.DB_LOCAL_URI;
//connect to DB
mongoose
   .connect(db_uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
   })
   .then((con) => {
      log.info(`DB connected with HOST: ${con.connection.host}`);
   })
   .catch((error) => {
      log.error('DB error', error);
      process.exit(1);
   });

//! 1. Read JSON files
/**
 * * OPTION 1: READING AS FILE 
// import fs from 'fs';
// const filePath = path.join(__dirname, 'seeds', 'user.json');
// const users = JSON.parse(fs.readFileSync(filePath));
// log.info('data path: ' + filePath);
// log.info('env path:' + envPath);
// log.info('db_uri: ' + db_uri);
/**
 * *OPTION 2: IMPORTING DIRECTLY
 * ?Node.js ES Modules docs that currently importing JSON is only supported in the CommonJS mode
 * ?and the flag `--experimental-json-modules` is required for importing JSON files in ES modules.
 */
import x from './seeds/product.json';
// console.log(users);
//! 2. load Models
import Model from './models/product.model.js';
//! 3. Import Data

const importData = async () => {
   try {
      await Model.create(x);
      log.info('✔ Data Imported');
      process.exit();
   } catch (e) {
      log.error(e);
   }
};

//! 4. Delete data
const deleteData = async () => {
   try {
      await Model.deleteMany();
      log.warn('✖ Data Deleted');
      process.exit();
   } catch (e) {
      log.error(e);
   }
};

let flag = process.argv[2];
log.info('flag: ' + flag);
if (flag === '-i') {
   importData();
} else if (flag === '-d') {
   deleteData();
}
