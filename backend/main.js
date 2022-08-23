const express = require('express')
const bodyParser = require('body-parser')
const routerAdmin = require('./routers/routerAdmin.js')
const routerClient = require('./routers/routerClient.js')
const routerMenu = require('./routers/routerMenu.js')
const regValidator = require('./middlewares/regValidator.js')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', routerClient)
app.use('/admin', routerAdmin)
app.use('/registration', regValidator)
app.use('/menu', routerMenu)

app.listen(PORT, () => console.log('Server started on', PORT))