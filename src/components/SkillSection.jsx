import React from 'react';

function SkillSection(props) {
    return <div className="card">
        <div className="card__face card__face--front">
            <img src={props.img} alt="placeholder"/>
        </div>
        <div className="card__face card__face--back">
            <p><span>{props.title}</span><br/><br/>
                <em>{props.remark}</em><br/>{props.stars}</p>
        </div>
    </div>
}

export default SkillSection;