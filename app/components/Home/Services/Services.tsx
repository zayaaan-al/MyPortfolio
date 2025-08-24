import React from 'react';
import ServiceCard from './ServiceCard';


const Services = () => {
  return (

  <div className=' pt-16 pb-16'> 
  <h1 className=' text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>Services</h1>
  <div className=' w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4
  gap-10 mt-20 items-center'>
    <div>
        <ServiceCard 
        icon="/images/s1.png" 
        name="UI and UX"
        description="Designing interfaces that are intuitive, efficient, and enjoyable to use."/>
    </div>
    <div>
        <ServiceCard 
        icon="/images/s2.png" 
        name="Web and Mobile App"
        description="Designing interfaces that are intuitive, efficient, and enjoyable to use."/>
    </div>
    <div>
        <ServiceCard 
        icon="/images/s3.png" 
        name="Design and Creative "
        description="Designing interfaces that are intuitive, efficient, and enjoyable to use."/>
    </div>
    <div>
        <ServiceCard 
        icon="/images/s4.png" 
        name="Developement"
        description="Designing interfaces that are intuitive, efficient, and enjoyable to use."/>
    </div>
  </div>
  </div>
) ;
}

export default Services;
