import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 3 years of hands-on experience, I have honed my skills in front-end technology like React, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 3 years of professional experience, I have worked with a variety of technologies, including React, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Sep 2023 - Present ",
    role: "Software Developer",
    company: "Skillo Inc",
    description: `Implemented automated trading algorithms and models in Java, optimizing strategies and risk management for increased trading efficiency and profitability. Collaborated with traders to enhance performance and mitigate risks in volatile market conditions through strategic analysis and timely solutions.`,
    technologies: ["Java", "Bootstrap", "python", "MongoDB", "Git"],
  },
  {
    year: "Oct 2021 - Dec 2022",
    role: "Full Stack Developer",
    company: "Accenture",
    description: `Designed and developed user-centric web applications with seamless front-end and back-end integration, enhancing usability and performance through CSS and JavaScript frameworks like Node.js. Implemented robust database solutions and agile methodologies to ensure data integrity, scalability, and successful project outcomes through effective team collaboration.`,
    technologies: ["HTML", "CSS", "JavaScript", "mySQL", "PostgreSQL", "Node.js"],
  },
  {
    year: "Sep 2020 - Sep 2021",
    role: "Software Engineer Intern",
    company: "TRC tech",
    description: `Led responsive web application development using Python and Django, optimizing API performance and integrating third-party APIs for enhanced functionality and user engagement. Ensured robust code quality, security, and efficient deployment with Docker, fostering seamless project lifecycles and cross-functional collaboration.`,
    technologies: ["Python", "Django", "Docker", "REST API"],
  },
];

export const PROJECTS = [
  {
    title: "Amazon Clone ",
    image: project1,
    description:
      "Created a full-stack Amazon web application replica with React, featuring product listing, shopping cart, user authentication, and checkout functionality, utilizing User Authentication and Payment APIs.",
    technologies: ["HTML", "CSS", "React", "JavaScript", "Redux", "Firebase"],
  },
  {
    title: "Sentiment Analysis on Reddit Data using LSTM",
    image: project2,
    description:
      "Developed a Deep Learning model using Reddit data from Kaggle to analyze sentiment, discerning opinions, emotions, and attitudes expressed in 36,801 texts.",
    technologies: ["Deeplearning", "Conv1D", "MaxPooling"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Weather app",
    image: project4,
    description:
      "Created a weather app using Django, enabling users to check weather conditions across locations via integration with the OpenWeatherMap API.",
    technologies: ["HTML", "CSS", "Django", "Bootstrap"],
  },
];

export const CONTACT = {
  address: "7378 W lake sammamish pkwy",
  phoneNo: "+1 605-659-0302",
  email: "nagabhirunavya123@gmail.com",
};
