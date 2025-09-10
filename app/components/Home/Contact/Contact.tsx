import React, { useRef } from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";


const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formElements = formRef.current.elements as HTMLFormControlsCollection;
    const name = (formElements.namedItem("name") as HTMLInputElement).value;
    const email = (formElements.namedItem("email") as HTMLInputElement).value;
    const message = (formElements.namedItem("message") as HTMLTextAreaElement).value;

    try {
      // 1️⃣ Send your contact notification to yourself
      await emailjs.sendForm(
        "service_6n3vk1b",       // Your Service ID
        "template_pmdsmg9",      // Your template for receiving messages
        formRef.current,
        "JShVS6g4TJexxD4a1"     // Public Key
      );

      // 2️⃣ Send auto-reply to the user
      await emailjs.send(
        "service_6n3vk1b",
        "template_c4w0ltl",      // ✅ Your auto-reply template ID
        { name, email, message },
        "JShVS6g4TJexxD4a1"      // Public Key
      );

      // ✅ Modern success popup
      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Thanks for reaching out. I'll get back to you soon 🚀",
        confirmButtonColor: "#1d4ed8",
        background: "#0f172a",
        color: "#f1f5f9",
        showClass: {
          popup: "animate__animated animate__fadeInDown"
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp"
        }
      });

      formRef.current.reset();
    } catch (error: any) {
      console.error(error.text || error);

      // ❌ Modern error popup
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong. Please try again later.",
        confirmButtonColor: "#dc2626",
        background: "#0f172a",
        color: "#f1f5f9",
        footer: '<a href="mailto:alzayanpoothakkal1156@gmail.com">Contact me directly</a>'
      });
    }
  };

  return (
    <div id="contact" className="pt-16 pb-16">
      <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200 leading-snug">
            Schedule a call with me to see if I can help
          </h1>
          <p className="text-gray-400 mt-6 text-base md:text-lg">
            Reach out to me today and let’s discuss how I can help you achieve your goals.
          </p>

          {/* Contact Info */}
          <div className="mt-8 space-y-5">
            <a
              href="tel:+918089271156"
              className="flex items-center space-x-3 hover:text-cyan-300 transition"
            >
              <BiPhone className="w-7 h-7 text-cyan-300" />
              <p className="text-lg font-semibold text-gray-400">+91 8089271156</p>
            </a>

            <a
              href="mailto:alzayanpoothakkal1156@gmail.com"
              className="flex items-center space-x-3 hover:text-cyan-300 transition"
            >
              <BiEnvelope className="w-7 h-7 text-cyan-300" />
              <p className="text-lg font-semibold text-gray-400 break-all">
                alzayanpoothakkal1156@gmail.com
              </p>
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Pathappiriyam,+Malappuram,+676123,+Kerala"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 hover:text-cyan-300 transition"
            >
              <BiMap className="w-7 h-7 text-cyan-300" />
              <p className="text-lg font-semibold text-gray-400">
                Pathappiriyam, Malappuram , 676123 - Kerala
              </p>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex mt-8 space-x-4 sm:space-x-6">
            <a
              href="https://github.com/zayaaan-al"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-12 h-12 bg-blue-950/60 rounded-full flex items-center justify-center hover:bg-black transition-all"
            >
              <FaGithub className="text-white w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/zayaaan-al/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-12 h-12 bg-blue-950/60 rounded-full flex items-center justify-center hover:bg-blue-900 transition-all"
            >
              <FaLinkedin className="text-white w-6 h-6" />
            </a>
            <a
              href="https://wa.me/918089271156"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-12 h-12 bg-blue-950/60 rounded-full flex items-center justify-center hover:bg-green-500 transition-all"
            >
              <FaWhatsapp className="text-white w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/zayaaan.al/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-12 h-12 bg-blue-950/60 rounded-full flex items-center justify-center hover:bg-pink-500 transition-all"
            >
              <FaInstagram className="text-white w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          data-aos="zoom-in"
          className="p-5 sm:p-8 md:p-10 bg-[#131332] rounded-xl shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="px-4 py-3.5 bg-[#363659] text-white rounded-md w-full placeholder:text-white/70"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="px-4 py-3.5 mt-5 bg-[#363659] text-white rounded-md w-full placeholder:text-white/70"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="px-4 py-3.5 mt-5 bg-[#363659] text-white rounded-md w-full h-[9rem] sm:h-[10rem] placeholder:text-white/70"
          />
          <button
            type="submit"
            className="mt-7 px-8 py-3.5 font-bold bg-blue-950 hover:bg-blue-900 transition-all text-white rounded-full w-full sm:w-auto"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
