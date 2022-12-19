const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    const title = 'este es un titulo desde expressjs'
    res.render('index', {title})//render se habilita en express a partir de instalar el modulo "ejs"
})

module.exports = router