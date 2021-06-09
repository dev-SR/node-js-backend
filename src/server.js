import app from './app.js';

const port = process.env.PORT;
const mode = process.env.NODE_ENV;
app.listen(port, () => {
   console.log(`http://localhost:${port} in ${mode} mode`);
});
