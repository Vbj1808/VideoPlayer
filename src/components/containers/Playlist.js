import React from 'react';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from '../containers/PlaylistItems';
import DarkMode from '../DarkMode';

const Playlist =  props => (
        <>
            <DarkMode />
            <PlaylistHeader />
            <PlaylistItems />
        </>
    )

export default Playlist;
