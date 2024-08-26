import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import resume from "../assets/Adithiyan_Resume.pdf"; // Make sure to place your resume in the assets folder

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        {/* Image on the left side */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img src={aboutImg} alt="about" className="w-full h-auto" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <p className="my-2 max-w-xl py-6 font-light tracking-tight">{ABOUT_TEXT}</p>
          <p className="text-lg font-medium mt-4">
            My theme: <span className="text-cyan-400">Cricket, Code, and Chai</span>
          </p>
          <a
            href={resume}
            download="Adithiyan_Resume.pdf"
            className="mt-6 inline-block bg-cyan-500 text-white py-2 px-4 rounded hover:bg-cyan-600 transition-colors duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
