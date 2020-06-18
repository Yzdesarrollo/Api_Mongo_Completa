'use strict'
// requires
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//routes 
const api = require('./routes/routes');

//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', api);

module.exports = app;