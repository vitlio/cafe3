const { body, validationResult } = require('express-validator')
const db = require('../db/db.js')

async function regValidator(req, res, next){
    //check valid input login and password
    body('login').isLength({min: 1})
    body('password').isLength({min: 6})
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({
            success: false,
            error: errors.array()
        })
    }
    //check same login in database
    const user = await db.query('SELECT * FROM users WHERE login=$1',[req.body.login])
    if(user.rows.length > 0){
        return res.status(400).json({
            success: false,
            error: 'User already exist'
        })
    } else {
        //all check have done we add new user in database
        const newUser = await db.query('INSERT INTO users(login, password, role) VALUES($1, $2, $3) RETURNING *',[req.body.login, req.body.password, req.body.role])
        return res.status(200).json({
            user: newUser.rows[0],
            success: true,
            message: 'registration successful'
        })
    }
    //just in case
    next()
}

module.exports = regValidator