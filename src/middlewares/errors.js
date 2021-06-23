import { environment } from '../config.js';
export default function errors(err, req, res, next) {
   err.statusCode = err.statusCode || 500;
   if (environment === 'DEVELOPMENT') {
      res.status(err.statusCode).json({
         success: false,
         error: err,
         message: err.message,
         stack: err.stack
      });
   }

   if (environment === 'PRODUCTION') {
      let error = { ...err };
      error.message = err.message;
      res.status(error.statusCode).json({
         success: false,
         message: error.message || 'Internal Server Error'
      });
   }
}
