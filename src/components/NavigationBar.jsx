import React from 'react';
import programmer from '../images/programmer.png'

function NavigationBar() {
    return <nav className="navbar navbar-expand-lg my-navbar navbar-dark">
        <a className="navbar-brand" href="#div-header">
            <img src={programmer} width="50px"/>
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
}

export default NavigationBar;       