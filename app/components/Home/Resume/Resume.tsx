import React from 'react';
import ResumeCard from './ResumeCard';
import {  FaCodepen, FaReact } from 'react-icons/fa';
import { BiBadge } from 'react-icons/bi';

const Resume = () => {
  return (
    <div id='resume' className=' pt-20 pb-16'>
      <div className=' w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>
        {/* work part */}
        <div>
            <h1 className=' text-3xl sm:text-4xl font-bold text-white'>
                My Work <span className='bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>Experience</span>
            </h1>
            <div className=' mt-10' data-aos="zoom-in" data-aos-anchor-placement="top-center">
                <ResumeCard Icon={FaCodepen} 
                role="Django Developer" 
                description='Zoople Technologies - Kochi'
                

                date='Apr 2024 - Aug 2024'/>
                 <ResumeCard Icon={FaReact}
                  role="Mern-Stack Developer"
                  description='Softroniics - Malappuram'
                  date='Apr 2025 - Present'/>
            </div>
        </div>
        {/*EDUCATION PART */}
        <div>
             <h1 className=' text-3xl sm:text-4xl font-bold text-white'>
                My  <span className='bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>Education</span>
            </h1>
            <div className=' mt-30' data-aos="zoom-out" data-aos-anchor-placement="top-center" data-aos-delay="300">
                <ResumeCard Icon={BiBadge} role="Bachelor of Computer Application" date='Jun 2021 - Mar 2024'
                 description='Calicut University'/>
               
                
            </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
