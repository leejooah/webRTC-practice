const io = require('socket.io').listen(3100)
let roomName = "room"

io.on('connection', socket=>{
    const instanceId = socket.id

    socket.on('joinRoom', data=>{
        console.log(`room name : ${data.roomName} 에 들어왔습니다`)
        socket.join(data.roomName)
        roomName = data.roomName
    })

    socket.on('reqMsg', data=>{
        console.log(data)
        io.to("room").emit('recMsg',data)
    })

    socket.on('leaveRoom', data=>{
        socket.leave(roomName)
        console.log(`room name : ${data.roomName}를 나갑니다.`)
    })
})

