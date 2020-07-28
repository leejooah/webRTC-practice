import React, {useEffect, useRef, useState} from 'react'
import './main.css'
import io from 'socket.io-client'
const Streaming = () => {
    const [localStream, setLocalStream] = useState()
    const viewRef = useRef(null)
    const socket = io("http://localhost:4000")
    useEffect(()=>{
        navigator.mediaDevices.getUserMedia({video : true})
            .then(stream=>{
                setLocalStream(stream)
                if (!viewRef.current)
                    return;
                viewRef.current.srcObject = localStream
            })
    },[])
    const onStart =e =>{
        e.preventDefault()
        console.log('소켓에 전달')
        socket.emit('emitEvent',{connect : 'success'})
    }
    return (
        <>
            <div id="container">
                <h1><a href="//webrtc.github.io/samples/" title="WebRTC samples homepage">WebRTC samples</a> <span>Multiple peer connections</span>
                </h1>
                <video ref={viewRef}/>
                <div>
                    <button id="startButton" onClick={onStart}>Start</button>
                    <button id="callButton">Call</button>
                    <button id="hangupButton">Hang Up</button>
                </div>
                <p>View the console to see logging and to inspect
                    the <code>MediaStream</code> object <code>localStream</code>.</p>
                <p>For more information about RTCPeerConnection, see <a
                    href="http://www.html5rocks.com/en/tutorials/webrtc/basics/"
                    title="HTML5 Rocks article about WebRTC by Sam Dutton">Getting
                    Started With WebRTC</a>.</p>
                <a href="https://github.com/webrtc/samples/tree/gh-pages/src/content/peerconnection/multiple"
                   title="View source for this page on GitHub" id="viewSource">View source on GitHub</a>
            </div>
        </>
    );
};

export default Streaming;