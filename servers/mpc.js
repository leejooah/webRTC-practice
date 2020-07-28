const RTCMultiConnectionServer = require('rtcmulticonnection-server')
const app= require('express')()
const server =require('http').createServer(app)
const io = require('socket.io')(server)


server.listen(4000, ()=>{
    console.log('server is running on port 4000')
})

io.on('connection', socket=>{ //socket 커넥션이 성공했을 때 커넥션에 대한 정보를 담고 있는 변수
    console.log('소켓 connection 성공')
    RTCMultiConnectionServer.addSocket(socket)

    socket.on('emitEvent', data=>{
        console.log(data)
    })

})

