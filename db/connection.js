const mongoose = require("mongoose");
mongoose
  .connect("mongodb://mongo:27017/shop")
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));
