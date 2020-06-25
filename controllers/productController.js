'use strict'
const ProductModel = require('../models/productModel');

function getProducts(req, res){
    ProductModel.find({}, (err, products) => {
        if (err) return res.status(500).send({ message: `Error al realizar la peticion ${err}` })
        if (!products) return res.status(404).send({ message: 'No existen los productos' })

        res.status(200).send({ products })
    })
}

function getProduct(req, res){

    let productId = req.params.productId

    ProductModel.findById(productId, (err, product) => {
        if (err) return res.status(500).send({ message: `Error al realizar la peticion ${err}` })
        if (!product) return res.status(404).send({ message: `El producto no existe` })

        res.status(200).send({ product: product })
    })
}

function saveProduct(req, res) {
    //probando si llegan los datos
    console.log('POST:/api/product');
    console.log(req.body);

    // instanciando el modelo
    let products = new ProductModel()

    // propiedades del modelo
    products.name = req.body.name
    products.price = req.body.price
    products.category = req.body.category
    products.image = req.body.image

    // Guardando el producto y respuesta al cliente
    products.save((err, data) => {
        if (err) return res.status(500).send({ message: `no se pudo guardar los datos: ${err}` })
        res.status(200).send({ products: data })
    })
}

function updateProduct(req, res) {
    let productId = req.params.productId
    let updateData = req.body

    ProductModel.findByIdAndUpdate(productId, updateData, (err, productUpdated) => {
        if (err) res.status(500).send({ message: `Error al actualizar el producto: ${err}` })
        res.status(200).send({ product: productUpdated })
    })
}

function deleteProduct(req, res) {
    let productId = req.params.productId

    ProductModel.findById(productId, (err, product) => {
        if (err) res.status(500).send({ message: `Producto no encontrado: ${err}` })

        product.remove(err => {
            if (err) res.status(500).send({ message: `Error al borrar el producto: ${err}` })
            res.status(200).send({ message: 'El producto ha sido eliminado' })
        })
    })
}

module.exports = {
    getProducts,
    getProduct,
    saveProduct,
    updateProduct,
    deleteProduct
}