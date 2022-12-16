const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    res.send('<h1>Get es una petición para adquirir datos del servidor</h1>')
})

app.post('/', (req, res)=>{
    res.send('<h1>Post es un metodo para crear algo en el servidor</h1>')
})

app.put('/', (req, res)=>{
    res.send('<h1>Put es un metodo http para actualizar un producto completo en el servidor</h1>')
})

app.patch('/', (req, res)=>{
    res.send('<h1>patch es un metodo para actualizar solo una parte de un procducto en el servidor</h1>')
})

app.delete('/', (req, res)=>{
    res.send('<h1>delete es un metodo para borrar algo en el servidor</h1>')
})

app.listen(3000)

console.log('Server on port 3000')