const express = require('express')
const routerAdmin = require('./routers/routerAdmin.js')
const routerClient = require('./routers/routerClient.js')

const app = express()
const PORT = process.env.PORT || 3000

app.use('/', routerClient)

app.use('/admin', routerAdmin)

app.listen(PORT, () => console.log('Server started on', PORT))