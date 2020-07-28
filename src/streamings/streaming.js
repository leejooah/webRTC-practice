import React, {useEffect} from 'react'
import './main.css'
import io from 'socket.io-client'
const Streaming = () => {

    const socket = io.connect("http://localhost:3001")

    const onStart = () =>{
        alert('start버튼 클릭')
        socket.on('event', ()=>{
            socket.emit('event2', 'null')
        })
    }
    return (
        <>


            <div id="container">

                <h1><a href="//webrtc.github.io/samples/" title="WebRTC samples homepage">WebRTC samples</a> <span>Multiple peer connections</span>
                </h1>

                <video id="video1" playsInline autoPlay muted></video>
                <video id="video2" playsInline autoPlay></video>
                <video id="video3" playsInline autoPlay></video>

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