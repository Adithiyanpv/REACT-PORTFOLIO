import {
  RiReactjsLine,
  RiTailwindCssLine,
  RiBootstrapLine,
  RiJavaLine,
} from "react-icons/ri";
import {
  SiPython,
  SiHtml5,
  SiCss3,
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiScikitlearn,
  SiScipy,
  SiPandas,
  SiNumpy,
  SiMatplotlib,
  SiLangchain,
  SiGithub,
  SiDocker,
  SiPostman,
  SiJupyter,
  SiAmazonaws,
  SiFlask,
  SiMysql,
  SiApachespark,
  SiHadoop,
  SiOpencv,
  SiJavascript,
} from "react-icons/si";
import { FaGitAlt, FaRobot } from "react-icons/fa";
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
        <TechIcon Icon={SiPython} color="#3776AB" />
        <TechIcon Icon={RiJavaLine} color="#007396" />
        <TechIcon Icon={SiJavascript} color="#F7DF1E" />
        <TechIcon Icon={SiHtml5} color="#E34F26" />
        <TechIcon Icon={SiCss3} color="#1572B6" />

        {/* ML & AI */}
        <TechIcon Icon={SiTensorflow} color="#FF6F00" />
        <TechIcon Icon={SiKeras} color="#D00000" />
        <TechIcon Icon={SiPytorch} color="#EE4C2C" />
        <TechIcon Icon={SiScikitlearn} color="#F7931E" />
        <TechIcon Icon={SiScipy} color="#8CAAE6" />
        <TechIcon Icon={SiPandas} color="#150458" />
        <TechIcon Icon={SiNumpy} color="#013243" />
        <TechIcon Icon={SiMatplotlib} color="#11557C" />

        {/* GenAI & LLM */}
        <TechIcon Icon={SiLangchain} color="#5A0FC8" />
        <TechIcon Icon={FaRobot} color="#6B7280" /> {/* Placeholder for CrewAI */}

        {/* Tools & Platforms */}
        <TechIcon Icon={FaGitAlt} color="#F05032" />
        <TechIcon Icon={SiGithub} color="#181717" />
        <TechIcon Icon={SiDocker} color="#2496ED" />
        <TechIcon Icon={SiPostman} color="#FF6C37" />
        <TechIcon Icon={SiJupyter} color="#F37626" />

        {/* Cloud & Backend */}
        <TechIcon Icon={SiAmazonaws} color="#FF9900" />
        <TechIcon Icon={SiFlask} color="#000000" />
        <TechIcon Icon={SiMysql} color="#00758F" />

        {/* Big Data & Frameworks */}
        <TechIcon Icon={SiApachespark} color="#E25A1C" />
        <TechIcon Icon={SiHadoop} color="#66CCFF" />

        {/* Computer Vision & Robotics */}
        <TechIcon Icon={SiOpencv} color="#5C3EE8" />
        <TechIcon Icon={FaRobot} color="#6B7280" />
      </div>
    </div>
  );
};

const TechIcon = ({ Icon, color }) => (
  <motion.div
    variants={iconVariants}
    initial="initial"
    animate="animate"
    className="rounded-2xl border-4 border-neutral-800 p-4"
  >
    <Icon className="text-7xl" style={{ color }} />
  </motion.div>
);

export default Technologies;
