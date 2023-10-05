const { Router } = require(`express`)
const { productManagerMongo } = require("../Daos/Mongo/product.Manager")



const router = Router()
const product = new productManagerMongo()


router.get("/:limit", async (req, res) =>{
    const limit = req.query.limit
    if (limit){
        return res.send(await product.getProductsLimit(limit))
    }
    res.send(await product.getProducts())
})

router.get("/", async (req, res) =>{
    let _id = req.params.id
    res.send(await product.getProductsById(_id))
})

router.post("/", async (req, res) => {
    let newProduct = req.body
    res.send(await product.addProducts(newProduct))
})

router.put("/:_id", async (req, res) =>{
    let id = req.params.id
    let updateProd = req.body
    res.send (await product.updateProductsById (id, updateProd))
}) 

router.delete("/:_id", async (req, res) =>{
    let id = req.params.id
    res.send(await product.deleteProducts(_id))
})

module.exports = router
