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

router.get('/:id', (req,res) => {
    res.status(200).render('./ejs/game/game.ejs', {'game':req.params.id, 'user':req.cookies.user})
})

router.post('/:id/:order', (req,res) => {
    res.status(200).render('./ejs/game/game.ejs', {'game':req.params.id, 'user':req.cookies.user})
})

module.exports = router