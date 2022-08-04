const fs = require('fs')
const path = require('path')

async function routerStatic(req, res){
    res.sendFile(path.resolve(__dirname, '../../frontend/src/index.html'))
}

module.exports = routerStatic