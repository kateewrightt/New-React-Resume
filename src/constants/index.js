import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  java,
  html,
  css,
  reactjs,
  sql,
  python,
  nodejs,
  Csharp,
  git,
  figma,
  docker,
  meta,
  atlassian,
  qut,
  mbc,
  bielby,
  westpac,
  TaskMaster,
  ReactResume,
  DVDHub,
  aws,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Journey",
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
    name: "Java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "C#",
    icon: Csharp,
  },
  {
    name: "AWS",
    icon: aws,
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
    title: "Software Engineering Intern (FE)",
    company_name: "Atlassian",
    icon: atlassian,
    iconBg: "#383E56",
    date: "Nov 2023 - Feb 2024",
    points: [
      "Led a project to visualise Jira project data through a force-directed graph, focusing on optimising user interaction and the meaningfulness of the displayed data.",
      "Participated in developing the Work Suggestions feature in Jira to improve user experience and refine user flow, employing feature flags for phased rollout, impacting millions of users.",
      "Actively engaged in enhancing the Jira website based on user feedback, with a focus on accessibility improvements.",
      "Developed front-end components using JavaScript, TypeScript, and React, contributing to the project’s scalable architecture.",
      "Conducted code reviews and refactored team members' code to improve efficiency and testing.",
      "Contributed to Confluence documentation for team knowledge sharing."
    ],
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
    name: "This Website!",
    description:
      "Javascript web app utilizing React to showcase my skills, experience, and accomplishments in an interactive and visually appealing online resume format.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: ReactResume,
    source_code_link: "https://github.com/kateewrightt/New-React-Resume",
  },
  {
    name: "Task Master",
    description:
      "C# Application that organizes tasks efficiently through intelligent task sequencing and resource optimization. ",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "Terminal App",
        color: "green-text-gradient",
      },
    ],
    image: TaskMaster,
    source_code_link: "https://github.com/kateewrightt/TaskMaster",
  },

  {
    name: "DVD Hub",
    description:
      "C# Application that manages a movie collection, allowing users to add, remove, search, and compare movies, while providing details and statistics about the collection.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "Terminal App",
        color: "green-text-gradient",
      },
    ],
    image: DVDHub,
    source_code_link: "https://github.com/kateewrightt/DVDHub",
  },
];

export { services, technologies, experiences, projects };
