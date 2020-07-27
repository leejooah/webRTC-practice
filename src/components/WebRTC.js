import React from 'react';

const WebRtc = () => {
    const constraints = {'video' : true, 'audio' : true}
    const stream = navigator.mediaDevices.getUserMedia(constraints);
    const videoElement = document.querySelector('video#localVideo');
    videoElement.srcObject = stream;
    return (
        <>
            <video id="localVideo" autoPlay playsinline controls="false"/>
        </>
    );
};

export default WebRtc;