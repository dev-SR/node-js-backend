import express from 'express';
const app = express();
import { port, environment } from './config.js';
import log from './core/logger.js';
import { connectDB } from './db/db.js';
app.use(express.json());

//import routes
import testRouter from './routes/test.route.js';
app.use('/api/v1', testRouter);

//Connecting to database
connectDB();

app.listen(port, () => {
   log.info(
      `Server listening at http://localhost:${port} in ${environment} mode`
   );
});
