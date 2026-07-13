interface NavLink {
	id: string;
	title: string;
}

interface Service {
	title: string;
	icon: string;
}

interface Tech {
	name: string;
	icon: string;
}

interface Experience {
	title: string;
	company_name: string;
	icon: string;
	iconBg: string;
	date: string;
	points: string[];
}

interface Testimonial {
	testimonial: string;
	name: string;
	designation: string;
	company: string;
	image: string;
}

interface Tag {
	name: string;
	color: string;
}

interface Project {
	name: string;
	description: string;
	tags: Tag[];
	image: string;
	source_code_link: string;
	live_code_link: string;
}

import {
	astro,
	backend,
	bookmarker,
	bootstrap,
	css,
	// docker,
	eventosmanga,
	express,
	// figma,
	git,
	guianeovim,
	html,
	iphone15pro,
	javascript,
	lavelada3,
	meta,
	mobile,
	mongodb,
	mysql,
	nextjs,
	nextkeep,
    quotify,
	nodejs,
	portfolio,
	python,
	reactjs,
	shopify,
	starbucks,
	tailwind,
	tesla,
	typescript,
	web,
} from "../assets";

export const navLinks: NavLink[] = [
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

const services: Service[] = [
	{
		title: "Diseño Web",
		icon: web,
	},
	{
		title: "Desarrollo con React",
		icon: mobile,
	},
	{
		title: "Desarrollo Frontend",
		icon: backend,
	},
];

const tech_front: Tech[] = [
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
	{
		name: "Astro",
		icon: astro,
	},
	{
		name: "NextJS",
		icon: nextjs,
	},
];

const tech_back: Tech[] = [
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

const experiences: Experience[] = [
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

const testimonials: Testimonial[] = [
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

const projects: Project[] = [
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
				name: "Motion",
				color: "motion",
			},
			{
				name: "Three JS",
				color: "three-js",
			},
		],
		image: portfolio,
		source_code_link: "https://github.com/SantosAlarcon/3DPortfolioRemix",
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
				name: "Motion",
				color: "motion",
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
	{
		name: "Next Keep",
		description:
			"Este es un gestor de notas donde el usuario puede gestionar notas online, haciendo uso del lenguaje de marcado Markdown.",
		tags: [
			{
				name: "React",
				color: "react",
			},
			{
				name: "Motion",
				color: "motion",
			},
			{
				name: "NextJS",
				color: "next-js",
			},
			{
				name: "Appwrite",
				color: "appwrite",
			},
		],
		image: nextkeep,
		source_code_link: "https://github.com/SantosAlarcon/next-keep",
		live_code_link: "https://next-keep.netlify.app",
	},
	{
		name: "Eventos Manga",
		description:
			"Página de eventos de manga y anime en España donde el usuario puede buscar eventos y ver información detallada sobre ellos.",
		tags: [
			{
				name: "Astro",
				color: "astro",
			},
			{
				name: "MDX",
				color: "mdx",
			},
			{
				name: "React",
				color: "react",
			},
		],
		image: eventosmanga,
		source_code_link: "https://github.com/SantosAlarcon/eventosmanga",
		live_code_link: "https://www.eventosmanga.es",
	},
	{
		name: "Guía Neovim",
		description:
			"Sitio web que enseña el uso de Neovim para usuarios novatos, abarcando lo más básico hasta lo más avanzado",
		tags: [
			{
				name: "Astro",
				color: "astro",
			},
			{
				name: "MDX",
				color: "mdx",
			},
		],
		image: guianeovim,
		source_code_link: "https://github.com/SantosAlarcon/guia-neovim",
		live_code_link: "https://www.guia-neovim.es",
	},
    {
        name: "Quotify",
        description: "Generador de citas/frases célebres que se pueden exportar a imágenes para compartirlas en redes sociales",
        tags: [
            {
                name: "React",
                color: "react"
            },
            {
                name: "Takumi",
                color: "takumi"
            },
            {
                name: "Waku",
                color: "waku"
            },
        ],
        image: quotify,
        source_code_link: "https://www.github.com/SantosAlarcon/Quotify",
        live_code_link: "https://quotify-pearl.vercel.app",
    }
];

export { experiences, projects, services, tech_back, tech_front, testimonials };
