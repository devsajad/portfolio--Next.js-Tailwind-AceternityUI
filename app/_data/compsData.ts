export const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Contact", link: "/contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "From Idea to Interface",
    description: "I start with layout, finish with love.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },

  {
    id: 4,
    title: "Hey, I'm Sajjad",
    description:
      "Welcome to my space.I'm exploring the Dev Universe and Floating in Code",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 max-md:-order-1",
    imgClassName: "absolute left-0 top-0 opacity-90 z-11",
    titleClassName: "justify-start",
    img: "/test.webp",
  },

  {
    id: 3,
    title: "My tech stack",
    description: "Self-Taught and Always Learning",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "Based in Mashhad, Iran.",
    description: "available for remote and none work worldwide",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 text-center",
    imgClassName: "",
    titleClassName: "justify-start items-center",
    img: "",
    spareImg: "",
  },
  {
    id: 5,
    title: "UI to server-side",
    description:
      "React & Next.js developer crafting fast, user-friendly experiences",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    // img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let’s Build Together",
    description: "Got an idea? Let’s launch it!",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center ",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const timelineData = [
  {
    year: "2020–2024",
    title: "Computer Engineering",
    badges: ["Bachelor degree", "University of Birjand"],
    description:
      "Studied fundamental and advanced topics in computer engineering with a strong focus on software development, data structures, and web technologies. Developed hands-on experience through academic projects, self-study, and freelance work during the degree.",
  },
  {
    year: "2024–2025",
    title: "Freelance Developer",
    badges: ["React", "Next.js", "Tailwind"],
    description:
      "Worked with various clients to design, build, and maintain responsive and accessible web interfaces. Specialized in building modern front-end applications using React, Tailwind CSS, and Next.js. Collaborated closely with designers and backend developers to deliver high-quality user experiences. Focused on performance optimization, component reusability, and clean, maintainable code.",
  },
];
