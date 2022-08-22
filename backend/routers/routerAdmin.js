const path = require('path')
const Router = require('express')
const router = new Router()
const Websocket = require('ws')

const server = new Websocket.Server({ port: 8080 })

router.use('/', Router.static(path.resolve(__dirname, '../../frontend/src/')))
router.get('/menu', (req, res) => {
    res.send('страница меню')
})
router.get('/:id', (req, res) => {
        const waiterCall = {
            table: req.params.id,
            type: 'call'
        }
        if(req.query.ring){
            server.clients.forEach(client => client.send(JSON.stringify(waiterCall)))
        }
        res.send(JSON.stringify('Вызов принят'))
    })

module.exports = router