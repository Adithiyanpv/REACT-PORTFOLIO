import { RiReactjsLine, RiTailwindCssLine, RiBootstrapLine, RiJavaLine } from "react-icons/ri";
import { SiPython, SiHtml5, SiCss3, SiTensorflow, SiPandas, SiNumpy, SiKeras, SiScikitlearn } from "react-icons/si";
import { motion } from "framer-motion";

// Variants for bouncing animation
const iconVariants = {
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: 2.5,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="my-20 text-center text-4xl font-bold"
      >
        Technologies
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-6">
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-[#61DAFB]" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssLine className="text-7xl text-[#38B2AC]" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiBootstrapLine className="text-7xl text-[#7952B3]" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPython className="text-7xl text-[#007396]" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiJavaLine className="text-7xl text-[#3776AB]" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiHtml5 className="text-7xl text-[#E34F26]" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiCss3 className="text-7xl text-[#1572B6]" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTensorflow className="text-7xl text-[#FF6F00]" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPandas className="text-7xl text-[#150458]" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiNumpy className="text-7xl text-[#013243]" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiKeras className="text-7xl text-[#D00000]" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiScikitlearn className="text-7xl text-[#F7931E]" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
