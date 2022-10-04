import React from 'react';

const projects = [
    {
        id: 1,
        title: 'Invoice Manager',
        languages: 'handlebars, css, sequelize, node, express',
        gitURL: 'https://github.com/Sivaparam/invoice_manager',
        liveURL: 'https://invoice-manager-pro.herokuapp.com/',
        
    },
    {
        id: 2,
        title: 'Receipe Finder',
        languages: 'HTML, CSS, Javascript',
        gitURL: 'https://github.com/Sivaparam/Recipe_finder',
        liveURL: 'https://sivaparam.github.io/Recipe_finder/',
       
    },
    {
        id: 3,
        title: 'Weather App',
        languages: 'HTML, CSS, Javascript',
        gitURL: 'https://github.com/Sivaparam/weather-app',
        liveURL: 'https://sivaparam.github.io/weather-app/',
       
    },
    {
        id: 4,
        title: 'Work-day Scheduler',
        languages: 'HTML, CSS, Javascript',
        gitURL: 'https://github.com/Sivaparam/work-day-scheduler',
        liveURL: 'https://sivaparam.github.io/work-day-scheduler/',
      
    },
    {
        id: 5,
        title: 'Password Generator',
        languages: 'HTML, CSS, Javascript',
        gitURL: 'https://github.com/Sivaparam/password-generator',
        liveURL: 'https://sivaparam.github.io/password-generator/',
    
    },
    {
        id: 6,
        title: 'Text-editor',
        languages: 'PWA, Javascript',
        gitURL: 'https://github.com/Sivaparam/text-editor',
        liveURL: 'https://text-editor-sep21.herokuapp.com/',
    
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
                   <li>    <h6> liveURL: </h6> <a href={project.liveURL}>{project.liveURL}</a></li>

                    </ul>
                </div>
            ))}

        </div>

    )
};


export default portfolio;
