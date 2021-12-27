import React, {useContext} from 'react';
import './Card.css';
import ThemeContext from '../../context/themeContext';

function Card() {
    const {isDarkMode} = useContext(ThemeContext);

    return (
        <div className="card">
            <div className="content">
                <div className={`front ${isDarkMode ? "darkModeFront" : ""}`}>
                    <p>Ece Köprücü</p>
                    <p>Front-End Developer</p>
                </div>
                <div className={`back ${isDarkMode ? "darkModeBack" : ""}`}>
                    <a href="https://github.com/ecekoprucu" alt="#">Github</a>
                    <a href="https://www.linkedin.com/in/ece-k%C3%B6pr%C3%BCc%C3%BC-2aba12147/" alt="#">Linkedin</a>
                </div>
            </div>
      </div>
    );
}

export default Card;