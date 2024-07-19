import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaDocker,
  FaNodeJs,
  FaReact,
  FaGit,
  FaTrello,
} from "react-icons/fa";
import {
  SiNestjs,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
export const about = {
  title: "About me",
  description:
    "A Junior pursuing a degree in Software Engineer, driven by a passion for innovation and a strong work ethic, aiming to leverage my academic knowledge and practical skills. I am committed to contributing to the growth of an organization while aiming to advance to a leadership position within the next five years.",
  info: [
    {
      filedName: "Name",
      fieldValue: "Le Xuan Tho",
    },
    {
      filedName: "Phone",
      fieldValue: "(+86) 868 032 578",
    },
    {
      filedName: "Experience",
      fieldValue: "1+ Years",
    },
    {
      filedName: "City",
      fieldValue: "Ha Noi",
    },
    {
      filedName: "Email",
      fieldValue: "ltho281@gmail.com",
    },
    {
      filedName: "Language",
      fieldValue: "English (read & listen)",
    },
  ],
};

export const projects = {
  icon: "/assets/resume/badge.svg",
  title: "My Projects",
  description:
    "Throughout my journey as a software developer, I have undertaken a variety of projects that span across different domains and technologies. These projects range from creating dynamic web applications that enhance user engagement, to developing full-stack solutions that streamline e-commerce operations.",
  items: [
    {
      name: "Food delivery",
      position: "Full Stack Developer",
      duration: "07/2024 - Present",
    },
    {
      name: "Spotify clone",
      position: "Full Stack Developer",
      duration: "06 - 07/2024",
    },
    {
      name: "Todo App",
      position: "Front-end Developer",
      duration: "05 - 06/2024",
    },
    {
      name: "E-commerce",
      position: "Full Stack Developer",
      duration: "02 - 05/2024",
    },
  ],
};

export const educations = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "This is my education, where I have embarked on a journey through various specialized courses to deepen my understanding and expertise in software development.",
  items: [
    {
      institution: "Udemy",
      degree: "Mastering Data Structures & Algorithms Using C and C++",
      duration: "06/2024 - Present",
    },
    {
      institution: "Udemy",
      degree: "Understanding TypeScript",
      duration: "2024",
    },
    {
      institution: "Udemy",
      degree: "NodeJS - The complete Guide (MVC,REST APIs, GraphQL,...)",
      duration: "2023",
    },

    {
      institution: "Udemy",
      degree: "The Complete JavaScript Course 2024: From Zero to Expert!",
      duration: "2023",
    },
    {
      institution: "FPolytechnic",
      degree: "Front-end Developer",
      duration: "08/2022 - 12/2024",
    },
  ],
};

export const skills = {
  title: "My skills",
  description:
    "Here are my skills, meticulously honed to craft seamless and dynamic user experiences. Each skill represents a piece of the puzzle in my comprehensive understanding of web development.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiRedux />,
      name: "redux toolkit",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiNestjs />,
      name: "nest.js",
    },
    {
      icon: <FaDocker />,
      name: "docker",
    },
    {
      icon: <FaGit />,
      name: "git",
    },
    {
      icon: <FaTrello />,
      name: "trello",
    },
  ],
};
