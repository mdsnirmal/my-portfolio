import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Left - Copyright */}
        <motion.p
          className="text-sm md:text-base"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          © {new Date().getFullYear()} Sachintha Nirmal. All rights reserved.
        </motion.p>

        {/* Right - Social Icons */}
        <motion.div
          className="flex space-x-6 mt-4 md:mt-0"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <a href="https://github.com/mdsnirmal" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/sachintha-nirmal" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
            <Linkedin size={24} />
          </a>
          <a href="mailto:mdsnirmal@gmail.com" className="hover:text-white transition duration-300">
            <Mail size={24} />
          </a>
          <a href="tel:+94767278015" className="hover:text-white transition duration-300">
            <Phone size={24} />
          </a>
        </motion.div>
        
      </div>
    </footer>
  );
};

export default Footer;
