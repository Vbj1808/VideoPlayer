import React from 'react';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from '../containers/PlayListItems';
import DarkMode from '../DarkMode';

const Playlist =  props => (
        <>
            <DarkMode />
            <PlaylistHeader />
            <PlaylistItems />
        </>
    )

export default Playlist;
