import React from "react";

const Ffmpeg = ()=>{
    let ffmpeg = require('ffmpeg')
    let file = "https://www.radiantmediaplayer.com/media/big-buck-bunny-360p.mp4"

    return <div><video autoPlay src={file}/></div>
}

export default Ffmpeg