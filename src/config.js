import dotenv from 'dotenv';
dotenv.config();
export const environment = process.env.NODE_ENV;
export const port = process.env.PORT;

export const db_uri = process.env.DB_LOCAL_URI;

export const db = {
   name: process.env.DB_NAME || '',
   host: process.env.DB_HOST || '',
   port: process.env.DB_PORT || '',
   user: process.env.DB_USER || '',
   password: process.env.DB_USER_PWD || ''
};
