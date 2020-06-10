import React from 'react';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from '../containers/PlaylistItems';
import DarkMode from '../DarkMode';
import PlaylistStyle from '../styles/PlaylistStyle';

const Playlist =  ({ videos, active, darkModeCallback, darkMode}) => (
        <PlaylistStyle>
            <DarkMode darkModeCallback={darkModeCallback} darkMode={darkMode} />
            <PlaylistHeader active={active} total={videos.length} />
            <PlaylistItems videos={videos} active={active} />
        </PlaylistStyle>
    )

export default Playlist;
