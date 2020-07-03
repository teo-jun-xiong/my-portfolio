import React from 'react';

function Header() {
    return <div className="div-header">
        <br/><br/>
        <nav className="navbar navbar-expand-lg my-navbar navbar-dark">
            <a className="navbar-brand" href="#div-header">
                <img src="images/programmer.png" width="50px"/>
            </a>
        </nav>

        <img className="top-cloud" src="images/cloud.png" width="5%"/>
        <h1 className="name-header">Teo Jun Xiong</h1>
        <p className="text-header">Computer Science<br></br>National University of Singapore
        </p>
        <img className="bottom-cloud" src="images/cloud.png" width="5%"/>
        <img className="background-header" src="images/mountain.png" width="100%"/>
    </div>
}

export default Header;
