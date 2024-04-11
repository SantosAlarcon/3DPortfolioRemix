import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    express,
    tailwind,
    nodejs,
    python,
    mysql,
    mongodb,
    bootstrap,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    lavelada3,
    portfolio,
    bookmarker,
    iphone15pro
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "Sobre mí",
    },
    {
        id: "works",
        title: "Proyectos",
    },
    {
        id: "contact",
        title: "Contacto",
    },
];

const services = [
    {
        title: "Diseñador Web",
        icon: web,
    },
    {
        title: "Desarrollador de React",
        icon: mobile,
    },
    {
        title: "Desarrollador Backend",
        icon: backend,
    },
];

const tech_front = [
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
        name: "Bootstrap",
        icon: bootstrap,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
];

const tech_back = [
    {
        name: "Express JS",
        icon: express,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Git",
        icon: git,
    },
    {
        name: "MySQL",
        icon: mysql,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "La Velada del Año 3",
        description: `Mi versión de la 'landing page' de "La Velada del Año III" de Ibai Llanos, actualizada con los últimos datos, 100% responsive y optimizada.`,
        tags: [
            {
                name: "React",
                color: "react",
            },
            {
                name: "Tailwind CSS",
                color: "tailwind",
            },
        ],
        image: lavelada3,
        source_code_link: "https://github.com/SantosAlarcon/LaVelada3",
        live_code_link: "https://santosalarcon.github.io/LaVelada3/",
    },
    {
        name: "Mi portfolio",
        description:
            "Este es mi portfolio personal donde me doy a conocer a las empresas y donde muestro mis aptitudes como desarrollador, así como mis proyectos que he ido desarrollando en mi carrera.",
        tags: [
            {
                name: "React",
                color: "react",
            },
            {
                name: "Tailwind CSS",
                color: "tailwind",
            },
            {
                name: "Framer Motion",
                color: "framer-motion",
            },
            {
                name: "Three JS",
                color: "three-js",
            },
        ],
        image: portfolio,
        source_code_link: "https://github.com/SantosAlarcon/3DPortfolio",
        live_code_link: "https://www.santosalarcon.es",
    },
    {
        name: "Bookmarker",
        description:
            "Este es un gestor de marcadores donde el usuario puede gestionar marcadores y carpetas online.",
        tags: [
            {
                name: "React",
                color: "react",
            },
            {
                name: "SASS",
                color: "sass",
            },
            {
                name: "Framer Motion",
                color: "framer-motion",
            },
            {
                name: "NextJS",
                color: "next-js",
            },
            {
                name: "Supabase",
                color: "supabase",
            },
        ],
        image: bookmarker,
        source_code_link: "https://github.com/SantosAlarcon/bookmarker",
        live_code_link: "https://bookmarker-rho.vercel.app",
    },
    {
        name: "iPhone 15 Pro Clone",
        description:
            "Esta es una recreación de la página del iPhone 15 Pro con animación 3D y animaciones de scroll.",
        tags: [
            {
                name: "React",
                color: "react",
            },
            {
                name: "GSAP",
                color: "gsap",
            },
            {
                name: "Tailwind CSS",
                color: "tailwind",
            },
        ],
        image: iphone15pro,
        source_code_link: "https://github.com/SantosAlarcon/iphone15-clone",
        live_code_link: "https://iphone-15-pro-clone.netlify.app/",
    },
];

export { services, tech_front, tech_back, experiences, testimonials, projects };
