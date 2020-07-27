const express = require('express')
const socket = require('socket.io')
const app =express()

server = app.listen(3001, ()=>{
    console.log('server is running on port 3001')
})

io = socket(server)
io.on('connection', (socket)=>{
    console.log(`아이디 : ${socket.id}`)
    socket.on('SEND_MESSAGE',(data)=>{
        io.emit('RECEIVE_MESSAGE', data)
    })
})