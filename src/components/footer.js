import React from 'react';
import git from '../assets/GitHub_image.png';
import linked from '../assets/linkedin.png';

function Footer() {
    return (
        <footer className='footer'>
            <a href='https://github.com/Sivaparam'>
                <img src={git} alt='Github'></img>
            </a>
            <a href='https://www.linkedin.com/in/sivaranjani-jayaprakash-b077ab76/'>
                <img src={linked} alt='Linkedin'></img>
            </a>
        </footer>
    )
};

export default Footer;