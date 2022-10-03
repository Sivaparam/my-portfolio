import React from 'react';

const projects = [
    {
        id: 0,
        title: 'project1',
        languages: 'css',
        gitURL: 'url',
        liveURL: 'url',
    },
    {
        id: 0,
        title: 'project1',
        languages: 'css',
        gitURL: 'url',
        liveURL: 'url',
    },
    {
        id: 0,
        title: 'project1',
        languages: 'css',
        gitURL: 'url',
        liveURL: 'url',
    },
    {
        id: 0,
        title: 'project1',
        languages: 'css',
        gitURL: 'url',
        liveURL: 'url',
    },
    {
        id: 0,
        title: 'project1',
        languages: 'css',
        gitURL: 'url',
        liveURL: 'url',
    },

];

function portfolio() {
    return (
        <div className='project'>
            {projects.map((project) => (
                <li className='list-group-item' key={project.id}>
                    {project.title}
                    {project.languages}
                    {project.gitURL}
                    {project.liveURL}

                </li>

            ))}
        </div>

    )
};


export default portfolio;
