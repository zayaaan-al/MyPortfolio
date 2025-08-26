import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
     {/* text content */}
<div className="text-left">
  <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200 leading-snug">
    Schedule a call with me to see if I can help
  </h1>
  <p className="text-gray-400 mt-6 text-sm sm:text-base md:text-lg">
    Reach out to me today and let’s discuss how I can help you achieve
    your goals.
  </p>

  {/* info */}
  <div className="mt-8 space-y-5">
    <div className="flex items-center space-x-3">
      <BiPhone className="w-7 h-7 sm:w-9 sm:h-9 text-cyan-300" />
      <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-400">
        +91 8089271156
      </p>
    </div>
    <div className="flex items-center space-x-3">
      <BiEnvelope className="w-7 h-7 sm:w-9 sm:h-9 text-cyan-300" />
      <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-400 break-all">
        alzayanpoothakkal1156@gmail.com
      </p>
    </div>
    <div className="flex items-center space-x-3">
      <BiMap className="w-7 h-7 sm:w-9 sm:h-9 text-cyan-300" />
      <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-400">
        Pathappiriyam, Malappuram , 676123 - Kerala
      </p>
    </div>
  </div>

  {/* social icons */}
  <div className="flex mt-8 space-x-4 sm:space-x-6">
    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-black transition-all duration-300">
      <FaGithub className="text-white w-6 h-6" />
    </div>
    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-900 transition-all duration-300">
      <FaLinkedin className="text-white w-6 h-6" />
    </div>
    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-500 transition-all duration-300">
      <FaWhatsapp className="text-white w-6 h-6" />
    </div>
    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-500 transition-all duration-300">
      <FaInstagram className="text-white w-6 h-6" />
    </div>
  </div>
</div>


        {/* form */}
        <div className="p-5 sm:p-8 md:p-10 bg-[#131332] rounded-xl shadow-lg">
          <input
            type="text"
            placeholder="Name"
            className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 text-sm sm:text-base"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-3.5 mt-5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 text-sm sm:text-base"
          />
          <textarea
            placeholder="Your Message"
            className="px-4 py-3.5 mt-5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 h-[9rem] sm:h-[10rem] text-sm sm:text-base"
          ></textarea>
          <button className="mt-7 sm:mt-8 px-8 sm:px-10 md:px-12 py-3.5 sm:py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full w-full sm:w-auto">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
