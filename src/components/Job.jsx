import React from 'react';
import job from '../images/job.png'

function Job() {
    return <div id="jobs" className="job-container">
        <img src={job} width="6%"/><br/><br/>
        <h3 className="project-header">Teaching Assistant for Programming Methodology II</h3>
        <p className="job-text"><em>From Jan - May 2020.<br/></em>Responsibilities include preparing lesson plans, reviewing students' code, and providing guidance for labs and assignments.</p>
        <br/>

        <h3 className="project-header">Facilitator for Health Promotion Board's Exercise Sessions</h3>
        <p className="job-text"><em>From Aug - Dec 2019.</em><br/>Responsibilities include encouraging attendees to pick up the Healthy 365 app, monitoring attendees' safety, and liaising with the Healthy Workplace Ecosystem (HWE) instructors.</p>
        <br/>

        <h3 className="project-header">Gym Staff at GYMMBOXX</h3>
        <p className="job-text"><em>From Feb - Jul 2018.</em><br/>Responsibilities include front desk receptionist duties, facilitating the members sign-up process, and maintained gym equipment and logistics.</p>
        <br/>
    </div>
}

export default Job;