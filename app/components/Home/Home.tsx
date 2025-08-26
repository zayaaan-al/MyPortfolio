import React from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Services from './Services/Services';
import Resume from './Resume/Resume';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact'

const Home = () => {
  return  <div className='overflow-hidden '>
    <Hero/>
    <About/>
    <Resume/>
    <Services/> 
    <Skills/>
    <Projects/>
    <Contact/>
    
    
  </div>
  
};

export default Home;
