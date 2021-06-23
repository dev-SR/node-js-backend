export default function catchAsyncErrors(fun) {
   // takes a async function
   return async (req, res, next) => {
      try {
         await fun(req, res, next); //call that function
      } catch (e) {
         next(e); //pass error to middleware
      }
   };
   //Or, using resolve
   //    return (req, res, next) => {
   //       Promise.resolve(fun(req, res, next)).catch(next);
   //     };
}
