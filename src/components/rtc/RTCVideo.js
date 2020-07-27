import React, {useEffect, useRef} from 'react';

const RTCVideo = ({mediaStream}) => {
    const viewRef = useRef(null)
    useEffect(()=>{
        if (!viewRef.current)
            return;
        viewRef.current.srcObject = mediaStream ? mediaStream : null
    })

    return (
        <>
            <video ref={viewRef} autoPlay playsInline controls/>
        </>
    );
};

export default RTCVideo

