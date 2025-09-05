import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-blue-900/20 text-gray-300 pt-12">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-10">
        
        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-4">Al Zayan</h1>
          <p className="text-gray-400 leading-relaxed">
            Building modern web experiences with React, Next.js, and Tailwind. 🚀
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#works" className="hover:text-white transition">Projects</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

       {/* Social Media */}
<div>
  <h2 className="text-lg font-semibold text-white mb-4">Connect</h2>
  <div className="flex space-x-5 text-xl">
    <a 
      href="https://github.com/zayaaan-al" 
      aria-label="GitHub" 
      className="hover:text-white transition"
    >
      <FaGithub />
    </a>
    <a 
      href="https://www.linkedin.com/in/zayaaan-al/" 
      aria-label="LinkedIn" 
      className="hover:text-white transition"
    >
      <FaLinkedin />
    </a>
    <a 
      href="https://www.instagram.com/zayaaan.al/" 
      aria-label="Instagram" 
      className="hover:text-white transition"
    >
      <FaInstagram />
    </a>
   
    
  </div>
</div>

      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-400 py-6 text-sm">
        © {new Date().getFullYear()} <span className="text-white font-semibold">Al Zayan</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
