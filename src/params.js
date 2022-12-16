const express = require('express')

const app = express()

app.get('/hello/:user', (req, res)=>{
    const username = req.params.user
    res.send(`hola ${username}`)
})

app.get('/add/:x/:y', (req, res)=>{
    const {x, y} = req.params
    const result = parseInt(x) + parseInt(y)
    res.send(`El resultado es: ${result}`)
})

app.get('/users/:user/photo', (req, res)=>{
    if(req.params.user === "david"){
        return res.sendFile('./btn.png', {
            root: __dirname,
        })
    }
    res.send('El usuario no se encuentra')
})

app.get('/name/:name/age/:age', (req, res)=>{
    res.send(`El usuario ${req.params.name} tiene ${req.params.age} años`)
})

app.listen(3000)