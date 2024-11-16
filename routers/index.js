const productsRouter = require('./productsRouters');
const usersRouter = require('./usersRouters');
const categoriesRouter = require('./categoriesRouters');

function routerApi(app) {
  app.use('/products', productsRouter);
}

module.exports = routerApi;
