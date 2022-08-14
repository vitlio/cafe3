const Router = require('express')
const router = new Router()
const path = require('path')

router.use('/', Router.static(path.resolve(__dirname, '../../frontendClient/')))

module.exports = router;