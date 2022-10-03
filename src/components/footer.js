import React from 'react';
import git from '../assets/GitHub_image.png';
import linked from '../assets/linkedin.png';

function Footer() {
    return (
        <footer>
            <a href='https://github.com/Sivaparam'>
                <img src={git} alt='Github'></img>
            </a>
            <a href='hhtps://www.linkedin.com/in/sivaranjani'>
                <img src={linked} alt='Linkedin'></img>
            </a>
        </footer>
    )
};

export default Footer;