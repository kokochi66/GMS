const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.status(200).clearCookie('user').redirect('/')
})

module.exports = router