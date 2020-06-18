'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 9000;

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


