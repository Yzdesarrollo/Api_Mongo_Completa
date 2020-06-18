// requires
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// import 
const productCtrl= require('./controllers/productController');

// server
const app = express();
const port = process.env.PORT || 9000;

//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//endpoints
app.get('/api/product', productCtrl.getProducts)
app.get('/api/product/:productId', productCtrl.getProduct)
app.post('/api/product', productCtrl.saveProduct)
app.put('/api/product/:productId', productCtrl.updateProduct)
app.delete('/api/product/:productId', productCtrl.deleteProduct)

// server connect
mongoose.connect('mongodb://localhost:27017/productsyzm', (error, res) => {
    if (error) {
        return console.log(`Error al conectar a la base de datos: ${error}`)
    }
    console.log('Conexion establecida a la BD');

    const server = app.listen(port, () => {
        console.log(`API REST corriendo en: http://localhost:${server.address().port}`)
    });

});


