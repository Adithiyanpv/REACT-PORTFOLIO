import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

// Variants for fade-in and hover animations
const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const hoverEffect = {
  scale: 1.05,
  transition: { duration: 0.3 },
};

const Projects = () => {
  return (
    <motion.div
      className="border-b border-neutral-900 pb-16"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <h1 className="my-20 text-center text-4xl font-bold text-gradient">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="p-4"
            variants={cardVariants}
            whileHover={hoverEffect}
          >
            <div className="border border-neutral-700 p-6 rounded-lg shadow-lg bg-neutral-800">
              <img src={project.image} alt={project.title} className="w-full h-auto mb-4 rounded-lg shadow-md" />
              <h2 className="text-2xl font-semibold mb-2 text-neutral-100">{project.title}</h2>
              <p className="text-neutral-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors"
              >
                View on GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
