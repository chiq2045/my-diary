const Koa = require('koa');
const Router = require('@koa/router');
const koaBody = require('koa-body');

const users = new Koa();
const userRouter = new Router();

userRouter
  .get('/', ctx => {
    const { id } = ctx.query;
    if (!id) {
      console.log('Get all users');
      ctx.body = { message: 'There are no users yet' };
    } else{
      console.log(`Get user with id ${id}`);
      ctx.body = { id: id, message: 'Still no user here yet' };
    }
    ctx.status = 200;
  })
  .post('/', koaBody(), ctx => {
    const { userName, password } = ctx.request.body;
    console.log('Add the following user:');
    console.log({
      userName: userName,
      password: password
    });
    ctx.status = 200;
    ctx.body = {
      message: 'User creation is not yet implemented',
      user: {
        userName: userName,
        password: password
      }
    };
  })
  .put('/', koaBody(), ctx => {
    const { id } = ctx.query;
    console.log(`Update user with id ${id}`);
    ctx.status = 200;
    ctx.body = { id: id, message: 'Still no user here yet' };
  })
  .delete('/', koaBody(), ctx => {
    const { id } = ctx.query;
    console.log(`Delete user with id ${id}`);
    ctx.status = 200;
    ctx.body = { id: id, message: 'Still no user to delete here here yet' };
  });

users.use(userRouter.routes());
users.use(userRouter.allowedMethods());

module.exports = users;
