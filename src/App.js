import React from 'react';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Project from './components/Project';
import Job from './components/Job';
import Skill from './components/Skill';
import Link from './components/Link';

import './styles.css';
function App() {
  return (
    <div>
        <ScrollToTop />
        <Header />
        <About />
        <Education />
        <Project />
        <Job />
        <Skill />
        <Link />
    </div>
  );
}

export default App;
