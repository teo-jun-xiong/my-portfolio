import React from 'react';

function ProjectSection(props) {
    var projectContainer = "";
    if (props.index % 2 === 0) {
        projectContainer = "left-project-container";
    } else {
        projectContainer = "right-project-container"
    }

    return <div className="clearfix">
        <div className={projectContainer}>
            <img src={props.image} alt="placeholder"/>
            <h3 className="project-header">{props.title}</h3>
            <p>{props.desc}
                <br/>
                <br/>
                <em>{props.dev}</em><br/><a href={props.github}>GitHub repo here!</a> </p>
                
        </div>
    </div>
}

export default ProjectSection;