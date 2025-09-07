import Image from "next/image";
import React from "react";

const projects = [
  {
    id: 1,
    title: "ShopeEase",
    repolink: "https://github.com/zayaaan-al/ShopEase.git",
    img: "/images/Shopease.png",
    link: "https://zayaaan-al.github.io/ShopEase/",
  },
  {
    id: 2,
    title: "Weather App",
    repolink: "https://github.com/zayaaan-al/Weather-App.git",
    img: "/images/weatherapp.png",
    link: "https://weather-app-pi-wheat-66.vercel.app/",
  },
  {
    id: 3,
    title: "ToDo List",
    repolink: "https://github.com/zayaaan-al/todo.git",
    img: "/images/todoapp.png",
    link: "https://zayaanaltodoapp.netlify.app/",
  },
  {
    id: 4,
    title: "Calculator",
    repolink: "https://github.com/zayaaan-al/calculator.git",
    img: "/images/calculator.png",
    link: "https://zayaaan-al.github.io/calculator/",
  },
  {
    id: 5,
    title: "Quize App",
    repolink: "https://github.com/zayaaan-al/Quiz-App.git",
    img: "/images/quizeapp.png",
    link: " https://zayaaan-al.github.io/Quiz-App/",
  },
  {
    id: 6,
    title: "Bird Game",
    repolink: "https://github.com/zayaaan-al/Bird-Game.git",
    img: "/images/birdgame.png",
    link: "https://zayaaan-al.github.io/Bird-Game/",
  },
  {
    id: 7,
    title: "Allensolly Clone",
    repolink: "https://github.com/zayaaan-al/allensolly.git",
    img: "/images/allensolly.png",
    link: "https://zayaaan-al.github.io/allensolly/",
  },
  {
    id: 8,
    title: "Starbucks Clone",
    repolink: "https://github.com/zayaaan-al/starbucks.git",
    img: "/images/starbucks.png",
    link: "https://zayaaan-al.github.io/starbucks/",
  },
  {
    id: 9,
    title: "Airbnb Clone",
    repolink: "https://github.com/zayaaan-al/airbnb.git",
    img: "/images/airbnd.png",
    link: "https://zayaaan-al.github.io/airbnb/",
  },
];

const Projects = () => {
  return (
    <div id="works" className="pt-16 pb-16 px-4">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        A small selection of recent <br />
        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">projects</span>
      </h1>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {projects.map((project,i) => (
          <div
          data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay={i*100}
            key={project.id}
            className="rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            {/* Image */}
            <div className="relative h-52 md:h-64 w-full" 
            >
              <Image
                src={project.img}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 
                       (max-width: 1200px) 50vw, 
                       33vw"
                className="object-cover rounded-t-2xl"
              />
            </div>

            {/* Info */}
            <div className="p-5" >
              <h2 className="text-lg md:text-xl font-semibold text-white">
                {project.title}
              </h2>
              {/* <p className="mt-2 text-white/80">{project.category}</p> */}
              {/* <div><a
                href={project.repolink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block  mt-3 text-white/80 font-medium hover:underline"
              >
                Repo →
              </a></div> */}
              {/* Demo Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-indigo-400 font-medium hover:underline"
              >
                Demo →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-12">
        <a
          href="https://github.com/zayaaan-al?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300
        cursor-pointer rounded-full text-lg font-medium text-white"
        >
          Show More →
        </a>
      </div>
    </div>
  );
};

export default Projects;
