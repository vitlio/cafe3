const express = require('express')
const path = require('path')
const routerAdmin = require('./routers/routerAdmin.js')
const Websocket = require('ws')

const app = express()
const PORT = process.env.PORT || 3000
app.use('/', express.static(path.resolve(__dirname, '../frontendClient/')))
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontendClient/index.html'))
})
app.use('/admin', express.static(path.resolve(__dirname, '../frontend/src/')))
app.get('/admin', routerAdmin)
app.get('/admin/:id', (req, res) => {
    res.json({
        aud: true
    })
})

app.listen(PORT, () => console.log('Server started ...'))