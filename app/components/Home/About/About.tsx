"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ParticlesHero from "../Hero/PartcleBackground";

const AboutMe: React.FC = () => {
  return (
    <section className="relative py-20 ">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl md:text-5xl font-extrabold text-white tracking-wide"
      >
        About <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Me</span>
      </motion.h1>

      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 mt-12 px-6"
      >
        
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-56 sm:w-64 lg:w-80 xl:w-96 flex-shrink-0"
        >
         
          <div className="absolute -inset-4 bg-indigo-500/30 rounded-3xl blur-3xl animate-pulse"></div>

          <Image
            src="/images/zayan.png"
            alt="User Image"
            width={400}
            height={480}
            className="relative rounded-3xl object-cover shadow-2xl border-2 border-gray-700"
          />
        </motion.div>

        
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left max-w-2xl"
        >
          <p className="mb-6 font-Ovo text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
            Hi, I’m{" "}
            <span className="text-indigo-400 font-semibold">Zayan</span>, an
            aspiring{" "}
            <span className="text-indigo-400 font-semibold">
              Full Stack Developer
            </span>{" "}
            seeking an opportunity to contribute to a progressive team. With a
            strong foundation in{" "}
            <span className="text-indigo-300">front-end</span> and{" "}
            <span className="text-indigo-300">back-end</span> development, I am
            passionate about delivering{" "}
            <span className="text-purple-400">robust</span>,{" "}
            <span className="text-purple-400">scalable</span>, and{" "}
            <span className="text-purple-400">efficient</span> applications.
          </p>

          
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium shadow-lg transition-all"
          >
            📄 Download Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
