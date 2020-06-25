'use strict'

const express = require('express');
const productCtrl = require('../controllers/productController');
const api = express.Router();

//endpoints
//http://localhost:9000/api/product
api.get('/product', productCtrl.getProducts)
//http://localhost:9000/api/product/id
api.get('/product/:productId', productCtrl.getProduct)
//http://localhost:9000/api/product
api.post('/product', productCtrl.saveProduct)
//http://localhost:9000/api/product/id
api.put('/product/:productId', productCtrl.updateProduct)
//http://localhost:9000/api/product/id
api.delete('/product/:productId', productCtrl.deleteProduct)

module.exports = api;