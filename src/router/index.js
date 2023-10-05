const { Router } = require(`express`)
const usersRouter = require(`./users.router.js`)
const viewsRouter = require(`./views.router.js`)
const productRouter = require(`./products.router.js`)
const cartsRouter = require(`./carts.router.js`)


const router = Router()


// router.use(`/`, (req, res)=>{
//     res.send('Bienvenidos')
// })

router.use(`/views`, viewsRouter)
router.use(`/api/message`, viewsRouter)
router.use(`/api/users`, usersRouter)
router.use(`/api/products`, productRouter)
router.use(`/api/carts`, cartsRouter)



module.exports = router