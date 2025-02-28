// Contains constant data for using in website
// ! Don't remove anything from here if not sure

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
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
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
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - Sep 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Senior Full-Stack Developer",
    company_name: "Web Peppers",
    icon: shopify,
    iconBg: "#383E56",
    date: "Sep 2022 - Oct 2023",
    points: [
      "Developed scalable and responsive web applications using Vue.js & Nuxt.js.",
      "Designed and implemented authentication & user roles using Firebase & laravel.",
      "Implemented headless CMS solutions(Sanify, Strapi) for content driven application",
      "Improved site performance by 40% by optimizing API calls and Frontend rendering",
      "Led Frontend architecture decisions, ensuring scalability and maintainability",
    ],
  },
  {
    title: "Senior Full-Stack Developer",
    company_name: "inVerita",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Present",
    points: [
      "Developed and maintained dynamic web applications using React, Vue and Next.js for high-traffic platforms.",
      "Built and optimized RESTful & GraphQL APIs with Node.js & Laravel to ensure seamless backend performance",
      "Integrated third-party APIs such as payment gateways, Google Map, and social logins",
      "Optimized database queries, improving application performance by 35%",
      "Built reusable UI compenents, improving development efficiency across projects",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "Working with Sergey was seamless. They delivered a high-quality website that exceeded our expectations and significantly improved our online presence.",
    name: "Sara Lee",
    designation: "",
    company: "",
    image: user1,
  },
  {
    testimonial:
      "Sergey is a true professional. Their expertise in web development helped us launch a site that has seen a substantial increase in traffic and engagement.",
    name: "Chris Brown",
    designation: "",
    company: "",
    image: user2,
  },
  {
    testimonial:
      "I was impressed by Sergey's attention to detail and ability to understand our unique needs. The final product was exactly what we envisioned.",
    name: "Bella Hepburn",
    designation: "",
    company: "",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "drinkag",
    description:
      "This website is a sleek and modern e-commerce platform for AG1, designed to provide an intuitive shopping experience. I developed a responsive front-end using React and Next.js, ensuring seamless navigation and fast load times. The UI/UX is optimized with smooth animations and interactive elements to enhance user engagement. Integrated secure payment processing and a subscription model, allowing users to easily manage purchases. The backend is powered by a headless CMS and API-driven architecture, ensuring scalability and flexibility for future updates.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "",
    live_site_link: "",
  },
  {
    name: "garitransfer",
    description:
      "This website is a sleek and modern e-commerce platform for AG1, designed to provide an intuitive shopping experience. I developed a responsive front-end using React and Next.js, ensuring seamless navigation and fast load times. The UI/UX is optimized with smooth animations and interactive elements to enhance user engagement. Integrated secure payment processing and a subscription model, allowing users to easily manage purchases. The backend is powered by a headless CMS and API-driven architecture, ensuring scalability and flexibility for future updates.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "",
    live_site_link: "",
  },
  {
    name: "Aspire Pink",
    description:
      "Aspire Pink is a stylish e-commerce store specializing in fashionable apparel, featuring a dreamy pastel aesthetic. The site offers a seamless shopping experience with easy navigation, secure checkout, and international currency support. With eye-catching visuals and a focus on trendy designs like the Grandeur Rosé™ Varsity Jacket, Aspire Pink caters to fashion-conscious customers looking for elegance and sophistication.With a user-friendly navigation menu, visitors can easily explore collections, shop for new arrivals, and read the latest fashion blogs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "syncfusion",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "",
    live_site_link: "",
  },
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "",
  },
  {
    name: "GitHub",
    icon: github,
    link: "",
  },
] as const;
