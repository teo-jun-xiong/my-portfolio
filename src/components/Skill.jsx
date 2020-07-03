import React from 'react';
import skills from '../images/skills.png';
import skillsData from '../SkillsData';
import SkillSection from './SkillSection';

function Skill() {
    return <div id="skills" className="skills-container">
        <img src={skills} className="header-img clear-image" alt="placeholder"/> <br/><br/>
 
        <div className="scene">
            <br/>
            
            {skillsData.slice(0,3).map((item, index) => (
                <SkillSection 
                    key={index}
                    title={item.title}
                    img={item.img}
                    remark={item.remark}
                    stars={item.stars}
                />
            ))}    
        </div>

        <div className="scene">
            <br/>

            {skillsData.slice(3,6).map((item, index) => (
                <SkillSection 
                    key={index}
                    title={item.title}
                    img={item.img}
                    remark={item.remark}
                    stars={item.stars}
                />
            ))}    
        </div>

        <div className="scene">
            <br/>
            
            {skillsData.slice(6).map((item, index) => (
                <SkillSection 
                    key={index}
                    title={item.title}
                    img={item.img}
                    remark={item.remark}
                    stars={item.stars}
                />
            ))}    
        </div>
        <hr/>

    </div>
}

export default Skill;