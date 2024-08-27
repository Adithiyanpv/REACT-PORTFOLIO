import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";

export const HERO_CONTENT = "Hello, I’m Adithiyan, a frontend developer specializing in ReactJS, Bootstrap, and TailwindCSS. I utilize ReactJS to build interactive and scalable web applications, use Bootstrap to quickly create responsive layouts, and apply TailwindCSS for precise, custom styling. My goal is to craft seamless, user-friendly interfaces that stand out with both functionality and aesthetics. Feel free to explore my portfolio - Happy Exploration! :)"
export const ABOUT_TEXT = "A passionate self-taught programmer and a Machine learning enthusiast. Currently I am working in the domains of deep learning using OpenCV and full-stack web development. I am a fully committed team member with a talent for clear communication, and I work best in cooperative settings that encourage creativity. My passion for remaining current with cutting-edge technology, such as large language models (LLMs), Robotic Process Automation (RPA) reflects my dedication to lifelong learning and development. I spend my free time on LeetCode enhancing my problem-solving abilities."
export const EXPERIENCES = [
  {
    year: "January 2022 - Present",
    role: "Mentor - Aritificial Intelligence and Competitive Programming Domain",
    company: "Cognizance Amrita",
    description: `As a mentor, evaluated students on weekly technical tasks, quizzes, and hackathons, contributed to intra-college
Computer Vision hackathon and other technical events. Guided many students in upskilling, focusing on career
development and technical expertise.`,
    technologies: ["Python", "Java", "Computer Vision", "Machine learning", "Neural Networks"],
  }
];

export const PROJECTS = [
  {
    title: "A.I.A.R.A - THE SOCIAL ROBOT",
    image: project1, 
    description: "Designed an interface for social robots capable of recognizing faces, engaging in natural conversation, and detecting emotions through visual and textual inputs. Developed animated avatars that convey emotions based on user interactions.",
    technologies: ["Python", "Flask", "Gemini Pro API", "Whisper", "OpenCV", "Yolov8", "HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/Adithiyanpv/AIARA" 
  },
  {
    title: "GENERATION OF FEN SCORE FROM CHESSBOARD USING CNN",
    image: project2, 
    description: "Developed a CNN-based model to accurately generate FEN scores from digital chessboard images, achieving 98.4% accuracy. The system is designed for real-time application, enabling automated analysis of online chess matches and efficient game record keeping, thus streamlining the process for players and commentators by providing instant, accurate board states.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Matplotlib", "Scikit-learn", "Pandas", "Numpy"],
    githubLink: "https://github.com/Adithiyanpv/FEN-SCORE-GENERATION" 
  },
  {
    title: "FINANCIAL FRAUD DETECTION",
    image: project3, 
    description: "Built a scalable web application integrating a 96.87% accurate Random Forest model to detect financial fraud in real-time. The application features a user-friendly interface for seamless transaction monitoring and fraud prediction.",
    technologies: ["Python", "Scikit-learn", "Flask", "HTML", "CSS", "Pandas"],
    githubLink: "https://github.com/Adithiyanpv/Financial_Fraud_Detection" 
  },
  {
    title: "REAL TIME OBJECT DETECTION USING YOLOV9",
    image: project4, 
    description: "Developed the Gelan-C model for real-time object detection in football using a customized dataset, PyTorch, YOLOv9, and OpenCV, achieving 75.9% mAP50 during validation, enhancing accuracy and efficiency in game analysis and performance tracking.",
    technologies: ["Python", "PyTorch", "YOLOv9", "OpenCV"],
    githubLink: "https://github.com/Adithiyanpv/OBJECT-DETECTION-USING-YOLOV9"
  },
  {
    title: "Automobile Parts Classification using RexNet-150",
    image: project5, 
    description: "Utilized ReXNet-150 to automate automotive part assembly and quality control, achieving 98.6% testing accuracy and 98.4% training accuracy with a dataset of 16,600 RGB images across 50 auto parts, enhancing efficiency in vehicle manufacturing and inspection systems.",
    technologies: ["Python", "ReXNet-150", "Computer Vision"],
    githubLink: "https://github.com/Adithiyanpv/AUTOMOBILE-PARTS-CLASSFICATION"
  },
  {
    title: "Fake News Classification using XGBoost and CNN",
    image: project6, 
    description: "Developed a robust fake news detection system utilizing XGBoost and CNNs for both textual and video content, achieving 96% accuracy by integrating human insights with computational power to effectively identify misinformation across various media.",
    technologies: ["Python", "XGBoost", "CNN", "Text Analysis", "Video Analysis"],
    githubLink: "https://github.com/Adithiyanpv/FAKE-NEWS-CLASSIFICATION-VIDEO-AND-AUDIO-"
  }
];


export const CONTACT = {
  address: "103-D, Chinnamman Kovil Street, Avadi, Chennai - 600054 ",
  phoneNo: "+91 9360105866",
  email: "adithiyan999@gmail.com",
};
