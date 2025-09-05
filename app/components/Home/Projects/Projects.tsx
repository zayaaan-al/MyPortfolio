import Image from "next/image";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Modern Finance Dashboard UI",
    category: "Apps, UI/UX",
    img: "/images/p1.jpg",
    link: "",
  },
  {
    id: 2,
    title: "E-Commerce Website",
    category: "Web, UI/UX",
    img: "/images/p2.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "Web Design",
    img: "/images/p3.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "Mobile Banking App",
    category: "Apps, UI/UX",
    img: "/images/p4.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "Crypto Dashboard",
    category: "Apps, Finance",
    img: "/images/p1.jpg",
    link: "#",
  },
  {
    id: 6,
    title: "AI Landing Page",
    category: "Web, UI/UX",
    img: "/images/p2.jpg",
    link: "#",
  },
  {
    id: 7,
    title: "Task Manager App",
    category: "Apps, Productivity",
    img: "/images/p3.jpg",
    link: "#",
  },
  {
    id: 8,
    title: "Restaurant Website",
    category: "Web, Food",
    img: "/images/p4.jpg",
    link: "#",
  },
  {
    id: 9,
    title: "Travel Booking App",
    category: "Apps, UI/UX",
    img: "/images/p1.jpg",
    link: "#",
  },
];

const Projects = () => {
  return (
    <div id="works" className="pt-16 pb-16 px-4">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        A small selection of recent <br />
        <span className="text-cyan-300">projects</span>
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
              <p className="mt-2 text-white/80">{project.category}</p>

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
