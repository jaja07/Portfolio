import education1 from '../img/Capture d’écran du 2024-04-06 12-04-59.png';
import education2 from '../img/ESIGELEC.png';
import project1 from "../img/rfid.png";
import project2 from "../img/Obesity.png";
import project3 from "../img/Capture d’écran du 2024-03-29 22-43-44.png";
import project4 from "../img/video_1.mp4";
import ortb from "../img/ORTB.jpg";
import salpetriere from "../img/salpetriere.jpg"
import cv from "./Jarfino_HOUNGBADJI_CV.pdf";


export const skills = [
  "Python", "C#", "Java","C", "NLP", "Azure", "FastAPI", "Git", "Flask", 
   "SQL", "PL/SQL", "ASP.NET", "Scikit Learn", "Hadoop", "Power BI","Talend",
   "Javascript", "React", "HTML", "CSS", "Bootstrap"
];

export const experiences = [
  {
    id: 0,
    img: ortb,
    role: "IT Service Assistant",
    company: "Office des Radio Diffusion du Bénin",
    date: "July 2020 - Sep 2023",
    desc: "Administration of the ORTB local network - Technical support, updating, maintenance and - hardware and software inventory - Fibre optic deployment",
    skills: [
      "Network service",
      "Maintenance",
    ],
    doc: "",
  },
  {
    id: 0,
    img: salpetriere,
    role: "Logistics officer - Assistance Publique – Hôpitaux de Paris (France)",
    company: "Hôpital Salpêtrière",
    date: "December 2023",
    desc: "Reception and sorting of linen (sheets, blankets, pillowcases, towels) after washing. Counting, recording and dispatching linen (sheets, blankets, pillowcases, towels) to delivery lorries.",
  },
  
];

export const education = [
  {
    id: 0,
    img: education2,
    grade: "ESIGELEC engineering diploma",
    school: "ESIGELEC Rouen",
    date: "Sep 2022 - Sep 2025",
    desc: "I am currently a second-year engineering student at ESIGELEC, specializing in Big Data for Digital Transformation. In this specialization, I am studying to become proficient in several key areas of the data domain including Data Science, Data Analysis, and Data Engineering. My academic journey focuses on harnessing the power of big data technologies to extract valuable insights, drive decision-making, and innovate within various industries. I am passionate about solving complex problems and leveraging data-driven strategies to achieve tangible results.",
  },
  {
    id: 1,
    img: education1,
    school: "Cycle Préparatoire Scientifique",
    date: "Sep 2020 - Sep 2022",
    desc: "Prior to my studies at ESIGELEC, I completed a two-year scientific preparatory program, where I developed a strong foundation in advanced mathematics, physics, and engineering sciences. This rigorous academic training prepared me for the complex and challenging curriculum of an engineering degree, emphasizing critical thinking, problem-solving skills, and a deep understanding of scientific principles. The preparatory course was instrumental in equipping me with the analytical skills necessary to excel in the fast-paced and technologically driven field of Big Data and Digital Transformation.",
    
  },
];

export const projects = [
  {
    id: 9,
    title: "RFID Machine Learning",
    date: "April 2024 - May 2024",
    description: " Predicting and verifying the contents of boxes as they move along conveyor belts",
    mediaType: "image",
    mediaUrl: project1,
    tags: [
      "Scikit Learn",
      "Python",
      "Numpy",
      "Pandas",
      "Matplotlib",
      "C#",
      "Flask",
      "ASP.NET",
      "Java sxript",
    ],
    category: "web app",
    github: "https://github.com/jaja07/Projet-S8",
    webapp: "",
  },
  {
    id: 0,
    title: "Obesity Level",
    date: "March 2024 - March 2024",
    description: "Estimation of obesity levels in individuals from the countries of Mexico, Peru and Colombia, based on their eating habits and physical condition.",
    mediaUrl: project2,
    tags: ["Scikit Learn", "Matplotlib", "Numpy", "Pandas"],
    category: "Machine Learning",
    github: "https://github.com/jaja07/Obesity_level",
    webapp: "",
  },
  {
    id: 1,
    title: "API for sales data",
    date: "March 2024",
    description: "Display of worldwide video game console sales data over several years.",
    mediaType: "image",
    mediaUrl: project3,
    tags: [
      "C#",
      "ASP.NET",
      "HTML",
      "CSS",
    ],
    category: "web app",
    github: "https://github.com/jaja07/API_Donnee_de_Ventes?tab=readme-ov-file",
    webapp: "",
  },
  {
    id: 2,
    title: "Robot project",
    date: "December 2023",
    description: "Two robots, a locomotive and a follower. The locomotive robot must follow a white line and stop in front of obstacles, while the follower follows the locomotive and adapts to its trajectory.",
    mediaType: "video",
    mediaUrl: project4,
    tags: [
      "C",
      "Microprocessor",
    ],
    category: "web app",
    github: "",
    webapp: "",
  },
];

export const Bio = {
  name: "Rishav Chanda",
  roles: [
    "Full Stack Developer",
    "Android Developer",
    "UI/UX Designer",
    "Programmer",
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/jaja07?tab=repositories",
  resume: cv,
  linkedin: "https://www.linkedin.com/in/jarfino-houngbadji-83b161266/",
  twitter: "https://twitter.com/JF79984043",
  insta: "https://www.instagram.com/jesuisjajaaa/",
};

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
