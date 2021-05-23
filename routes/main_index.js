const express = require('express')
const router = express.Router()

const loginRouter = require('./user/login_index')
const registRouter = require('./user/register_index')
router.use('/login', loginRouter)
router.use('/register', registRouter)
// user 인덱싱


router.get('/', (req,res) => {
    res.status(200).render('./ejs/index.ejs')
})

module.exports = router