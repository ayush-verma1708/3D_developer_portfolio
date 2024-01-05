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
  starbucks,
  tesla,
  shopify,
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
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Django Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    title: "Video Editing Intern",
    company_name: "Study Room",
    icon: starbucks,
    iconBg: "#383E56",
    date: "September 2021 - December 2021",
    points: [
      "Edited tutoring videos with precision and creativity.",
      "Implemented effective cuts, transitions, and visual enhancements.",
      "Ensured seamless integration of graphics and supplementary materials.",
    ],
  },
  {
    title: "Student Developer Intern",
    company_name: "Prospeer",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "November 2022 – February 2023",
    points: [
      "As an SDE intern at Prospeer, developed and implemented new features for the company’s website and web applications using technologies such as HTML, CSS, JavaScript, and Django.",
      "Assisted in the development of landing pages, forms, and marketing campaigns.",
      "Gained hands-on experience in web development and worked with a working professiona",
    ],
  },
  {
    title: "Student Developer Intern ",
    company_name: "BigDream Infoservices Pvt. ltd",
    icon: shopify,
    iconBg: "#383E56",
    date: "June 2023 - August 2023",
    points: [
      "As an enthusiastic front-end developer, I had the privilege of joining BigDream Infoservices Pvt. Ltd, where I played a vital role in the development of the company’s Lead Management System (LMS)",
      "Leveraging my expertise in front-end development, I contributed to creating a highly intuitive and user-friendly interface for the LMS.",
      "Within this dynamic role, I collaborated closely with a talented team of professionals to translate design concepts into interactive and responsive web applications.",
    ],
  },
  {
    title: "Freelance Developer",
    company_name: "The Meraki Store",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "October 2023 - November 2023",
    points: [
      "Designed a visually appealing portfolio website to showcase the work, incorporating elegant animations and interactive elements to engage visitors effectively",
      "Optimized the website for search engines, leading to increased visibility and attracting potential clients.",
      "Implemented responsive design techniques, ensuring the website functions seamlessly on desktops, tablets, and smartphones",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "He evaluates the needs in a professional manner and creates wonderous digital content.",
    name: "Mrinali Srivastava",
    designation: "HR",
    company: "Study Room",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ayush does.",
    name: "Vaishali",
    designation: "CEO",
    company: "The Meraki Store",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      " His capacity to swiftly grasp new concepts and adapt to evolving challenges is truly commendable.",
    name: "Rishab Chillar",
    designation: "CEO",
    company: "Prospeer",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Buddy Finder",
    description:
      "The Django-powered Buddy Finder website connects users with shared interests, promoting friendship and social connections. Users can search, connect, and plan activities with like-minded individuals, fostering a vibrant community.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/ayush-verma1708/BuddyFinder",
  },
  {
    name: "Talk-It-Out",
    description:
      "It is an online bot on a fully functional website on which you can vent out on the bot. Like a three am friend. It even connects you to our discord channel and a whatsapp group if more help is needed",
    tags: [
      {
        name: "Web Development",
        color: "blue-text-gradient",
      },
      {
        name: "Ai ChatBot",
        color: "green-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/ayush-verma1708/Talk-it-Out",
  },
  {
    name: "Roll-A-Ball",
    description:
      "Roll a Ball is a captivating 3D puzzle game for PC, where players control a ball through mazes, collect objects, and tackle challenging levels, offering enjoyable gameplay for all.",
    tags: [
      {
        name: "Game Development",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/ayush-verma1708/rolling-ball",
  },
];

export { services, technologies, experiences, testimonials, projects };
