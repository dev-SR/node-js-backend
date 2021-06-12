import mongoose from 'mongoose';
import { db_uri } from '../config.js';
import log from '../core/logger.js';
export const connectDB = () => {
   mongoose
      .connect(db_uri, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         useCreateIndex: true,
         useFindAndModify: false
      })
      .then((con) => {
         log.info(`DB connected with HOST: ${con.connection.host}`);
      })
      .catch((error) => {
         log.error('DB error', error);
         process.exit(1);
      });
};
