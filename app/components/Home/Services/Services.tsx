import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section id="services" className="py-20">
      {/* Section Heading */}
      <h1 className="text-center text-3xl md:text-4xl xl:text-5xl font-extrabold text-white">
        My{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Services
        </span>
      </h1>

      {/* Services Grid */}
      <div data-aos="fade-right" data-aos-anchor-placement="top-center" className="mt-16 w-[90%] sm:w-[80%] lg:w-[75%] mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
        <ServiceCard
          icon="/images/s1.png"
          name="Frontend Development"
          description="Building modern, responsive, and accessible  UIs using Html, Css, Bootstrap, React, Tailwind CSS, and JavaScript (ES6+)."
        />
        <ServiceCard
          icon="/images/s2.png"
          name="Backend Development"
          description="Developing scalable and secure server-side applications and APIs with Node.js, Express, and Django."
        />
        <ServiceCard
          icon="/images/s3.png"
          name="Full Stack Solutions"
          description="Delivering complete MERN and Django-based applications, from intuitive frontends to robust backends."
        />
        <ServiceCard
          icon="/images/s4.png"
          name="UI/UX & Creative Design"
          description="Transforming ideas into visually appealing, user-friendly designs with Figma, responsive layouts, and smooth user experiences."
        />
      </div>
    </section>
  );
};

export default Services;
