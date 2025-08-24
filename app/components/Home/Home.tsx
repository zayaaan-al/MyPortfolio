import React from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Services from './Services/Services';
import Resume from './Resume/Resume';


const Home = () => {
  return  <div className='overflow-hidden '>
    <Hero/>
    <About/>
    <Resume/>
    <Services/> 
    
  </div>
  
};

export default Home;
