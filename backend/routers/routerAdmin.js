const path = require('path')
const Router = require('express')
const router = new Router()
const Websocket = require('ws')

const server = new Websocket.Server({ port: 8080 })

router.use('/', Router.static(path.resolve(__dirname, '../../frontend/src/')))
router.get('/:id', (req, res) => {
    
        if(req.query.ring){
            server.clients.forEach(client => client.send(JSON.stringify(req.query)))
        }
        res.send(JSON.stringify('Вызов принят'))
    })

module.exports = router