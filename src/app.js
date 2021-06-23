import express from 'express';
const app = express();
import { port, environment } from './config.js';
import log from './utils/logger.js';
import { connectDB } from './db/db.js';
import errorHandlerMiddleware from './middlewares/errors.js';
app.use(express.json());

//import routes
import productRouter from './routes/product.route.js';
app.use('/api/v1', productRouter);

// Error Middleware
app.use(errorHandlerMiddleware);

//Connecting to database
connectDB();

app.listen(port, () => {
   log.info(
      `Server listening at http://localhost:${port} in ${environment} mode`
   );
});
