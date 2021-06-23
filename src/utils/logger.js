/**
 Due to Node's single-threaded event loop, it's highly recommended that log processing, alert triggering, and reformatting is done in a separate process. In Pino, all log processes are called transports and run as a separate process, piping stdout of an application to stdin of the transport. It can be used with several web frameworks. Also, the Pino-pretty module can be used to format logs during development.
*/

import logger from 'pino';
import dayjs from 'dayjs';
// import { environment } from '../config.js';
const log = logger({
   // level: environment === 'production' ? 'info' : 'debug',
   prettyPrint: true,
   base: {
      pid: false
   },
   timestamp: () => `,"time":"${dayjs().format()}"`
});

export default log;
