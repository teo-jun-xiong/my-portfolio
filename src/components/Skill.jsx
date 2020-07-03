import React from 'react';

function Skill() {
    return <div className="skills-container">
        <img src="images/skills.png" width="6%" className="clear-image"/> <br/><br/>

        <div className="scene">
            <br/>
            <div className="card">
                <div className="card__face card__face--front">
                    <img src="images/java.png" />
                </div>
                <div className="card__face card__face--back">
                    <p><span>Java</span><br/><br/>
                        <em>My most comfortable programming language.</em><br/><br/>★★★★☆</p>
                </div>
            </div>

            <div className="card">
                <div className="card__face card__face--front">
                    <img src="images/python.png" />
                </div>
                <div className="card__face card__face--back">
                    <p><span>Python</span><br/><br/>
                        <em>Regular googling required.</em><br/><br/>★★★☆☆</p>
                </div>
            </div>

            <div className="card">
                <div className="card__face card__face--front">
                    <img src="images/git.png" />
                </div>
                <div className="card__face card__face--back">
                    <p><span>Git</span><br/><br/>
                        <em>Regular googling required.</em><br/><br/>★★★☆☆</p>
                </div>
            </div>
        </div>
        <div className="scene">
            <br/>
            <div className="card">
                <div className="card__face card__face--front">
                    <img src="images/html.png" />
                </div>
                <div className="card__face card__face--back">
                    <p><span>HTML</span><br/><br/>
                        <em>Just picked it up.</em><br/><br/>★★☆☆☆</p>
                </div>
            </div>

            <div className="card">
                <div className="card__face card__face--front">
                    <img src="images/css.png" />
                </div>
                <div className="card__face card__face--back">
                    <p><span>CSS</span><br/><br/>
                        <em>Just picked it up.</em><br/><br/>★★☆☆☆</p>
                </div>
            </div>

            <div className="card">
                <div className="card__face card__face--front">
                    <img src="images/javascript.png" />
                </div>
                <div className="card__face card__face--back">
                    <p><span>JavaScript</span><br/><br/>
                        <em>Tons of googling needed to function.</em><br/><br/>★★☆☆☆</p>
                </div>
            </div>
        </div>

        <div className="scene">
        <br/>
        <div className="card">
            <div className="card__face card__face--front">
                <img src="images/android.png" />
            </div>
            <div className="card__face card__face--back">
                <p><span>Android Development</span><br/><br/>
                    <em>A great deal experience on Android Studio.</em><br/><br/>★★★☆☆</p>
            </div>
        </div>
        <div className="card">
            <div className="card__face card__face--front">
                <img src="images/web.png" />
            </div>
            <div className="card__face card__face--back">
                <p><span>Web Development</span><br/><br/>
                    <em>My experience level with web development is this website.</em><br/><br/>★★☆☆☆</p>
            </div>
        </div>
    </div>
    <hr/>

    </div>
}

export default Skill;