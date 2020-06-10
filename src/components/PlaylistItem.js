import React from 'react';
import PlaylistItemStyle from './styles/PlaylistItemStyle';

const PlaylistItem = ({ video, active, played}) => (
    <PlaylistItemStyle active={active} played={played}>
        <div className="player__video-nr">{video.num}</div>
        <div className="player__video-name">{video.title}</div>
        <div className="player__video-time">{video.duration}</div>
    </PlaylistItemStyle>
);

export default PlaylistItem;