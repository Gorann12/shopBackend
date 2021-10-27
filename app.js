const express = require("express");
const app = express();
require("./db/connection");

app.use(express.json());

require("./routes/app.routes")(app);

module.exports = app;
