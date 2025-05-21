import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";
import project8 from "../assets/projects/project-8.jpg";
import project9 from "../assets/projects/project-9.jpg";
import project10 from "../assets/projects/project-10.jpg";

export const HERO_CONTENT = "Hello, I’m Adithiyan, a Machine Learning Engineer passionate about building intelligent systems that transform data into actionable insights. I specialize in developing scalable ML models, integrating AI solutions with web technologies, and deploying end-to-end pipelines using tools like Flask, LangChain, and Docker. I love turning complex algorithms into real-world applications that drive innovation. Explore my portfolio to see how I bring ideas to life with code!";
export const ABOUT_TEXT = "I'm a passionate Techie with a deep interest in Machine Learning, Computer Vision, Natural Language Processing, and Advanced Data Structures. My work spans building intelligent systems using deep learning frameworks, deploying scalable applications with AWS and Docker, and integrating cutting-edge technologies like Large Language Models (LLMs) and LangChain for real-world AI solutions. I thrive in collaborative environments that fuel innovation and creativity. Outside of projects, I actively solve problems on LeetCode to sharpen my algorithmic thinking and stay updated with the latest in tech.";
export const EXPERIENCES = [
  {
    year: "January 2022 - Present",
    role: "Technical Co-ordinator - Artificial Intelligence and Competitive Programming Domain",
    company: "Cognizance Amrita",
    description: `As a co-ordinator, evaluated students on weekly technical tasks, quizzes, and hackathons,various technical events. Organized and led workshops, events, and peer-led study sessions on Data Structures, Computer Vision,
and Machine Learning, enhancing peer learning and technical proficiency.`,
    technologies: ["Python", "Java", "Computer Vision", "Machine learning", "Neural Networks", "Data Structures and Algorithms"],
  },

  {
    year: "October 2024 - December 2024",
    role: "Machine Learning Intern (Project Lead)",
    company: "Infosys Springboard",
    description: `Developed and deployed an end-to-end obesity classification system using machine learning and generative
AI, integrating LangChain with Google Gemini for personalized health suggestions, and achieving 92%
accuracy through advanced preprocessing, hyperparameter tuning, and a user-friendly Flask-based web app
deployed via Render with CI/CD pipelines for real-time predictions.`,
    "technologies": ["Python", "Flask", "Scikit-Learn", "Pandas", "LangChain", "Google Gemini", "CI/CD", "Render", "Machine Learning", "Generative AI"],
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
    title: "VisionChess: Seamless Chessboard Detection and 2D Rendering",
    image: project2,
    description: "Developed a YOLOv11-based model to detect and classify chess pieces from board images, achieving 95.4% accuracy in reconstructing FEN strings. Combined deep learning techniques with tailored model enhancements to deliver robust and accurate predictions.",
    technologies: ["YOLOv11", "Python", "OpenCV", "Custom Feature Engineering", "Deep Learning"],
    githubLink: "https://github.com/Adithiyanpv/RETRIEVAL-OF-FEN-SCORE-FROM-LIVE-CHESSBOARD.git"
  },
  {
    title: "Smart Attendance System (SAS) using Face Recognition",
    image: project7,
    description: "Built a tablet-based system using DeepFace that achieved 99.75% accuracy, 94% confidence level, and a 2-second recognition time to automate attendance, eliminating manual errors and delays in institutions. Developed the full-stack system with Node.js, Express, Flask, and MySQL for seamless attendance management.",
    technologies: ["DeepFace", "VGGFace", "Flask", "Node.js", "Express", "HTML", "CSS", "JavaScript", "MySQL"],
    githubLink: "https://github.com/Adithiyanpv/SMART-ATTENDANCE-SYSTEM-WITH-FACIAL-RECOGNITION.git"
  },
  {
    title: "Bidirectional Accent Conversion via GAN-Based Mel Translation",
    image: project8,
    description: "Built a GAN model for bidirectional accent conversion, transforming Indian and American-accented speech using paired Mel spectrograms, achieving MCD of 10.06, Mel Spectrogram Pearson Correlation of 0.99, and Prosody Similarity of 0.89, demonstrating high-quality and natural accent transformation.",
    technologies: ["GAN", "Librosa", "Scipy", "Numpy", "Speech Processing", "PyTorch"],
    githubLink: "https://github.com/Adithiyanpv/Accent-Conversion-from-native-to-non-native-accent.git"
  },
  {
    title: "Multimodal Code-Mixed Medical Query Summarization",
    image: project9,
    description: "Engineered a lightweight multimodal pipeline by combining Vision Transformer and DistilBART to summarize code-mixed Hindi-English medical queries from both textual and image inputs. Achieved a ROUGE score of 60.09, BLEU score of 36.20, and BERTScore of 0.9192, reflecting strong fluency and semantic alignment.",
    technologies: ["ViT", "DistilBART", "PyTorch", "torchvision", "PIL", "scikit-learn", "pandas"],
    githubLink: "https://github.com/Adithiyanpv/Multimodal-Code-Switching-Medical-Query-Summarization.git"
  },
  {
    title: "Advanced Chess Game Analytics Pipeline Using Apache Spark",
    image: project10,
    description: "Built a scalable pipeline using Apache Spark to analyze 10M+ chess games, revealing rare chess patterns and providing insights into game length, critical moves, optimal resignation moments, time control impacts, and opening move effectiveness, enhancing decision-making through data-driven analysis.",
    technologies: ["Apache Spark", "PySpark", "Python", "Matplotlib", "Pandas", "SQL", "Linux"],
    githubLink: "https://github.com/Adithiyanpv/Near-Real-Time-Chess-Analytics-Using-Apache-Spark.git"
  },

  {
    title: "Fake News Classification using XGBoost and CNN",
    image: project6, 
    description: "Developed a robust fake news detection system utilizing XGBoost and CNNs for both textual and video content, achieving 96% accuracy by integrating human insights with computational power to effectively identify misinformation across various media.",
    technologies: ["Python", "XGBoost", "CNN", "Text Analysis", "Video Analysis"],
    githubLink: "https://github.com/Adithiyanpv/FAKE-NEWS-CLASSIFICATION-VIDEO-AND-AUDIO-"
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
];



export const CONTACT = {
  phoneNo: "+91 9360105866",
  email: "adithiyan999@gmail.com",
};
