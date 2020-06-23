const Koa = require('koa');
const Router = require('@koa/router');

const users = new Koa();
const userRouter = new Router();

userRouter.get('/', () => {
  console.log('Get all users');
  // TODO: implement users route
});

users.use(userRouter.routes());
users.use(userRouter.allowedMethods());

module.exports = users;
