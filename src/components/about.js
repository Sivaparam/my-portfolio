import React from 'react';

import mern1 from '../assets/mern_2.jpeg';

function About() {
    return (
        <div className='content'>
            <h4>About Me </h4>
            <img src={mern1} alt="Mern"></img>
            
        <h6>I am currently pursuing full stack development program from Georgia Tech bootcamp. 
            Skills developed as part of program showcased through various projects </h6>
            <p>I have prior Software enginnering experience and have played various roles like</p>
            <li>Project Manger</li>
            <li>Business Analyst</li>
            <li>Release Manager</li>
            <p>I asipre to become web developer with the skills learnt through bootcamp program</p>
        
        </div>
    )
};

export default About;
