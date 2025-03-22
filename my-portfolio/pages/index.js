import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Image from "next/image";
import profilePic from "../public/beachguy.png"; // Replace with your actual image file

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar with Animation */}
      <motion.nav
        className="flex justify-between items-center p-6 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-2xl font-extrabold text-white">Sachintha.</h1>
        
        {/* Desktop Navbar */}
        <div className="hidden md:flex space-x-8 text-lg font-medium tracking-wide">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group text-gray-300 hover:text-white transition duration-300"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {item}
              <span className="absolute left-1/2 bottom-[-3px] w-0 h-[3px] bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden focus:outline-none">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.nav>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed top-0 right-0 h-screen w-2/3 bg-gradient-to-b from-blue-500/60 to-purple-600/60 
             flex flex-col items-start p-6 space-y-6 text-white shadow-lg backdrop-blur-md"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <button onClick={() => setMenuOpen(false)} className="self-end text-white">
              <X size={28} />
            </button>

            {["Home", "About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xl font-medium tracking-wide hover:opacity-80 transition"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto mt-20 px-4 text-left">
        {/* Left Side - Text & Buttons */}
        <div className="w-full md:w-1/2 space-y-4">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            Sachintha Nirmal
          </motion.h1>

          {/* Typing Effect for Subtitle */}
          <TypeAnimation
            sequence={[
              "I am a Data Scientist", 1000,
              "I am an AI Enthusiast", 1000,
              "I am a Cloud Engineer", 1000
            ]}
            wrapper="p"
            speed={50}
            repeat={Infinity}
            className="text-lg md:text-2xl font-semibold text-gray-300"
          />

          {/* Call-to-Action Buttons */}
          <div className="flex space-x-4">
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-700 text-white text-lg rounded-lg shadow-lg hover:opacity-90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>

            <motion.a
              href="https://drive.google.com/file/d/1kQPN-Vd5GCiq6LB3QMvBwtPyPm54BAeB/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-blue-500 text-blue-400 text-lg rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center z-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <Image
            src={profilePic} // Replace with actual path
            alt="Profile Picture"
            width={500}
            height={500}
            className="rounded-full shadow-lg scale-110"
          />
        </motion.div>
      </section>

      {/* Sections */}
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
