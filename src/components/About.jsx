import React from 'react';
import programmer from '../images/programmer.png'

function About() {
    return <div id="about-me" className="about">
        <img src={programmer} alt="about-me" className="header-img" /><br/><br/>
        <h3 className="project-header">About Me</h3><br/>
        <p>Hi, I'm Jun Xiong! I am a third year student at the National University of Singapore studying computer science. Some of my interest areas are software development, Android development, and optimising my Googling skills to get the results I need on StackOverflow. <span role="img" aria-label="placeholder">😉</span> <br/><br/>
        
        Some of my favorite things are working on my personal projects, catching up with friends on DOTA 2, and keeping up with the latest psychological thrillers. Currently, I am picking up Web Development and React, and plan to pick up on AI through video games in the future.<br/><br/>
        
        Below are some of my projects and skills I've picked up, and please feel free to contact me using the links <a href="#links">here</a> if you have any questions. Thank you for visiting my portfolio page!</p>
    </div>
}

export default About;