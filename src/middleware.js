const express = require('express')

const app = express()
///////////////////////////////////////////////////////////////////////////////////////
/////////////MIDDLEWARE///////////////////////////////////////////////////////////////
/////////////////////FUNCIONAN EN BLOQUE Y CASCADA////////////////////////////////////
app.use((req, res, next) => {
    console.log('paso por aqui')
    console.log(`Route: ${req.url}, method: ${req.method}`)
    next()//metodo de express para continuar con los siguientes bloques de codigo
})

app.use((req, res, next) => {
    if (req.query.login === 'david@gmail.com') {
        next()
    } else {
        res.send('login incorrecto')
    }
})
////////////////////////////////////////////////////////////////////////////////////////
app.get('/dashboard', (req, res) => {
    res.send('Dashboard page')
})

app.get('/profile', (req, res) => {
    res.send('profile page')
})

app.listen(3000)