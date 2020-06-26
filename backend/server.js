const Koa = require('koa');
const logger = require('koa-logger');
const mount = require('koa-mount');
const { resolve } = require('path');

const server = new Koa();
const PORT = '1337';
server.use(logger());

const users = require(resolve(__dirname, 'routes', 'users'));
const entries = require(resolve(__dirname, 'routes', 'entries'))
server.use(mount('/users', users));
server.use(mount('/entries', entries));

server.listen(PORT, () => {
  console.log('The server is running at http://localhost:' + PORT);
});
