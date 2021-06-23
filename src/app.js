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

// Handling Uncaught Exceptions
process.on('uncaughtException', (e) => {
   log.error(e.message);
   log.warn('Shutting down due to uncaught exception');
   process.exit(1);
});

//Connecting to database
connectDB();

// Handle Unhandled Promise Rejection e.g  MongoParseError: Invalid connection string
const server = app.listen(port, () => {
   log.info(
      `Server listening at http://localhost:${port} in ${environment} mode`
   );
});

process.on('unhandledRejection', (e) => {
   log.error(e.message);
   log.warn('Shutting down the server due to Unhandled Promise rejection');
   server.close(() => {
      process.exit(1);
   });
});
