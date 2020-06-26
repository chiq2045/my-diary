const Koa = require('koa');
const Router = require('@koa/router');
const koaBody = require('koa-body');

const users = new Koa();
const userRouter = new Router();

userRouter
userRouter
  .get('/', ctx => {
    console.log('Get all users');
    ctx.status = 200;
    ctx.body = { message: 'Get all users' };
  })
  .get('/:id', ctx => {
    const { id } = ctx.params;
    console.log(`Get user with id ${id}`);
    ctx.status = 200;
    ctx.body = { message: 'Get user with id', id: id};
  })
  .post('/', koaBody(), ctx => {
    const { emailAddress, password, name } = ctx.request.body;
    console.log('Create a new user');
    console.log({
      emailAddress: emailAddress,
      password: password,
      name: name
    });
    ctx.status = 200;
    ctx.body = {
      message: 'Create a new user',
      user: {
        emailAdress: emailAddress,
        password: password,
        name: name
      }
    };
  })
  .put('/:id', ctx => {
    const { id } = ctx.params;
    console.log(`Update user with id ${id},\nor create one if it doesn't exist`);
    ctx.status = 200;
    ctx.body = {
      message: 'Update user with given id',
      id: id
    };
  })
  .delete('/:id', ctx => {
    const { id } = ctx.params;
    console.log(`Delete user with id ${id}`);
    ctx.status = 200;
    ctx.body = {
      message: 'Delete user with given id',
      id: id
    };
  }); 

users.use(userRouter.routes());
users.use(userRouter.allowedMethods());

module.exports = users;
