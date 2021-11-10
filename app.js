const express = require("express");
const cors = require("cors");
const app = express();
require("./db/connection");

app.use(express.json());
app.use(cors());

require("./routes/app.routes")(app);

module.exports = app;
