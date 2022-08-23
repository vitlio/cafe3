const Router = require('express')
const controllerMenu = require('../controllers/menu.controllers.js')

const router = new Router()

router
    .get('/', controllerMenu.getEntireMenu)
    .get('/:id', controllerMenu.getMenuItem)
    .post('/', controllerMenu.createMenuItem)
    .put('/', controllerMenu.updateMenuItem)
    .delete('/:id', controllerMenu.deleteMenuItem)

module.exports = router