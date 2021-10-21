const categoryRouter = require('./category.routes');
const shopRouter = require('./shop.routes');
const itemRouter = require('./item.routes');
const listRouter = require('./list.routes');

module.exports = app => {
    app.use('/api/categories', categoryRouter);
    app.use('/api/shops', shopRouter);
    app.use('/api/items', itemRouter);
    app.use('/api/lists', listRouter);
}