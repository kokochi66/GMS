const express = require('express')
const router = express.Router()

router.get('/:id', (req,res) => {
    res.status(200).render('./ejs/game/game.ejs', {'game':req.params.id, 'user':req.cookies.user})
})

module.exports = router