import {
  RiJavaLine,
} from "react-icons/ri";
import {
  SiPython,
  SiHtml5,
  SiCss3,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiKeras,
  SiScikitlearn,
  SiJavascript,
  SiPytorch,
  SiScipy,
  SiMatplotlib,
  SiGithub,
  SiGit,
  SiDocker,
  SiPostman,
  SiJupyter,
  SiAmazonaws,
  SiFlask,
  SiMysql,
  SiApachehadoop,
  SiApachespark,
  SiOpencv,
} from "react-icons/si";
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
        {/* Programming Languages */}
        <motion.div variants={iconVariants} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPython className="text-7xl text-[#3776AB]" />
        </motion.div>
        <motion.div variants={iconVariants} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiJavaLine className="text-7xl text-[#007396]" />
        </motion.div>
        <motion.div variants={iconVariants} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJavascript className="text-7xl text-[#F7DF1E]" />
        </motion.div>
        <motion.div variants={iconVariants} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiHtml5 className="text-7xl text-[#E34F26]" />
        </motion.div>
        <motion.div variants={iconVariants} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCss3 className="text-7xl text-[#1572B6]" />
        </motion.div>

        {/* ML & AI */}
        <motion.div variants={iconVariants} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTensorflow className="text-7xl text-[#FF6F00]" />
        </motion.div>
        <motion.div variants={iconVariants} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiKeras className="text-7xl text-[#D00000]" />
        </motion.div>
        <motion.div variants={iconVariants} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPytorch className="text-7xl text-[#EE4C2C]" />
        </motion.div>
        <motion.div variants={iconVariants} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiScikitlearn className="text-7xl text-[#F7931E]" />
        </motion.div>
        <motion.div variants={iconVariants} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiScipy className="text-7xl text-[#8CAAE6]" />
        </motion.div>
        <motion.div variants={iconVariants} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPandas className="text-7xl text-[#150458]" />
        </motion.div>
        <motion.div variants={iconVariants} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiNumpy className="text-7xl text-[#013243]" />
        </motion.div>
        <motion.div variants={iconVariants} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMatplotlib className="text-7xl text-[#11557C]" />
        </motion.div>

        {/* Tools & Platforms */}
        <motion.div variants={iconVariants} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiGit className="text-7xl text-[#F05032]" />
        </motion.div>
        <motion.div variants={iconVariants} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiGithub className="text-7xl text-white" />
        </motion.div>
        <motion.div variants={iconVariants} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiDocker className="text-7xl text-[#2496ED]" />
        </motion.div>
        <motion.div variants={iconVariants} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPostman className="text-7xl text-[#FF6C37]" />
        </motion.div>
        <motion.div variants={iconVariants} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJupyter className="text-7xl text-[#F37626]" />
        </motion.div>

        {/* Cloud & Backend */}
        <motion.div variants={iconVariants} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiAmazonaws className="text-7xl text-[#FF9900]" />
        </motion.div>
        <motion.div variants={iconVariants} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiFlask className="text-7xl text-white" />
        </motion.div>
        <motion.div variants={iconVariants} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-7xl text-[#4479A1]" />
        </motion.div>

        {/* Big Data */}
        <motion.div variants={iconVariants} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiApachehadoop className="text-7xl text-[#66CCFF]" />
        </motion.div>
        <motion.div variants={iconVariants} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiApachespark className="text-7xl text-[#E25A1C]" />
        </motion.div>

        {/* CV & Robotics */}
        <motion.div variants={iconVariants} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiOpencv className="text-7xl text-[#5C3EE8]" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
