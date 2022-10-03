import React from 'react';
import res from '../assets/One_pager.pdf';

function Resume() {
    return (
       <div className='content'>
        <h3>My Resume</h3>
       
        <div>
            <h5>Proefficient in:</h5>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Handlebars</li>
                <li>React</li>
                <li>Javascript</li>
                <li>NodeJs</li>
                <li>ExpressJs</li>
                <li>MongoDB</li>
                <li>SQL</li>
                <li>Sequelize</li>
                
            </ul>
        </div>
        <div>
            <button className='btn btn-light' type='button'><a href={res} alt='Resume'>Download Resume</a></button>
        </div>
       </div>
    )
};


export default Resume;
