const express = require('express');
const routes = require('./routes/index')
const app = express();

const port = 1245;

app.use('/', routes);

app.listen(port);

module.exports = app;
