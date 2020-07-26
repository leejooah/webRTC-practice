import React, {useState} from 'react';
import io from 'socket.io-client'
const Chat = () => {
    const socket = io('http://localhost:3001/')
    const [username, setUsername] = useState("")
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])
    const sendMessage = e=>{
        e.preventDefault()
        socket.emit('SEND_MESSAGE', {
            author : username,
            message : message
        })
        setMessage(' ')
    }
    socket.on('RECEIVE_MESSAGE', function(data){
        addMessage(data);
    });
    const addMessage = data => {
        console.log(data)
        setMessages([...messages, data])
        console.log(messages)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">Global Chat</div>
                            <hr/>
                            <div className="messages">
                                {messages.map(message=>{
                                    return (
                                        <div>{message.author} : {message.message}</div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="card-footer">
                            <input type="text" placeholder="Username" className="form-control" value={username} onChange={e=>setUsername(e.target.value)}/>
                            <br/>
                            <input type="text" placeholder="Message" className="form-control" value={message} onChange={e=>setMessage(e.target.value)}/>
                            <br/>
                            <button className="btn btn-primary form-control" onClick={sendMessage}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;