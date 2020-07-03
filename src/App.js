import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Project from './components/Project';
import Job from './components/Job';
import Skill from './components/Skill.jsx';

function App() {
  return (
    <div>
        <Header />
        <About />
        <Education />
        <Project />
        <Job />
        <Skill />
    </div>
  );
}

export default App;
