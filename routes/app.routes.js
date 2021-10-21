const categoryRouter = require('./category.routes');
const shopRouter = require('./shop.routes');
const itemRouter = require('./item.routes');

module.exports = app => {
    app.use('/api/categories', categoryRouter);
    app.use('/api/shops', shopRouter);
    app.use('/api/items', itemRouter);
}