import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Tourist Guide Chatbot",
    description: "An AI-powered chatbot that helps tourists explore Sri Lanka with personalized recommendations.",
    image: "/project1.png", // Ensure this image is in the public/ folder
    link: "https://github.com/yourusername/tourist-chatbot",
    tech: ["GPT-2", "Flask", "Python"],
  },
  {
    id: 2,
    title: "Cloud Deployment Automation",
    description: "A CI/CD pipeline for deploying machine learning models on AWS with Docker and Terraform.",
    image: "/project2.png",
    link: "https://github.com/yourusername/cloud-deployment",
    tech: ["AWS", "Docker", "Terraform"],
  },
  {
    id: 3,
    title: "Data Science Dashboard",
    description: "An interactive dashboard built with Next.js and Plotly to visualize machine learning models.",
    image: "/project3.jpg",
    link: "https://github.com/yourusername/ds-dashboard",
    tech: ["Next.js", "Plotly", "Python"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-8 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-blue-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="object-cover w-full h-48"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>

              {/* Tech Stack Badges */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span key={index} className="px-3 py-1 text-sm bg-blue-500 text-white rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-500 hover:underline"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
