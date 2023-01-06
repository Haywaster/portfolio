import React from 'react';
import projects from '../../data/Projects.json';
import Project from './Project';

const Gallery = ({ activeFilterName }) => {
    console.log(activeFilterName)
    const renderProjects = () => {
        if (activeFilterName !== "ALL") {
            const elements = projects
                .filter(project => activeFilterName === project.filter.toUpperCase())
                .map(project => {
                    return <Project
                        key={project.name}
                        name={project.name}
                        image={project.img}
                        descr={project.descr}
                        filter={project.filter} />
                })
            return elements
        }
        const elements = projects
            .map(project => {
                return <Project
                    key={project.name}
                    name={project.name}
                    image={project.img}
                    descr={project.descr}
                    filter={project.filter} />
            })
        return elements
    }
    const elements = renderProjects();
    return (
        <div id='gallery' className='container flex row wrap'>
            {elements}
        </div>
    );
};

export default Gallery;