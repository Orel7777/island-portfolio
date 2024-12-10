import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },

  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },

  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "תעצים את הכושר שלך",
    description:
      "גלו פלטפורמת כושר מודרנית שנועדה להניע ולהכווין משתמשים במסע הכושר שלהם. נבנתה באמצעות React, TypeScript, ו-TailwindCSS.",
    link: "https://empower-your-fitness-nvlf.vercel.app/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "הטבע הפתוח",
    description:
      "חוו את יופיו של הטבע באמצעות פלטפורמת רשת מרתקת המציגה מקומות מדהימים ברחבי העולם. נבנתה באמצעות React ו-TailwindCSS.",
    link: "https://outdoor-exploration-ten.vercel.app/",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "אוראל בוקריס - האתר הרשמי",
    description:
      "גלו תיק עבודות דינמי ומתקדם המציג פרויקטים אינטראקטיביים מבוססי 3D וטכנולוגיות חדישות כמו React, Next.js ו-TypeScript. מיועד למי שמחפש פתרונות מותאמים אישית בפיתוח אתרים ואפליקציות.",
    link: "https://orel-bukris-portfolio.vercel.app/",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "עיצוב אינטראקטיבי 3D",
    description:
      "פרויקט אינטראקטיבי המציג אלמנטים תלת-ממדיים מרהיבים המשלבים טכנולוגיה מתקדמת ועיצוב מודרני. חוויה ייחודית שנבנתה עם דגש על דינמיות וחדשנות",
    link: "https://3-d-example1-orel-bukris.vercel.app/",
  },
];
