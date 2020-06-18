'use strict'
// requires
const express = require('express');
const bodyParser = require('body-parser');

// server
const app = express();

// controller
const productCtrl= require('./controllers/productController');

//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//endpoints
app.get('/api/product', productCtrl.getProducts)
app.get('/api/product/:productId', productCtrl.getProduct)
app.post('/api/product', productCtrl.saveProduct)
app.put('/api/product/:productId', productCtrl.updateProduct)
app.delete('/api/product/:productId', productCtrl.deleteProduct)

module.exports = app;