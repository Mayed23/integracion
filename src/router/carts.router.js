const { Router } = require(`express`)
const { cartsManagerMongo } = require("../Daos/Mongo/carts.Manager.js")



const router = Router()
const carts = new cartsManagerMongo()


router.post("/", async (req,res) => {
    res.send(await carts.addCarts())
})

router.get("/", async (req, res)=>{
    res.send (await carts.readCarts())
})

router.get("/:id", async (req, res)=>{
    res.send (await carts.getCartsById(req.params.id))
})

router.post("/cid/products/pid", async (req, res)=>{
    let cartsId = req.params.cid
    let prodId = req.params.pid
    res.send(await carts.addToCarts(cartsId,prodId))
})

module.exports = router
