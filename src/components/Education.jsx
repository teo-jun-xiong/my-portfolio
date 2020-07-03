import React from 'react';
import education from "../images/education.png";
import sound from "../images/sound.png";
import pingpong from "../images/ping-pong.png";
import help from "../images/help.png";

function Education() {
    return <div id="education">
        <img src={education} alt="education" width="6%"/> <br/><br/>
    
        <h3 className="project-header">Relevant Coursework</h3><br/>
        <p>Data Structures and Algorithms • Database Systems • Software Engineering </p>
        <p>Object-oriented Programming • Computer Networks</p><br/><br/>
        
        <h3 className="project-header">Education Timeline</h3><br/>
        <div className="timeline">
            <div className="timeline-container timeline-left">
                <div className="timeline-content">
                    <h3 className="project-header">2018</h3>
                    <p>National University of Singapore</p>
                </div>
            </div>
            <div className="timeline-container timeline-right">
                <div className="timeline-content">
                    <h3 className="project-header">2014</h3>
                    <p>Meridian Junior College</p>
                </div>
            </div>
            <div className="timeline-container timeline-left">
                <div className="timeline-content">
                    <h3 className="project-header">2010</h3>
                    <p>Temasek Secondary School</p>
                </div>
            </div>
            <div className="timeline-container timeline-right">
                <div className="timeline-content">
                    <h3>2004</h3>
                    <p>Bedok Green Primary School</p>
                </div>
            </div>
            <br/><br/><br/><br/>
        </div>

        <div>
            <h3 className="project-header">Co-curricular Activities</h3>

            <div className="clearfix">
                <div className="left-project-container">
                    <img src={sound} width="150px"/>
                    <h3 className="project-header">Sound Executive Member in Audio Visual Club</h3>
                    <p>Executive member of the sound department from 2012 to 2013, providing leadership and guidance to the department. <br/><br/>Collaborated with other
                        executive members to plan trainings as well as coordinate with one another during actual school events. Some large-scale school events handled by the Audio Visual Club include the annual Speech Days, Temasek Acapella Group's concerts,
                        and numerous school celebrations (Racial Harmony Day, Teachers' Day etc.).</p>
                </div>
            </div>

            <div className="clearfix">
                <div className="right-project-container">
                    <img src={pingpong} width="150px"/>
                    <h3 className="project-header">Table Tennis Club Member</h3>
                    <p>Member of Meridian Junior College's Table Tennis Club from 2014 to 2015.</p>
                </div>
            </div>

            <div className="clearfix">
                <div className="left-project-container">
                    <img src={help} width="150px"/>
                    <h3 className="project-header">Cultural Immersion Trip to Hanoi, Vietnam</h3>
                    <p>Participated in a cultural immersion trip to Hanoi, Vietnam in 2014. Took part in teaching basic English to children with disabilities at a local school.</p>
                </div>
            </div>
        </div>
        <hr/>
    </div>
}

export default Education;