
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
        percentage : 70, 
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
    <div id='skills' className="text-white py-20 px-6">
  {/* Section Heading */}
  <div className="text-center">
    <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold">
      My <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">Skills</span>
    </h1>
   
  </div>

  {/* Skills Grid */}
  <div className="flex justify-center mt-16">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl w-full">
      {skills.map((skill,i) => (
        <Tilt
          key={skill.name}
          scale={1.05}
          transitionSpeed={400}
          className="w-full"
        >
          <div data-aos="flip-right" data-aos-anchor-placement="top-center" data-aos-delay={i*100} className=" bg-blue-950/20 backdrop-blur-lg text-center 
            rounded-2xl flex flex-col items-center justify-center aspect-square 
            shadow-lg shadow-purple-900/30 transition-transform duration-300 
            hover:scale-110 hover:shadow-cyan-400/40 border border-white/10 p-6">
            
            <div className="text-5xl mb-3 text-cyan-300">{skill.icon}</div>
            <p className="text-2xl font-bold text-white">{skill.percentage}%</p>
            <p className="text-purple-300 mt-1 font-medium">{skill.name}</p>
          </div>
        </Tilt>
      ))}
    </div>
  </div>
</div>

  );
}

export default Skills;
