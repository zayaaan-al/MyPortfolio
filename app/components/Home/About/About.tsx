"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const AboutMe: React.FC = () => {
  return (
    <section className="relative py-20 bg-transparent">
      {/* Section Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl md:text-5xl font-extrabold text-white tracking-wide"
      >
        About{" "}
        <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Me
        </span>
      </motion.h1>

      {/* Content Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 mt-16 px-6 max-w-6xl"
      >
        {/* Image Section */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-56 sm:w-64 lg:w-80 xl:w-96 flex-shrink-0"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/30 to-purple-500/30 blur-2xl animate-pulse"></div>
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
            <Image
              src="/images/zayan.png"
              alt="Zayan"
              width={400}
              height={480}
              priority  
              className="relative rounded-3xl object-cover shadow-2xl border border-white/10"
            />
          </Tilt>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left max-w-2xl"
        >
          <p className="mb-8 font-Ovo text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
            Hi, I’m{" "}
            <span className="text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text font-bold">
              Zayan
            </span>
            , an aspiring{" "}
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text font-semibold">
              Full Stack Developer
            </span>{" "}
            with hands-on experience in the{" "}
            <span className="text-indigo-300">MERN</span> and{" "}
            <span className="text-purple-300">Django</span> ,
            specializing in building{" "}
            <span className="text-cyan-300">responsive</span>,{" "}
            <span className="text-cyan-300">dynamic</span>, and{" "}
            <span className="text-cyan-300">user-friendly</span> web
            applications.
            <br className="hidden sm:block" />
            Currently gaining professional experience as a developer intern, I
            combine{" "}
            <span className="text-purple-300">UI/UX principles</span> with
            modern frameworks like{" "}
            <span className="text-cyan-300">React</span>,{" "}
            <span className="text-cyan-300">Tailwind</span>, and{" "}
            <span className="text-cyan-300">Django</span> to craft seamless
            digital experiences. Passionate about{" "}
            <span className="text-indigo-300">clean code</span>,{" "}
            <span className="text-indigo-300">problem-solving</span>, and{" "}
            <span className="text-indigo-300">continuous learning</span> to stay
            ahead in the ever-evolving tech world.
          </p>

          {/* Resume Button */}
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold shadow-lg transition-all"
          >
            📄 Download Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
