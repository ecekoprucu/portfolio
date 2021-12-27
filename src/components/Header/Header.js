import React, {useContext} from 'react';
import ThemeContext from '../../context/themeContext';
import './Header.css'

function Header(props) {

    const {isDarkMode, darkModeControl} = useContext(ThemeContext);

    return (
        <div className={`headerWrapper ${isDarkMode ? "darkModeHeader" : ""}`}>
            <div className={`headerSection ${isDarkMode ? "darkModeHeaderSection" : ""}`}>
                Ne Ekleyeceğimi Bulamadım
            </div>
            <div className={`headerSection ${isDarkMode ? "darkModeHeaderSection" : ""}`}>
                About Me
            </div>
            <div className="headerSection">
                <label className="switch">
                    <input type="checkbox" onChange={darkModeControl}/>
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    );
}

export default Header;