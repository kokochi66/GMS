const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const fs = require('fs')

const connKey = JSON.parse(fs.readFileSync('./key/sql.json'))
const connection = mysql.createConnection({
    host     : connKey.host,
    port     : connKey.port,
    user     : connKey.user,
    password : connKey.password,
    database : connKey.database
});

router.get('/', (req,res) => {
    res.status(200).render('./ejs/user/login.ejs', {'user':req.cookies.user})
})

router.post('/', (req,res) => {
    connection.query(`SELECT * FROM user WHERE userId = '${req.body.id}'`, (err, rows, fields) => {
        if(err) throw err;
        if(rows.length > 0 && rows[0]['userPwd'] === req.body.pwd) {
            let options = {
                maxAge: 30000,
                expires: new Date(Date.now() + 30000)
            }
            res.cookie('user', {
                id:rows[0]['userId'],
                power:rows[0]['userPower']
            }, options)
            res.send({res:'success'})
        } else {
            res.send({res:'fault'})
        }
    })
})

module.exports = router