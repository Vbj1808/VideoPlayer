import React from 'react';
import ReactPlayer from 'react-player';
import VideoWrapperStyle from './styles/VideoWrapperStyle';
import VideoStyle from './styles/VideoStyle';

const Video = ({ active, autoplay , endCallback, progressCallback }) => (
    <VideoStyle>
        <VideoWrapperStyle>
            <ReactPlayer
                width="100%"
                height="100%"
                style={{ position: "absolute", top: "0" }}
                playing ={autoplay}
                controls = {true}
                url = {active.video}
                onEnded = {endCallback}
                onProgress = {progressCallback}
            />
        </VideoWrapperStyle>

    </VideoStyle>
)

export default Video;