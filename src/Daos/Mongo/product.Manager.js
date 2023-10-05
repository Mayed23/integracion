const { productsModel } = require(`./models/product.model`)


class productManagerMongo {
    constructor() {
        this.model = productsModel
    }

    readProducts = async () => {
        let products = await this.model.readProducts()
        return JSON.parse(products)
    }

    writeProducts = async (product) => {
        await this.model.writeFile(product)
    }

    addProducts = async (product) => {
        let prod = await this.model.readProducts()
        // product.id = nanoid(6)
        let productAll = [...prod, product]
        await this.model.writeProducts(productAll)
        return "Producto Agregado"

    }
        

    getProducts = async () => {
        return await this.model.readProducts()
    }

    exist = async (_id)=>{
        let product = await this.model.readProducts()
        return product.find(prod => prod.id === _id)
    }

    getProductsById = async (_id) => {
        
        let prodId = await this.exist(_id)
        let product = prodId.find(product => product.id === _id)
              
        if (!prodId) return "Producto no encontrado"
        return (product)
    }

    getProductsLimit = async (limit) => {
        const products = await this.model.readProducts()
        const productsList =[]
        for (let i = 0; 1 < limit; i++) {
            productsList.push (products[i])
        } 
        return productsList()
    }

   

    updateProductsById = async (id, product) =>{
        let prodId = await this.model.exist(id)
        if(!prodId) return "Producto no encontrado"
        await this.deleteProducts(id)
        let prod = await this.readProducts()
        let products = [{...product, id : id}, ...prod]
        await this.writeProducts(products)
        return "Producto Actualizado con éxito"
    }

    deleteProducts = async (id) => {
        let products = await this.model.readProducts()
        let prodExist = products.some(prod => prod.id === id)
        if (prodExist) {
            let prodFilter = products.filter(prod => prod.id != id)
            await this.writeProducts(prodFilter)
            return "Producto Eliminado"
        }
        return "Producto no encontrado"
    }
}

module.exports = { productManagerMongo }
