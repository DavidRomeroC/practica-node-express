const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    res.sendFile('./index.html', {
        root: __dirname,
    })
})

app.get('/about', (req, res) => {
    res.send('Estas en la ruta de acerca de')
})

app.get('/image', (req, res) => {
    res.sendFile('./btn.png', {
        root: __dirname
    })
})

app.use((req, res)=>{
    res.status(404).send('Pagina no encontrada')
})

app.listen(3000)

console.log('server open on port 3000')