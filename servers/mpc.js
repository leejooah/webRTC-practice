const socket= require('socket.io')
const RTCMultiConnectionServer = require('rtcmulticonnection-server')
const express= require('express')
const app= express()
server = app.listen(3001, ()=>{
    console.log('server is running on port 3001')
})

io = socket(server)
io.on('connection', socket=>{ //socket 커넥션이 성공했을 때 커넥션에 대한 정보를 담고 있는 변수
    RTCMultiConnectionServer.addSocket(socket)
    socket.on('disconnect', ()=>{
        console.log('disconnected')
    })
})

