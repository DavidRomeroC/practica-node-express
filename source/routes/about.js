const {Router} = require('express')
const router = Router()

router.get('/about', (req, res) => {
    res.send('About page: &Alpha;')
})

module.exports = router