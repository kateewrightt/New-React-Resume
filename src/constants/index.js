import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  atlassian,
  qut,
  mbc,
  bielby,
  westpac,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "connect",
    title: "Connect",
  },
];

const services = [
  {
    title: "Web Computing",
    icon: web,
  },
  {
    title: "Software Development",
    icon: mobile,
  },
  {
    title: "Network Engineering",
    icon: backend,
  },
  {
    title: "IoT Innovations",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend SWE Intern",
    company_name: "Atlassian",
    icon: atlassian,
    iconBg: "#383E56",
    date: "Nov 2023 - Feb 2024",
    points: ["Starting Soon!"],
  },
  {
    title: "IT Undergraduate",
    company_name: "Bielby Holdings",
    icon: bielby,
    iconBg: "#E6DEDD",
    date: "April 2023 - Present",
    points: [
      "Successfully led a company-wide Active Directory (AD) to Azure Active Directory (AAD) migration project.",
      "Implemented InTune Device Management for enhanced device security and management.",
      "Provided proficient application support for Azure DevOps, ensuring smooth project collaboration.",
      "Conducted in-depth analysis of Power BI reports, extracting valuable insights for data-driven decision-making.",
      "Made significant contributions to Bielby Holdings' IT infrastructure, optimizing processes and enhancing efficiency.",
      "Developed and strengthened project management and technical support skills through this dynamic and challenging role.",
    ],
  },
  {
    title: "IT Support Officer",
    company_name: "Moreton Bay Colleges",
    icon: mbc,
    iconBg: "#383E56",
    date: "Dec 2021 - Nov 2022",
    points: [
      "Offered prompt and effective assistance to address a wide range of technical challenges encountered by the company's 1000+ staff and students.",
      "Played a key role in maintaining the operational efficiency and security standards for the college's diverse fleet of devices.",
      "Contributed to a seamless technology experience for the college community, fostering a productive learning and working environment.",
    ],
  },
  {
    title: "Computer Science Undergrad",
    company_name: "QUT",
    icon: qut,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Nov 2024",
    points: [
      "Led and contributed to various software development projects, showcasing proficiency in technologies such as React.js, Python, and Java.",
      "Collaborated with peers on diverse projects, ranging from web applications to software solutions, showcasing adaptability and strong teamwork skills.",
      "Designed and implemented innovative solutions to address real-world challenges, leveraging knowledge of algorithms, data structures, and software engineering principles.",
    ],
  },
  {
    title: "Young Tech Scholar",
    company_name: "Westpac",
    icon: westpac,
    iconBg: "#383E56",
    date: "Since Jan 2021",
    points: [
      "Selected as a Westpac Young Tech Scholar, a prestigious recognition in the field of technology and innovation.",
      "Engaged in the immersive 'Disruptive Leaders Program' held in Sydney, Australia, where scholars came together for a week of team-building exercises and inspiring speaker sessions.",
      "Undertook a captivating industry-led 'Challenge' during the program, collaborating with fellow scholars to develop innovative real-world solutions to address a roadblock faced by a prominent company.",
      "Gained valuable insights and enhanced confidence in my own abilities within the industry through this transformative scholarship experience.",
    ],
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
