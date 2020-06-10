import React from 'react';
import { ThemeProvider } from 'styled-components'; 
import Video from '../Video';
import Playlist from '../containers/Playlist';
import PlayerStyle from '../styles/PlayerStyle';

//creating dark theme
const theme = {
    bgcolor: "#353535",
    bgcolorItem: "#414141",
    bgcolorItemActive: "#405c63",
    bgcolorPlayed: "#526d4e",
    border: "none",
    borderPlayed: "none",
    color: "#fff",
}
//creating light theme
const themeLight = {
    bgcolor: "#fff",
    bgcolorItem: "#fff",
    bgcolorItemActive: "#80a7b1",
    bgcolorPlayed: "#7d9979",
    border: "1px solid #353535",
    borderPlayed: "none",
    color: "#353535",
}

const Player = props => {

    const darkModeCallback = () => {

    }

    const endCallback = () => {

    }

    const progressCallback = () => {

    }

    return
    (
        <ThemeProvider theme={state.nightMode ? theme: themeLight}>
            {state.video !== null ? (
                <PlayerStyle>
                    <Video 
                        active={state.activeVideo}
                        autoplay = {state.autoplay}
                        endCallback = {endCallback}
                        progressCallback = {progressCallback} />
                    <Playlist
                        videos = {state.videos}
                        active = {state.activeVideo}
                        darkModeCallback = {darkModeCallback}
                        darkMode = {state.darkMode} />
                </PlayerStyle>
            ) : null }
        </ThemeProvider>
        
    )
}

export default Player;