import React from 'react';
import invoice from '../assets/invoice.png';

const projects = [
    {
        id: 1,
        title: 'Invoice Manager',
        languages: 'handlebars, css, sequelize, node, express',
        gitURL: 'https://github.com/Sivaparam/invoice_manager',
        
    },
    {
        id: 2,
        title: 'Receipe Finder',
        languages: 'HTML, CSS, Javascript',
        gitURL: 'https://github.com/Sivaparam/Recipe_finder',
       
    },
    {
        id: 3,
        title: 'Weather App',
        languages: 'HTML, CSS, Javascript',
        gitURL: 'https://github.com/Sivaparam/weather-app',
       
    },
    {
        id: 4,
        title: 'Work-day Scheduler',
        languages: 'HTML, CSS, Javascript',
        gitURL: 'https://github.com/Sivaparam/work-day-scheduler',
      
    },
    {
        id: 5,
        title: 'Password Generator',
        languages: 'HTML, CSS, Javascript',
        gitURL: 'https://github.com/Sivaparam/password-generator',
    
    },

];

function portfolio() {
    return (
        <div className='portfolio'>
         
            <h3>Portfolio</h3>
          
            {projects.map((project) => (
                <div className='project'>
                    <ul className='list-group-item' key={project.id}>
                        
                   <li> <h6>Project Name:   {project.title}</h6> </li>
                   <li>    <h6> Languages Used:</h6>  {project.languages}</li>
                   <li>    <h6> Github: </h6> <a href={project.gitURL}>{project.gitURL}</a></li>
                   

                    </ul>
                </div>
            ))}

        </div>

    )
};


export default portfolio;
