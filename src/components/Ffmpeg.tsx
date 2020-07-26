import React from "react";

const Ffmpeg = ()=>{
    let ffmpeg = require('fluent-ffmpeg')
    let file = "https://www.radiantmediaplayer.com/media/big-buck-bunny-360p.mp4"

    return <div ><video autoPlay src={file} controls/></div>
}

export default Ffmpeg