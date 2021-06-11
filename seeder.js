import mongoose from 'mongoose';
import log from './src/core/logger.js';
import { db_uri } from './src/config.js';
import fs from 'fs';
import path from 'path';
const __dirname = path.resolve(path.dirname(''));
const filePath = path.join(__dirname, 'src/db/seeds', 'user.json');
log.info('dir: ' + filePath);

//load Models
import { User } from './src/db/models/user.model.js';

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
//Read JSON files
const user = JSON.parse(fs.readFileSync(filePath));

//Import Data
const importData = async () => {
   try {
      await User.create(user);
      log.info('Data Imported....');
      process.exit();
   } catch (e) {
      log.error(e);
   }
};

//Delete data
const deleteData = async () => {
   try {
      await User.deleteMany();
      log.error('Data Deleted....');
      process.exit();
   } catch (e) {
      log.error(e);
   }
};

let flag = process.argv[2];
if (flag === '-i') {
   importData();
} else if (flag === '-d') {
   deleteData();
}
