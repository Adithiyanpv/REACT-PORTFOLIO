import { Link } from "react-scroll";
import logo from "../assets/artificial-intelegence.png";
import { FaLinkedin, FaGithub, FaInstagram, FaOrcid } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="w-24 h-auto" />
      </div>
      <div className="flex-grow flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-white">Welcome to My Portfolio!</h1>
      </div>
      <div className="flex gap-4 items-center">
        {/* Navigation Buttons */}
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer text-white hover:text-cyan-400 transition-colors duration-300"
        >
          About
        </Link>
        <Link
          to="technologies"
          smooth={true}
          duration={500}
          className="cursor-pointer text-white hover:text-cyan-400 transition-colors duration-300"
        >
          Technologies
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={500}
          className="cursor-pointer text-white hover:text-cyan-400 transition-colors duration-300"
        >
          Experience
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer text-white hover:text-cyan-400 transition-colors duration-300"
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer text-white hover:text-cyan-400 transition-colors duration-300"
        >
          Contact
        </Link>
        {/* Social Media Icons */}
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/adithiyan-pv-68639b258/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors duration-300">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Adithiyanpv" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors duration-300">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/adithiyan_pv/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors duration-300">
            <FaInstagram />
          </a>
          <a href="https://orcid.org/0009-0007-3557-0387" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors duration-300">
            <FaOrcid />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
