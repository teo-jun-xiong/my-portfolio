import React from 'react';
import NavigationBar from './NavigationBar';
import programmer from "../images/programmer.png";
import cloud from "../images/cloud.png";
import mountain from "../images/mountain.png";

function Header() {
    return <div className="div-header">
        <NavigationBar />

        <br/><br/>
        <nav className="navbar navbar-expand-lg my-navbar navbar-dark">
            <a className="navbar-brand"> </a>
        </nav>
        
        <img className="top-cloud" src={cloud} width="5%"/>
        <h1 className="name-header">Teo Jun Xiong</h1>
        <p className="text-header">Computer Science<br></br>National University of Singapore
        </p>
        <img className="bottom-cloud" src={cloud} width="5%"/>
        <img className="background-header" src={mountain} width="100%"/>
    </div>
}

export default Header;
