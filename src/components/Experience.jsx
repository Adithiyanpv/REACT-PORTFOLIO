import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

// Variants for fade-in and slide-up animations
const containerVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const Experience = () => {
  return (
    <motion.div
      className="border-b border-neutral-900 pb-16"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <h1 className="my-20 text-center text-4xl font-bold text-gradient">Experience</h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className="mb-12 flex flex-wrap lg:justify-center"
            variants={itemVariants}
          >
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400 font-medium">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 text-xl font-semibold text-neutral-100">
                {experience.role} -{" "}
                <span className="text-sm text-purple-300">{experience.company}</span>
              </h6>
              <p className="mb-4 text-neutral-300">{experience.description}</p>
              <div className="flex flex-wrap mt-4">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mb-2 rounded-full bg-neutral-800 px-3 py-1 text-sm font-medium text-purple-400 shadow-md transition-transform transform hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
