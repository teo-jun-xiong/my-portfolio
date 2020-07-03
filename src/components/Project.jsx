import React from 'react';
import project from '../images/project.png';
import ProjectSection from './ProjectSection';
import projectsData from '../ProjectsData';

function Project() {
    return <div id="projects">
        <img src={project} className="header-img"/>
        
        {projectsData.map((proj, index) => (
            <ProjectSection
                key={index}
                index={index}
                image={proj.image}
                title={proj.title}
                desc={proj.desc}
                dev={proj.dev}
                github={proj.github}
            />
        ))}
    </div>
}

export default Project;