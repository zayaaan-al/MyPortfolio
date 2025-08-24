"use client";
import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import ParticlesHero from "./PartcleBackground";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">
      <ParticlesHero />

      {/* Main Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Profile Image */}
        <Image
          src="/images/zayan.jpg"
          alt="heroimage"
          width={150}
          height={150}
          className="rounded-full border-8 border-[#0c0c48aa]"
        />

        {/* Social Icons (horizontal row under image) */}
        <div className="mt-6 flex flex-row items-center gap-6">
          <a
            href="https://github.com/zayaaan-al"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-2xl"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/zayaaan-al/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-2xl"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/zayaaan.al/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram profile"
            className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-2xl"
          >
            <FaInstagram />
          </a>

        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 font-bold tracking-wide">
          Full Stack <span className="text-cyan-200">Developer</span>
        </h1>

        {/* Typewriter Text */}
        <h2 className="mt-5 text-sm sm:text-lg md:text-2xl font-medium flex flex-wrap justify-center">
          Hi! I'm Zayan - A Passionate
          <span className="text-cyan-200 font-bold">
            <Typewriter
              options={{
                strings: [
                  " Frontend Developer",
                  " Backend Developer",
                  " Web Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName: "pl-2",
              }}
            />
          </span>
        </h2>

        {/* Button */}
        <button
          className="mt-6 px-8 py-3 bg-blue-800 hover:bg-blue-900 transition-all duration-300
          cursor-pointer rounded-full text-base sm:text-lg font-medium flex items-center gap-2"
        >
          <span>See my work</span>
          <BsArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
