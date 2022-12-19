const express = require('express')
const morgan = require('morgan')
require('ejs')
const path = require('path')
const homeRoute = require('./routes/home')
const aboutRoutes = require('./routes/about')


const app = express()
//los middlewares y settings deben ir al inicio de la aplicacion para que se apliquen cambios o restricciones en las rutas
//settings
app.set('case sensitive routing', true)//middleware set para que las rutas sean case sensitive 
app.set('appName', "Express curse")
app.set('port', 3000)
//configurarion para que funcione ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
//middlewares
app.use(morgan('dev'))

app.use(homeRoute)
app.use(aboutRoutes)

console.log(__dirname)
app.use(express.static(path.join(__dirname, 'static')))//middleware para servir archivos estaticos a todas las rutas y por lo general se procesa al final de todas las rutas
// app.use('/profile', express.static('./static')) //para acceder a los archivos estaticos desde una ruta fija


app.listen(app.get('port'), () => {
    console.log(`Server ${app.get('appName')} on port ${app.get('port')}`)
})