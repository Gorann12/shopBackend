const express = require('express');
const app = express();
require('./db/connection');

app.use(express.json());

require('./routes/app.routes')(app);

app.listen(3000, () => {
    console.log('App is listening on port 3000');
})