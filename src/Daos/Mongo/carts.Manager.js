const { cartsModel } =  require(`./models/carts.model.js`) 
const { productManagerMongo } = require(`./product.Manager.js`) 


class cartsManagerMongo{
    constructor(){
        this.model= cartsModel
    }


    readCarts = async () => {
        let carts = await this.model.readFile(cartsModel)
        return JSON.parse(carts)
    }

    writeCarts = async (cart) => {
        await this.model.writeFile(cartsModel)
    }

    addCarts = async () => {
        let cartPre = await this.model.readCarts()
        let cartNew = [{_id : id, products : []}, ...cartPre]
        await this.writeCarts(cartNew)
        return "Carrito agregado" 
    }

    exist = async (id)=>{
        let carts = await this.model.readCarts()
        return carts.find(cart => cart.id === id)
    }

    getCartsById = async (id) => {
        
        let cartId = await this.model.exist(id)
        if (!cartId) return "Carrito no encontrado"
        return cartId
    }

    addToCarts = async (cartId, prodId) =>{
        let cartsId = await this.model.exist(cartId)
        if (!cartsId) return "Carrito no encontrado"   
        let prodpId = await productAll.exist(prodId)
        if (!prodpId) return "Producto no encontrado" 
        let cartsAll = await this.model.readCarts()
        let cartsFilter = cartsAll.filter(cart => cart.id != cartId)

        if(cartsId.products.some(prod => prod.id === prodId)){
         let prodInCart = cartId.products.find (prod => prod.id === prodId)
         prodInCart.cantidad+1
            let cartNew = [prodInCart, ...cartsFilter] 
            await this.model.writeCarts(cartNew)
            return "Producto sumado al carrito"
        }
        cartId.products.push({id:prodId.id, cantidad:1})

        let cartsNew = [cartId, ...cartsFilter]

        await this.model.writeCarts (cartsNew)
        return "Producto Agregado al Carrito"

    }
}    

module.exports = { cartsManagerMongo }