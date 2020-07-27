import React, {useEffect, useState} from 'react';
import RTCVideo from "./RTCVideo";

const Rtc = () => {
    const [localStream, setLocalStream] = useState()
    useEffect(()=>{
        navigator.mediaDevices.getUserMedia({video : true})
            .then(stream=>{
                setLocalStream(stream)
            })
    },[])
    return (
        <div>
            <RTCVideo mediaStream={localStream}/>
        </div>
    );
};

export default Rtc;

