import React from 'react'
import {combineReducers} from 'redux'
import {connect} from "react-redux";
import io from 'socket.io-client'
import {BrowserRouter as Router, Route} from 'react-router-dom'
/*

const SEND_CHAT = "SEND_CHAT"
const RECEIVE_CHAT = "RECEIVE_CHAT "
const CREAR_CHAT = "CREAR_CHAT"
const sendChat = ()=>{
    return {type : SEND_CHAT}
}
const receiveChat = (data)=>{
    return {type : RECEIVE_CHAT, data}
}
const crearChat = ()=>{
    return {type : CREAR_CHAT}
}

const initState = {
    chatList : [],
    socketId : null
}

const chatReducer = (state= initState, action) =>{
    switch (action.type) {
        case SEND_CHAT:
            return {...state, socketId: action.socketId}
        case RECEIVE_CHAT:
            let newChatList = state.chatList.slice()
            newChatList.push(action.data)
            return {...state, chatList:newChatList}
        case CREAR_CHAT:
            return {...state, chatList: []}
        default:
            return state;
    }
}

export const rootReducer =combineReducers({chatReducer})

const socket = io.connect("http://localhost:3001")
const socketSubscribe = dispatch =>{
    socket.on('my socket id', (data)=>{
        console.log('mySocketID : ' , data)
        dispatch(action.mySocketId(data.socketId))
    })
    socket.on('receive chat', (data)=>{
        console.log('App.js Socket(receice chat)', data)
        dispatch(action.re)
    })
}

const mapStateToProps = state => {
    console.log("containers/App.js mapStateToProps ", state);
    return state;
};

const mapDispatchToProps = dispatch => {
    socketSubscribe(dispatch);
    return {
        enterChatroom: () => {
            socket.emit('enter chatroom');
        },
        leaveChatroom: () => {
            socket.emit('leave chatroom');
        },
        sendChat: (chat) => {
            socket.emit('send chat', {type: "msg", socketId: socket.id, chat: chat, regDate: Date.now()});
        },
        clearChat: () => {
            dispatch(action.clearChat());
        }
    };
}
const Socket = ({chatReducer,  mySocketId, enterChatroom, leaveChatroom, sendChat, clearChat})=>{
    return (
        <>
        <Router>
                <Route path="/" exact component={Home}/>
                <Route path="/chat/:id"
                       render={props => <Chat chatReducer={chatReducer}
                                              mySocketId={mySocketId}
                                              leaveChatroom={leaveChatroom} enterChatroom={enterChatroom}
                                              sendChat={sendChat}
                                              clearChat={clearChat} />}/>
        </Router>
                    </>
    )
}
export default connect(mapStateToProps,mapDispatchToProps)(Socket);*/


const Socket = () => {
    return (
        <div>

        </div>
    );
};

export default Socket;