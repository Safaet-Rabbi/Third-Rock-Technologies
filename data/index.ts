export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Features", link: "#features" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "We prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "We overlap 4 hours according to USA Time zone.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },

  {
    id: 3,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 4,
    title: "Our tech stack",
    description:
      "We utilize the latest technologies to deliver exceptional solutions.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
    skills: [
      "TypeScript",
      "Next.JS",
      "Swift",
      "Swift UI",
      "Firebase",
      "Prisma",
      "MongoDB",
      "PostGreSQL",
      "mySQL",
    ],
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
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
    title: "AIBuddy Inc. Chat AI Bot, AIBot, AI Buddy",
    des: "AIBuddy Inc. iOS app is your personal AI assistant, designed to boost productivity and provide intelligent solutions on the go.",
    img: "/AIBuddy.png",
    iconLists: ["/swift.svg", "/firebase.svg", "/openai.svg", "/coredata.png"],
    link: "https://apps.apple.com/us/app/aibuddy-inc/id6446788161",
  },
  {
    id: 2,
    title: "Todo and Everything App",
    des: "Todo and Everything is an all-in-one iOS app for seamless task management and productivity tracking.",
    img: "/todo.png",
    iconLists: ["/swift.svg", "/firebase.svg", "/coredata.png"],
    link: "https://apps.apple.com/za/app/todo-and-everything/id6443719490",
  },
  {
    id: 3,
    title: "Shadhin Music iOS App",
    des: "Shadhin Music is an iOS app offering unlimited access to Bangladeshi songs, playlists, and podcasts.",
    img: "/shadhin.png",
    iconLists: ["/api-mobile-program.svg", "/uikit.svg", "/swift.svg"],
    link: "https://apps.apple.com/us/app/shadhin-music/id1481808365?platform=iphone",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "CEO, Anderson Tech Solutions",
  },
  {
    quote:
      "Working with Third Rock Technology has been an absolute pleasure. Their professionalism, attention to detail, and innovative approach exceeded our expectations. They truly understand the needs of their clients and deliver solutions that make a real impact on business growth.",
    name: "Musharof Chy",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "We’ve been consistently impressed with the quality of service provided by [Your Company Name]. Their proactive communication, creative solutions, and technical know-how have been instrumental in transforming our business processes. Outstanding work!",
    name: "Emily Carter",
    title: "Marketing Manager, BrightWave Digital",
  },
  {
    quote:
      "The expertise and dedication demonstrated by Third Rock Technology are truly commendable. They not only meet deadlines but also bring creative and practical solutions to every project. A pleasure to collaborate with such a professional team!",
    name: "Sarah Thompson",
    title: "CTO, Innovatech Solutions",
  },
  {
    quote:
      "Partnering with Third Rock Technology has been a game-changer. Their commitment to delivering scalable and efficient solutions has empowered our business with robust IT infrastructure and exceptional support. A truly reliable team to work with!",
    name: "David Morales",
    title: "Project Manager, FutureSoft",
  },
];

export const companies = [
  {
    id: 1,
    name: "swift",
    title: "Swift UI",
    img: "/swift.svg",
  },
  {
    id: 2,
    name: "firebase",
    title: "Firebase",
    img: "/firebase.svg",
  },
  {
    id: 3,
    name: "postgresql",
    title: "PostgreSQL",
    img: "/postgresql.svg",
  },
  {
    id: 4,
    name: "stream",
    title: "mySQL",
    img: "/mysql.png",
  },
  {
    id: 5,
    name: "Next.JS",
    title: "Next.JS",
    img: "/next.svg",
  },
  {
    id: 6,
    name: "TypeScript",
    title: "TypeScript",
    img: "/typescript.svg",
  },
  {
    id: 7,
    name: "Prisma",
    title: "Prisma",
    img: "/prisma.svg",
  },
  {
    id: 8,
    name: "MongoDB",
    title: "MongoDB",
    img: "/mongodb.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "High Quality Design",
    desc: "Premium, visually appealing, and user-friendly interfaces to enhance user engagement.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Next.js 15 (Latest)",
    desc: "Built with the most up-to-date version of Next.js for optimal performance and modern features.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Crafted for Startups",
    desc: "Tailored solutions designed to meet the unique needs of emerging businesses.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Fully Customizable",
    desc: " Offers complete flexibility to tailor features, design, and functionality to your unique business needs.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 5,
    title: "Modern iOS Apps with SwiftUI",
    desc: "Modern iOS apps with SwiftUI focus on creating intuitive, visually appealing, and highly responsive user interfaces using a declarative syntax, enabling faster development and seamless integration with Apple's ecosystem.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
