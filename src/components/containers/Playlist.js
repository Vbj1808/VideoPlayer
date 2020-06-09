import React from 'react';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from '../containers/PlaylistItems';
import DarkMode from '../DarkMode';
import PlaylistStyle from '../styles/PlaylistStyle';

const Playlist =  props => (
        <PlaylistStyle>
            <DarkMode />
            <PlaylistHeader />
            <PlaylistItems />
        </PlaylistStyle>
    )

export default Playlist;
