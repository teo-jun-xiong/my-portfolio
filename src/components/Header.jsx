/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import programmer from "../images/programmer.png";
import mountain from "../images/mountain-bg.png";

function Header() {
    return <div className="div-header">
    <nav className="navbar navbar-expand-lg my-navbar navbar-dark">
            <a className="navbar-brand" href="#div-header">
                <img src={programmer} width="50px" alt="placeholder"/>
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className=" nav-item active">
                        <a className="nav-link" href="#about-me">About Me<span className="sr-only"></span></a>
                    </li>
                    <li className=" nav-item active">
                        <a className="nav-link" href="#education">Education<span className="sr-only"></span></a>
                    </li>
                    <li className=" nav-item active">
                        <a className="nav-link" href="#projects">Projects<span className="sr-onl "></span></a>
                    </li>
                    <li className=" nav-item active">
                        <a className="nav-link" href="#jobs">Job Experience<span className="sr-only"></span></a>
                    </li>
                    <li className=" nav-item active">
                        <a className="nav-link" href="#skills">Skills<span className="sr-only"></span></a>
                    </li>
                    <li className=" nav-item active">
                        <a className="nav-link" href="#links">Links<span className="sr-only"></span></a>
                    </li>
                </ul>
            </div>
        </nav>

        <br/><br/>
        <nav className="navbar navbar-expand-lg my-navbar navbar-dark">
            <a className="navbar-brand" > </a>
        </nav>
        
        <div className="header">
        <h1 className="name-header">Teo Jun Xiong</h1>
        <p className="text-header">Computer Science<br></br>National University of Singapore
        </p>
        <img className="background-header" src={mountain} width="100%" alt="placeholder"/>
        </div>
    </div>
}

export default Header;
