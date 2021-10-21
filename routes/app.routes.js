const categoryRouter = require("./category.routes");
const shopRouter = require("./shop.routes");

module.exports = app => {
    app.use('/api/categories', categoryRouter);
    app.use('/api/shops', shopRouter);
}