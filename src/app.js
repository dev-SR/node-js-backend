import express from 'express';
const app = express();
import { port, environment } from './config.js';
import log from './core/logger.js';
import { connectDB } from './db/db.js';
app.use(express.json());

//import routes
import userRouter from './routes/user.route.js';
import proRouter from './routes/product.route.js';
app.use('/api/v1', proRouter);

//Connecting to database
connectDB();

app.listen(port, () => {
   log.info(
      `Server listening at http://localhost:${port} in ${environment} mode`
   );
});
