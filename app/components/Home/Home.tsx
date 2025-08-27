"use client";
import React, { useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Services from './Services/Services';
import Resume from './Resume/Resume';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import AOS, { init } from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Home = () => {
  useEffect(()=>{
    const initAOS = async ()=>{
      await import('aos');
      AOS.init({
        duration:1000,
        easing:'ease', 
        once:true,
        anchorPlacement:"top-bottom",
      })
    }
    initAOS();
  },[])
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
