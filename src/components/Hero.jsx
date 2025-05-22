import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/ADHI PROFILE PIC.png";
import resume from "../assets/ADITHIYAN'S RESUME.pdf"; 
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-16 lg:pb-20 lg:mb-32">
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-1/2 lg:pr-8">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
              initial={{ opacity: 0, x: -100 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.7, ease: "easeOut" }} 
              className="pb-6 text-5xl font-extrabold tracking-tight lg:mt-16 lg:text-7xl"
            >
              Adithiyan PV
            </motion.h1>
            <motion.span
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }} 
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl font-semibold tracking-tight text-transparent"
            >
              Software Engineer 
            </motion.span>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }} 
              className="my-4 max-w-xl py-4 font-light tracking-tight text-center lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              href={resume}
              download="Adithiyan_PV_Resume.pdf"
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }} 
              className="mt-6 inline-block rounded bg-cyan-400 px-6 py-3 text-neutral-900 hover:bg-cyan-500 transition-colors hover:shadow-lg hover:scale-105"
            >
              Download My Resume
            </motion.a>
          </div>
        </div>
        <motion.div
          className="w-full lg:w-1/2 lg:pl-8 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img 
            src={profilePic} 
            alt="Adithiyan's profile picture" 
            className="w-full h-auto max-w-md rounded-full border-2 border-cyan-400 shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
