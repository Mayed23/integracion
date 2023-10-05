const { Router } = require(`express`)
const { uploader } = require(`../utils/multer.js`)
const messageUsers = require(`../views/message`)


const router = Router()

router.get(`/subirarch`, (req, res) => {
    res.render(`subirArch`)
})

router.post(`/subirarch`, uploader.single(`file`), (req, res) =>{
    if(!req.file) return res.status(400).send({status: `error`, error: `No se pudo guardar la Imagen`})

    res.send({status: `success`, payload: `Archivo subido con Éxito`})

 })

 router.get(`/message`, (req, res) => {
    res.render(`message`)
})

router.post(`/message`, uploader.single(`file`), (req, res) =>{
    if(!req.file) return res.status(400).send({status: `error`, error: `No se pudo enviar el mensaje`})
    res.send({status: `success`, payload: `mensaje enviado`})


})

module.exports = router