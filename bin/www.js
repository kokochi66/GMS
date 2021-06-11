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
    socket.on('partRoom', (data) => {
        console.log('랜덤 방 만들기 ', Math.random().toString(36).substr(2,11).slice(0,5))
        console.log('방 참가하기 소켓 ', data)
    })
    // 소켓IO를 이용한 게임의 방 채널 참가

})

