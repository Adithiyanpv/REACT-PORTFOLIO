import { motion } from "framer-motion";
import { CONTACT } from "../constants";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

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

const iconVariants = {
  initial: { opacity: 0, x: -20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const Contact = () => {
  return (
    <motion.div
      className="border-b border-neutral-900 pb-20 text-white"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <h2 className="my-10 text-center text-4xl font-bold text-gradient">Get in Touch with Me</h2>
      <div className="flex flex-col items-center gap-8">
        <motion.div
          className="flex items-center gap-4 text-lg"
          variants={iconVariants}
        >
          <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
          <p className="text-neutral-300">{CONTACT.address}</p>
        </motion.div>
        <motion.div
          className="flex items-center gap-4 text-lg"
          variants={iconVariants}
        >
          <FaPhoneAlt className="text-cyan-400 text-2xl" />
          <p className="text-neutral-300">{CONTACT.phoneNo}</p>
        </motion.div>
        <motion.div
          className="flex items-center gap-4 text-lg"
          variants={iconVariants}
        >
          <FaEnvelope className="text-cyan-400 text-2xl" />
          <a 
            href={`mailto:${CONTACT.email}`} 
            className="text-cyan-400 hover:underline"
          >
            {CONTACT.email}
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
