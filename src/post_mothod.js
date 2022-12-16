const express = require('express')

const app = express()

app.use(express.json())//para recibir formatos json
app.use(express.text())//para recibir textos
app.use(express.urlencoded({extended: false}))//para datos de formulario

app.post('/user', (req, res)=>{
    console.log(req.body)
    res.send('Nuevo usuario creado')
})

app.listen(3000)