import React from 'react';
import email from '../images/email.png';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';

function Link() {
    return <div id="links" className="links-container">
    <a href="mailto:teojunxiong97@gmail.com"><img className="link-image" src={email}/></a>
    <a href="https://github.com/teo-jun-xiong"><img className="link-image" src={github}/></a>
    <a href="https://www.linkedin.com/in/teo-jun-xiong/"><img className="link-image" src={linkedin}/></a>
    <hr/>
</div>
}

export default Link;