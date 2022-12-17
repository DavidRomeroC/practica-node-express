const express = require('express')

const app = express()

app.get('/search', (req, res)=>{
    if(req.query.q === 'javascript'){
        return res.send('lista de libros de javascript')
    }
    res.send('Buscar algo')
})

app.get('/hello/:user', (req, res)=>{
    console.log(req.query.name)
    console.log(req.query.last_name)
    const username = req.params.user
    res.send(`hola ${username}`)
})

app.listen(3000)