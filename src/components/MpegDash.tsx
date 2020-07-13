import React from "react";
const MpegDash = ()=>{
    return <div><video data-dashjs-player autoPlay style={{width : 300, height : 150}} src="https://dash.akamaized.net/envivio/EnvivioDash3/manifest.mpd"
    controls>
    </video></div>
}
export default MpegDash