export interface ProjectDetail {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: {
    name: string;
    description: string;
    icon: string; // icon key (mapped to a real icon in the UI)
  }[];
  color: string; // accent color for the project
}

export const projects: ProjectDetail[] = [
  {
    slug: "realitech",
    title: "RealiTech",
    description:
      "A real estate web application project featuring property listings, AI buyer guidance, fraud detection, and chatbot integration.",
    tags: ["React", "Vite", "Tailwind CSS", "Firebase"],
    image: "/images/realitech.svg",
    liveUrl: "https://um-realitech-hackestate-1ed69.web.app/",
    githubUrl: "https://github.com/joohhhnnnny/um-realitech-frontend-realestate",
    overview:
      "RealiTech is an innovative real estate platform designed to revolutionize the property buying experience. By integrating cutting-edge AI technologies with a seamless user interface, the application empowers buyers to make informed decisions while protecting them from fraudulent listings. The platform serves as a comprehensive hub for property discovery, evaluation, and purchase guidance.",
    problem:
      "The traditional real estate market is plagued with information asymmetry, where buyers often struggle to verify property legitimacy, assess fair pricing, and navigate the complex purchasing process. Fraudulent listings waste time and money, while the lack of personalized guidance leaves many first-time buyers feeling overwhelmed and uncertain about their decisions.",
    solution:
      "RealiTech addresses these challenges by deploying an AI-powered ecosystem that includes intelligent buyer guidance systems, real-time fraud detection algorithms, and an interactive chatbot assistant. The platform aggregates verified property data, provides AI-driven price analysis, and offers step-by-step guidance throughout the buying journey, creating a trustworthy and efficient marketplace.",
    features: [
      "AI-powered buyer guidance with personalized property recommendations",
      "Real-time fraud detection system for property listing verification",
      "Interactive chatbot for instant buyer assistance and FAQs",
      "Advanced property search with smart filters and location mapping",
      "Responsive and modern UI for seamless cross-device experience",
      "Firebase authentication and real-time database integration",
    ],
    techStack: [
      { name: "React", description: "Frontend UI library for building interactive interfaces", icon: "react" },
      { name: "Vite", description: "Next-generation frontend build tool for faster development", icon: "vite" },
      { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development", icon: "tailwind" },
      { name: "Firebase", description: "Backend-as-a-service for auth, database, and hosting", icon: "firebase" },
    ],
    color: "#3B82F6",
  },
  {
    slug: "human-face-detector",
    title: "Human Face Detector",
    description:
      "A python computer vision project that aims to detect and highlight human faces in real-time using MobileNetv2 and YOLOv8s models.",
    tags: ["Python", "YOLOv8s", "MobileNetv2"],
    image: "/images/face.svg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/joohhhnnnny/project2",
    overview:
      "The Human Face Detector is a sophisticated computer vision application that leverages state-of-the-art deep learning models to detect and highlight human faces in real-time video streams. By combining the lightweight efficiency of MobileNetv2 with the powerful detection capabilities of YOLOv8s, the system achieves high accuracy while maintaining real-time performance across various hardware configurations.",
    problem:
      "Face detection in uncontrolled environments presents significant challenges including varying lighting conditions, partial occlusions, diverse angles, and the need for real-time processing. Traditional face detection methods often fail under these conditions or require expensive hardware to maintain acceptable frame rates, limiting their practical applications in security, accessibility, and interactive systems.",
    solution:
      "This project implements a dual-model approach combining MobileNetv2's efficient feature extraction with YOLOv8s's robust object detection capabilities. The hybrid architecture allows the system to maintain high detection accuracy across challenging scenarios while operating at real-time speeds on standard hardware. The solution includes optimized inference pipelines and adaptive processing strategies.",
    features: [
      "Real-time face detection with bounding box visualization",
      "Dual-model architecture for improved accuracy and speed",
      "Support for multiple face detection in single frames",
      "Configurable confidence thresholds and detection parameters",
      "Performance benchmarking across different hardware setups",
      "Support for both webcam input and video file processing",
    ],
    techStack: [
      { name: "Python", description: "Primary programming language for ML development", icon: "python" },
      { name: "YOLOv8s", description: "State-of-the-art object detection model", icon: "yolo" },
      { name: "MobileNetv2", description: "Lightweight CNN for efficient feature extraction", icon: "mobilenet" },
      { name: "OpenCV", description: "Computer vision library for image processing", icon: "opencv" },
    ],
    color: "#06B6D4",
  },
  {
    slug: "fluppy-bert",
    title: "Fluppy Bert",
    description:
      "A Flutter-based 2D physics game that lets players control a bird character as it navigates obstacles using real-world physics principles.",
    tags: ["Physics Game", "Dart", "Flutter"],
    image: "/images/fluppybert.svg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/joohhhnnnny/project3",
    overview:
      "Fluppy Bert is an engaging 2D physics-based game built with Flutter that challenges players to navigate a bird character through dynamically generated obstacles. The game applies real-world physics principles including gravity, velocity, and collision mechanics to create an authentic and challenging gameplay experience. Its cross-platform nature allows players to enjoy the game across mobile and web platforms.",
    problem:
      "Many mobile games lack educational value and fail to demonstrate real physics concepts in an engaging way. Additionally, cross-platform game development traditionally requires separate codebases for different platforms, increasing development time and maintenance complexity. There's a gap for games that are both entertaining and subtly educational about physics concepts.",
    solution:
      "Fluppy Bert bridges this gap by implementing accurate physics simulation within a fun, addictive gameplay loop. Built entirely in Flutter with Dart, the game achieves true cross-platform compatibility from a single codebase. The physics engine accurately models gravity, thrust, and collision detection, giving players an intuitive understanding of these concepts through gameplay.",
    features: [
      "Real-world physics simulation with gravity and velocity mechanics",
      "Procedurally generated obstacles for endless replayability",
      "Smooth 60fps animations with Flutter's rendering engine",
      "Score tracking with local high score persistence",
      "Cross-platform support for iOS, Android, and web",
      "Intuitive tap-to-fly controls with responsive physics feedback",
    ],
    techStack: [
      { name: "Flutter", description: "Cross-platform UI toolkit for mobile and web", icon: "flutter" },
      { name: "Dart", description: "Client-optimized language for fast apps", icon: "dart" },
      { name: "Physics Engine", description: "Custom 2D physics simulation system", icon: "physics" },
      { name: "Flame", description: "Lightweight game engine for Flutter", icon: "flame" },
    ],
    color: "#EC4899",
  },
  {
    slug: "alien-care-autoshop",
    title: "Alien Care Autoshop",
    description:
      "A Fullstack web application for managing an auto repair shop, featuring customer management, appointment scheduling, inventory tracking, and invoicing.",
    tags: ["Typescript", "Laravel", "PostgreSQL"],
    image: "/images/aliencare.svg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/joohhhnnnny/project3",
    overview:
      "Alien Care Autoshop is a comprehensive full-stack web application designed to streamline and digitize auto repair shop operations. The system provides an integrated platform for managing customers, scheduling appointments, tracking inventory, generating invoices, and monitoring shop performance. Built with modern web technologies, it offers a robust and scalable solution for automotive service businesses of all sizes.",
    problem:
      "Many auto repair shops still rely on paper-based systems or fragmented software solutions for their daily operations. This leads to scheduling conflicts, lost customer records, inventory discrepancies, and billing errors. The lack of a unified system causes inefficiency, poor customer experience, and missed revenue opportunities due to inadequate tracking and follow-up capabilities.",
    solution:
      "Alien Care Autoshop provides a unified, digital-first solution that connects all aspects of auto shop management into a single, intuitive platform. The TypeScript frontend ensures type-safe, reliable UI interactions while Laravel's robust backend handles complex business logic and data relationships. PostgreSQL powers the data layer with reliable ACID compliance for financial and inventory accuracy.",
    features: [
      "Customer relationship management with complete service history",
      "Smart appointment scheduling with conflict detection",
      "Real-time inventory tracking with low-stock alerts",
      "Automated invoice generation with line-item detail",
      "Dashboard analytics for revenue and performance metrics",
      "Role-based access control for staff management",
    ],
    techStack: [
      { name: "TypeScript", description: "Type-safe JavaScript for robust frontend development", icon: "typescript" },
      { name: "Laravel", description: "PHP framework for elegant backend development", icon: "laravel" },
      { name: "PostgreSQL", description: "Advanced relational database for reliable data storage", icon: "postgresql" },
      { name: "Tailwind CSS", description: "Utility-first CSS for rapid UI styling", icon: "tailwind" },
    ],
    color: "#F59E0B",
  },
  {
    slug: "shs-management-system",
    title: "Senior High School Management System",
    description:
      "A web-based application designed to streamline the management of senior high school operations, including student records, class schedules, and grading.",
    tags: ["Vanilla JS", "PHP", "MySQL"],
    image: "/images/iscp.svg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/joohhhnnnny/project3",
    overview:
      "The Senior High School Management System is a purpose-built web application that digitalizes and simplifies the complex administrative processes of senior high school education. From student enrollment and record-keeping to class scheduling and grade management, the system provides educators and administrators with powerful tools to efficiently manage their institution's academic operations.",
    problem:
      "Senior high school administrators face enormous challenges in managing vast amounts of student data, coordinating complex class schedules across multiple tracks and strands, and maintaining accurate grading records. Manual processes are error-prone, time-consuming, and make data retrieval difficult. The specialized requirements of senior high school education, with its track-based curriculum, add additional complexity that generic school management systems fail to address.",
    solution:
      "This management system is specifically tailored for the senior high school context, incorporating track and strand-based curriculum management directly into its architecture. Using reliable, proven technologies — Vanilla JavaScript for a responsive frontend, PHP for server-side processing, and MySQL for structured data management — the system delivers a robust, accessible solution that requires minimal infrastructure while handling complex academic workflows with precision.",
    features: [
      "Student information system with comprehensive record management",
      "Track and strand-based class scheduling engine",
      "Automated grade computation with multiple grading components",
      "Teacher portal for attendance and grade submission",
      "Administrative dashboard with enrollment statistics",
      "Report generation for transcripts and academic records",
    ],
    techStack: [
      { name: "Vanilla JavaScript", description: "Native JS for lightweight, fast frontend interactions", icon: "javascript" },
      { name: "PHP", description: "Server-side scripting for backend logic and API", icon: "php" },
      { name: "MySQL", description: "Relational database for structured data management", icon: "mysql" },
      { name: "Bootstrap", description: "CSS framework for responsive design components", icon: "bootstrap" },
    ],
    color: "#6B7280",
  },
];
