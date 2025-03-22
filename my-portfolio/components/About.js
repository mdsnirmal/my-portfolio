import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-16 px-8 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center">
        {/* Profile Image with Animation */}
        <motion.div
          className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotate: 2 }} // Hover Effect
        >
          <Image
            src="/SACHINTHA-gc.jpg" // Ensure the image exists in the "public/" folder
            alt="Profile Picture"
            width={256}
            height={256}
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* About Text with Slide-in Effect */}
        <motion.div
          className="md:ml-10 text-center md:text-left mt-6 md:mt-0 max-w-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-blue-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="mt-4 text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Hi! I&apos;m <span className="font-semibold">Sachintha Nirmal</span>, a passionate{" "}
            <span className="text-blue-500 font-semibold">Data Scientist & Cloud Engineer</span> with expertise in 
            AI, Machine Learning, and Cloud Computing. I love solving complex problems and building 
            intelligent solutions that make an impact.
            <br />
            <br />
            With experience in <span className="font-semibold">Python, TensorFlow, AWS, and Next.js</span>, 
            I aim to merge data science with web technologies to create innovative applications.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
