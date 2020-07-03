import React from 'react';
import ProjectSection from './ProjectSection';
import projectsData from '../ProjectsData';

import project from '../images/project.png';
import carousel_eldereach_1 from '../images/project-carousel-eldereach-1.png';
import carousel_eldereach_2 from '../images/project-carousel-eldereach-2.png';
import carousel_eldereach_3 from '../images/project-carousel-eldereach-3.png';
import carousel_cooking_papa_1 from '../images/project-carousel-cooking-papa-1.png';
import carousel_spreent_1 from '../images/project-carousel-spreent-1.jpg';
import carousel_spreent_2 from '../images/project-carousel-spreent-2.jpg';
import carousel_wing_it_1 from '../images/project-carousel-wing-it-1.png';
import carousel_wing_it_2 from '../images/project-carousel-wing-it-2.png';

function Project() {
    return <div id="projects">
        <img src={project} className="header-img" alt="placeholder"/>
        <h3 className="project-header header-shadow">Projects</h3><br/><br/>

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

        <h3 className="project-header header-shadow">Projects Showcase</h3>

        <div id="carousel-project" className="carousel slide project-carousel" data-ride="carousel" data-interval="false">
            <ol className="carousel-indicators">
                <li data-target="#carousel-project" data-slide-to="0" className="active"></li>
                <li data-target="#carousel-project" data-slide-to="1"></li>
                <li data-target="#carousel-project" data-slide-to="2"></li>
                <li data-target="#carousel-project" data-slide-to="3"></li>
                <li data-target="#carousel-project" data-slide-to="4"></li>
                <li data-target="#carousel-project" data-slide-to="5"></li>
                <li data-target="#carousel-project" data-slide-to="6"></li>
                <li data-target="#carousel-project" data-slide-to="7"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={carousel_eldereach_1} className="carousel-img d-block w-100" alt="..."/>
                    
                    <div className="carousel-caption">
                        <h5>Eldereach Client's User Interface</h5>
                        <p>Landing page for clients after logging in.</p>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src={carousel_eldereach_2} className="carousel-img d-block w-100" alt="..."/>
                    <div className="carousel-caption">
                        <h5>Eldereach Hotlines</h5>
                        <p>Interactive hotlines page with a pop-up displaying the description and hotline of a charity organization.</p>
                    </div>
                </div>
            
                <div className="carousel-item">
                    <img src={carousel_eldereach_3} className="carousel-img d-block w-100" alt="..."/>
                    <div className="carousel-caption">
                        <h5>Sample Eldereach Transportation Request</h5>
                        <p>Allows users to indicate date and time of a two-way transportation request, and search for destinations with in-built Google Maps.</p>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src={carousel_cooking_papa_1} className="carousel-img d-block w-100" alt="..."/>
                    <div className="carousel-caption">
                        <h5>Cooking Papa's User Interface</h5>
                        <p>Landing page for users, showing an overview of all features.</p>
                    </div>
                </div>
            
                <div className="carousel-item">
                    <img src={carousel_spreent_1} className="carousel-img d-block w-100" alt="..."/>
                    <div className="carousel-caption">
                        <h5>Spreent-bot's User Interface</h5>
                        <p>Spreent-bot's options for users.</p>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src={carousel_spreent_2} className="carousel-img d-block w-100" alt="..."/>
                    <div className="carousel-caption">
                        <h5>Searching and joining Spreents</h5>
                        <p>Users can search for Spreents and view their details, and then join a particular Spreent to coordinate purchases with other users.</p>
                    </div>
                </div>
            
                <div className="carousel-item">
                    <img src={carousel_wing_it_1} className="carousel-img d-block w-100" alt="..."/>
                    <div className="carousel-caption">
                        <h5>Searching for Places of Interest in wing_it</h5>
                        <p>An integrated Google Maps allows users to search for places of interests, and add them to their list of locations.</p>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src={carousel_wing_it_2} className="carousel-img d-block w-100" alt="..."/>
                    <div className="carousel-caption">
                        <h5>Editing Places of Interests in wing_it</h5>
                        <p>A list of cards allows users to indicate the hours they want to spend at a certain place of interest, and remove them if desired. The total number of days and hours to be spent travelling per day can also be indicated.</p>
                    </div>
                </div>
            </div>
            
            <a className="carousel-control-prev" href="#carousel-project" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel-project" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>
}

export default Project;