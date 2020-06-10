import React from 'react';
import DarkModeStyle from './styles/DarkModeStyle';


const DarkMode = ({ darkModeCallback, darkMode }) => (
    <DarkModeStyle>
        <span>DarkMode: </span>
        <label className="switch">
            <input type="checkbox" checked={darkMode} onChange={darkModeCallback} />
            <span className="slider round" />
        </label>
    </DarkModeStyle>
);


export default DarkMode;