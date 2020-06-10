import React from 'react';
import PlaylistHeaderStyle from './styles/PlaylistHeaderStyle';
import JourneyStyle from './styles/JourneyStyle';

const PlaylistHeader = ({active, total}) => (
    <PlaylistHeaderStyle>
        <p>{active.title}</p>
        <JourneyStyle>
            {active.num} / {total}
        </JourneyStyle>
    </PlaylistHeaderStyle>
    
)

export default PlaylistHeader;