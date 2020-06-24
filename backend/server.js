const Koa = require('koa');
const logger = require('koa-logger');
const mount = require('koa-mount');
const { resolve } = require('path');

const server = new Koa();
const PORT = '1337';
server.use(logger());

const users = require(resolve(__dirname, 'users'));
server.use(mount('/users', users));

server.listen(PORT, () => {
  console.log('The server is running at http://localhost:' + PORT);
});
