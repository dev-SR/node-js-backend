import { environment } from '../config.js';
import ErrorHandler from '../utils/errorHandler.js';
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

   if (environment == 'PRODUCTION') {
      let error = { ...err };
      error.message = err.message;
      //Wrong Mongoose Object ID error
      if (err.name === 'CastError') {
         const message = `Resource not found. Invalid: ${err.path}`;
         error = new ErrorHandler(message, 400);
      }

      // Mongoose Validation Error
      if (err.name === 'ValidationError') {
         const message = Object.values(err.errors).map(
            (value) => value.message
         );
         error = new ErrorHandler(message, 400);
      }

      res.status(error.statusCode).json({
         success: false,
         message: error.message || 'Internal Server Error'
      });
   }
}
