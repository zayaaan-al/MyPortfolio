
"use client";
import React from 'react';
import { SiBootstrap, SiCss3, SiExpress, SiHtml5, SiJavascript, SiMongodb, SiNodedotjs, SiPython, SiReact, SiTailwindcss } from 'react-icons/si';
import Tilt from 'react-parallax-tilt'
const skills =[

     {
        name :'Html',
        icon: <SiHtml5/>,
        percentage : 95, 
    },
     {
        name :'Css',
        icon: <SiCss3/>,
        percentage : 95, 
    },
    {
        name :'JavaScript',
        icon: <SiJavascript/>,
        percentage : 90, 
    },
     {
        name :'Bootstrap',
        icon: <SiBootstrap/>,
        percentage : 90, 
    },
     {
        name :'React Js',
        icon: <SiReact/>,
        percentage : 93, 
    },
     {
        name :'Python',
        icon: <SiPython/>,
        percentage : 90, 
    },
     {
        name :'Node.js',
        icon: <SiNodedotjs/>,
        percentage : 89, 
    },
     {
        name :'Express.js',
        icon: <SiExpress/>,
        percentage : 88, 
    },
     {
        name :'Tailwind css',
        icon: <SiTailwindcss/>,
        percentage : 95, 
    },
     {
        name :'Mongo db',
        icon: <SiMongodb/>,
        percentage : 90, 
    }

]

const Skills = () => {
  return (
    <div className=' text-white pt-16 pb-16'>
        <h1 className=' text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
            My <span className=' text-cyan-300'>Skills</span>
        </h1>
        <div className=' flex flex-wrap justify-center gap-6 mt-16'>
            {skills.map((skill)=>{
                return  <Tilt key={skill.name} scale={1.5} transitionSpeed={400}>
                    <div className=' bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center
                    justify-center shadow-lg transition hover:scale-105'>
                        <div className=' text-5xl mb-4 text-gray-300'>{skill.icon}</div>
                        <p className=' text-2xl font-semibold'>{skill.percentage}%</p>
                        <p className=' text-purple-400 mt-1'>{skill.name}</p>
                    </div>
                </Tilt>
            })}
        </div>
    </div>
  );
}

export default Skills;
