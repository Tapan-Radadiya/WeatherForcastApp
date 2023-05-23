const express = require("express")
const app = express()
const path = require("path")
const { engine } = require("express-handlebars")
const hbs = require('hbs')
const port = 3000

// path variables
const publicPath = path.join(__dirname, './public')
const templatesPath = path.join(__dirname, './templates/views')
const partialPath = path.join(__dirname, './templates/partials')

// Path
app.use(express.static(publicPath))
app.set("views", templatesPath)
app.set("view engine", 'hbs')
hbs.registerPartials(partialPath)

// app engine
app.engine(".hbs", engine({
    extname: 'hbs',
    defaultLayout: false,
    layoutsDir: 'views',
    partialsDir: partialPath
}))

// route
app.get("/", (req, res) => {
    res.render("index")
})

app.get("/about", (req, res) => {
    res.render("about")
})
app.get("/weather", (req, res) => {
    res.render("weather")
})
app.get("/contact", (req, res) => {
    res.render("contact")
})
app.get("*", (req, res) => {
    res.render("404error")
})

// live Server 
app.listen(port, (req, res) => {
    console.log("App Is Listening On Port Number", port)
})