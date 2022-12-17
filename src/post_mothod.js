const express = require('express')

const app = express()

app.use(express.json())//para recibir formatos json //middleware de express
app.use(express.text())//para recibir textos //middleware de express
app.use(express.urlencoded({extended: false}))//para datos de formulario //middleware de express

app.post('/user', (req, res)=>{
    console.log(req.body)
    res.send('Nuevo usuario creado')
})

app.listen(3000)