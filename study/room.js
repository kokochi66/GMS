const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res) => {
    fs.readFile('room.html', (err,data) => {
        res.writeHead(200, {'content-type':'text/html'})
        res.end(data)
    })
}).listen(3000, () => {
    console.log('start')
})

const io = require('socket.io')(server);
io.sockets.on('connection', (socket) => {
    socket.on('SendChat', (data) => {
        console.log('전달된 데이터 =  ', data)
        io.to(data.Room).emit('ChatResult', data);
    })

    socket.on('SettingChannel', (data) => {
        console.log('채널 설정 ' , data);
        socket.join(data.Room)
    })
})