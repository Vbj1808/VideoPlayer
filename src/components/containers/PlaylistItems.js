import React from 'react';
import PlaylistItem from '../PlaylistItem';
import PlaylistItemsStyle from '../styles/PlaylistItemsStyle';
import Playlist from './Playlist';


const PlaylistItems =  ({videos, active}) => (
        <PlaylistItemStyle>
            {video.map(video => {
                <PlaylistItem
                    key={video.id}
                    video={video}
                    active={video.id === active.id ? true : false}
                    played = {video.played}
                />    
            })}
        </PlaylistItemStyle>
    )

export default PlaylistItems;
