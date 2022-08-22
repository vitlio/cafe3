const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    password: 'user11',
    host: '127.0.0.1',
    port: 5432,
    database: 'cafe'
})

module.exports = pool