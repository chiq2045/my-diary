const Koa = require('koa');
const logger = require('koa-logger');

const server = new Koa();

const PORT = '1337';
server.use(logger());

server.listen(PORT, () => {
  console.log('The server is running at http://localhost:' + PORT);
});
