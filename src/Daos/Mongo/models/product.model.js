const { Schema, model } = require (`mongoose`)


const collection =  `products`


const productSchema = new Schema({
    name: {
        type: String,
        max: 30,
        required: true
    },
    model: {
        type: String,
        max: 30,
        requird: true
    },
    code: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    stock: {
        type: Number
    },
    category: {
        type: String
    },
    img: {
        type: String
    }
})

const productModel = model(collection, productSchema)

module.exports = { productModel }


