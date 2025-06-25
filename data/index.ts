export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Resume", link: "#resume" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Software Engineer @ Commure + Athelas",
    description:
      "Building FDA-approved medical devices and patient monitoring systems",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title:
      "Conversational in 6 languages, currently learning Portuguese and Cantonese",
    description: "🇺🇸 🇪🇸 🇬🇷 🇨🇳 🇭🇰 🇧🇷",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Python, Next.js, GCP, Kubernetes, PostgreSQL & More",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Exploring Applications of AI in Competitive Basketball 🏀",
    description: "Using AI to improve team performance and reduce injuries",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently pursuing MS in EE/CS at Chapman University",
    description: "Building the Future",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-8 bottom-8 md:w-48 w-32",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/chapman-athletics-logo.webp",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let's Build",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Speakeasy - AI-Powered Language Learning Platform",
    des: "Built a modern language learning platform that combines YouTube content with AI-powered features. Implemented interactive video transcripts, smart phrasebook for saving and reviewing content, and multi-language support. Uses Next.js 14, tRPC, PostgreSQL with Drizzle ORM, and integrates OpenAI and Google Cloud services for AI conversations and translations.",
    img: "/speakeasy2.png",
    iconLists: [
      "/next.svg",
      "/ts.svg",
      "/firebase.svg",
      "/cloud.svg",
      "/git.svg",
    ],
    link: "https://learnspeakeasy.com",
  },
  {
    id: 2,
    title: "The Provider's Coach Project",
    des: "Contracted to develop a Next.js web application for healthcare providers offering no-cost coaching services. Implemented Calendly integration for seamless appointment scheduling, responsive design, and SEO optimization. Built with TypeScript, Tailwind CSS, and deployed on Vercel.",
    img: "/pcp.png",
    iconLists: [
      "/next.svg",
      "/ts.svg",
      "/tail.svg",
      "/calendly.png",
      "/vercel_light.png",
    ],
    link: "https://providerscoachproject.org",
  },
  {
    id: 3,
    title: "Barkle - Daily Dog Breed Game",
    des: "Developed a Wordle-inspired daily dog breed guessing game using Next.js, tRPC, and TypeScript. Over 1,000 plays. Features include user authentication, daily challenges, leaderboards, and community-submitted content. Implemented SEO optimization and Google Analytics, growing the player base to over 300 users.",
    img: "/barkle.png",
    iconLists: [
      "/next.svg",
      "/ts.svg",
      "/tail.svg",
      "/vercel_light.png",
      "/git.svg",
    ],
    link: "https://barkle.vercel.app",
  },
  {
    id: 4,
    title: "Braille Display for STEM Education",
    des: "Collaborated with a team of 8 on a cost-effective Braille display to enhance STEM education for the visually impaired. Developed a Google Chrome extension that converts images to an 8x8 binary form for use on the Braille device. Implemented image processing techniques for accurate shape representation.",
    img: "/research.png",
    iconLists: ["/chrome.png", "/python.png", "/c.svg"],
    link: "https://etezad-lab.com/",
  },
  {
    id: 5,
    title: "Custom 3D-Printed Ankle Brace",
    des: "Led a team of 4 in prototyping and designing a customizable multi-material 3D-printed ankle brace. Presented the project as an invited speaker for Science on Tap, a public engagement event. Conducted material strength testing on 3D-printed composite materials using Instron Machine.",
    img: "/brace.png",
    iconLists: ["/c.svg", "/python.png", "/git.svg"],
    link: "https://blogs.chapman.edu/gci/2023/05/09/creating-a-customizable-multi-material-3d-printed-ankle-brace/",
  },
  {
    id: 6,
    title: "Medical PPE Design and Distribution",
    des: "Designed, manufactured, and distributed 900+ units of medical PPE including face shields, intubation boxes, and face mask clips to frontline healthcare workers in California, New York, and Washington State. Raised $3,000 on GoFundMe to support production and distribution costs.",
    img: "/PPE.png",
    iconLists: ["/c.svg", "/python.png"],
    link: "https://blogs.chapman.edu/community-relations/2020/06/02/students-faculty-3d-print-3000-face-shields-for-healthcare-workers/",
  },
];

export const companies = [
  {
    id: 1,
    name: "commure",
    img: "",
    nameImg: "/commure.jpeg",
  },
  {
    id: 2,
    name: "athelas",
    img: "",
    nameImg: "/athelas.png",
  },
  {
    id: 3,
    name: "chapman",
    img: "",
    nameImg: "/chapman.png",
  },
  {
    id: 4,
    name: "google cloud",
    img: "",
    nameImg: "/gcloud.webp",
  },
  {
    id: 5,
    name: "docker",
    img: "",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer Intern - Commure + Athelas",
    desc: "Developing scalable solutions for medical technology platforms with a focus on accessibility and user experience.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "MS in EE/CS Student - Chapman University",
    desc: "Advanced studies in AI, backend development, and distributed systems with focus on cross-cultural applications.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Graduate Student Researcher",
    desc: "Created braille display for STEM education for the visually impaired.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Full-Stack Developer",
    desc: "Contracted to build accessible user facing platforms and integration systems using Python, Next.js, and cloud technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/mdrivas",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/mattheos-drivas-803188276/",
  },
];
