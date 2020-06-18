'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');

// server connect
mongoose.connect(config.db, (error, res) => {
    if (error) {
        return console.log(`Error al conectar a la base de datos: ${error}`)
    }
    console.log('Conexion establecida a la BD');

    app.listen(config.port, () => {
        console.log(`API REST corriendo en: http://localhost:${config.port}`)
    });

});


