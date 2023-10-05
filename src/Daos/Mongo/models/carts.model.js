const { Schema, model } = require (`mongoose`)


const collection =  `carts`


const cartSchema = new Schema({
    products: {
        type: [{
            product: {
                type: Schema.Types.ObjectId,
                ref: `products`
            }
        }]
    },
    quantity: { 
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    }
})

const cartModel =  model(collection, cartSchema)

module.exports = { cartModel }