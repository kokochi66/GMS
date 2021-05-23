const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.status(200).render('./ejs/user/login.ejs')
})

module.exports = router