const express = require (`express`)
const hadlebars = require (`express-handlebars`)
const routerApp = require (`./router/index`)
const { connectDb } = require (`./config/config.js`)

const app = express()
const PORT = 8080

connectDb()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//configuracion handlebars
app.engine(`hbs`, hadlebars.engine({
    extname: `.hbs`
}))

app.set(`view engine`, `hbs`)
app.set(`views`, __dirname + `/views`)


app.use(routerApp)


app.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`)
})


