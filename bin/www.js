const express = require('express')
const app = require('../app')
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log(`server connected ${port}`)
})

io.sockets.on('connection', (socket) => {
    console.log('소켓 연결')

})