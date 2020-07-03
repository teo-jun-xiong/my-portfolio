import React from 'react';
import skills from '../images/skills.png';
import java from '../images/java.png';
import python from '../images/python.png';
import git from '../images/git.png';
import html from '../images/html.png';
import css from '../images/css.png';
import javascript from '../images/javascript.png';
import android from '../images/android.png';
import web from '../images/web.png';
import react from '../images/react.png';

function Skill() {
    return <div id="skills" className="skills-container">
        <img src={skills} width="6%" className="clear-image"/> <br/><br/>

        <div className="scene">
            <br/>
            <div className="card">
                <div className="card__face card__face--front">
                    <img src={java} />
                </div>
                <div className="card__face card__face--back">
                    <p><span>Java</span><br/><br/>
                        <em>My most comfortable programming language.</em><br/>★★★★☆</p>
                </div>
            </div>

            <div className="card">
                <div className="card__face card__face--front">
                    <img src={python} />
                </div>
                <div className="card__face card__face--back">
                    <p><span>Python</span><br/><br/>
                        <em>I'd need regular googling.</em><br/><br/>★★★☆☆</p>
                </div>
            </div>

            <div className="card">
                <div className="card__face card__face--front">
                    <img src={git} />
                </div>
                <div className="card__face card__face--back">
                    <p><span>Git</span><br/><br/>
                        <em>git commit -m "Great with common commands"</em><br/><br/>★★★☆☆</p>
                </div>
            </div>
        </div>
        <div className="scene">
            <br/>
            <div className="card">
                <div className="card__face card__face--front">
                    <img src={html} />
                </div>
                <div className="card__face card__face--back">
                    <p><span>HTML</span><br/><br/>
                        <em>Just picked it up.</em><br/><br/>★★☆☆☆</p>
                </div>
            </div>

            <div className="card">
                <div className="card__face card__face--front">
                    <img src={css} />
                </div>
                <div className="card__face card__face--back">
                    <p><span>CSS</span><br/><br/>
                        <em>Just picked it up.</em><br/><br/>★★☆☆☆</p>
                </div>
            </div>

            <div className="card">
                <div className="card__face card__face--front">
                    <img src={javascript} />
                </div>
                <div className="card__face card__face--back">
                    <p><span>JavaScript</span><br/><br/>
                        <em>StackOverflow is my best friend.</em><br/><br/>★★☆☆☆</p>
                </div>
            </div>
        </div>

        <div className="scene">
            <br/>
            <div className="card">
                <div className="card__face card__face--front">
                    <img src={react} />
                </div>
                <div className="card__face card__face--back">
                    <p><span>React</span><br/><br/>
                        <em>Google is my best friend.</em><br/><br/>★★☆☆☆</p>
                </div>
            </div>
            <div className="card">
                <div className="card__face card__face--front">
                    <img src={android} />
                </div>
                <div className="card__face card__face--back">
                    <p><span>Android Development</span><br/><br/>
                        <em>Pretty alright on Android Studio.</em><br/><br/>★★★☆☆</p>
                </div>
            </div>
            <div className="card">
                <div className="card__face card__face--front">
                    <img src={web} />
                </div>
                <div className="card__face card__face--back">
                    <p><span>Web Development</span><br/><br/>
                        <em>This portfolio website explains it all.</em><br/><br/>★★☆☆☆</p>
                </div>
            </div>
    </div>
    <hr/>

    </div>
}

export default Skill;