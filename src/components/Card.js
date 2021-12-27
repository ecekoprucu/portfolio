import React from 'react';
import './Card.css';

function Card() {

    return (
        <div className="card">
            <div className="content">
                <div className="front">
                    <p>Ece Köprücü</p>
                    <p>Front-End Developer</p>
                </div>
                <div className="back">
                    <a href="https://github.com/ecekoprucu" alt="#">Github</a>
                    <a href="https://www.linkedin.com/in/ece-k%C3%B6pr%C3%BCc%C3%BC-2aba12147/" alt="#">Linkedin</a>
                </div>
            </div>
      </div>
    );
}

export default Card;