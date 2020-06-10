import React from 'react';
import PlaylistItem from '../PlaylistItem';
import PlaylistItemsStyle from '../styles/PlaylistItemsStyle';



const PlaylistItems =  ({videos, active}) => (
        <PlaylistItemsStyle>
            {videos.map(video => (
                <PlaylistItem
                    key={video.id}
                    video={video}
                    active={video.id === active.id ? true : false}
                    played = {video.played}
                />    
            ))}
        </PlaylistItemsStyle>
    )

export default PlaylistItems;
