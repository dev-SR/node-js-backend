import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.get('/', (r, res) => {
   res.send('Hello World');
});

export default app;
