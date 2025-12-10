import { Links, Scripts, ScrollRestoration } from "@remix-run/react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Contact from "./components/Contact";
import { StarsCanvas } from "./components/canvas";
import "~/index.css";

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="es">
			<head>
				<meta charSet="UTF-8" />
				<title>Santos Alarcón - Desarrollador Web</title>
				<link rel="icon" type="image/webp" href="/LogoSantosAlarcon.webp" />
				<link rel="canonical" href="https://www.santosalarcon.es" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="robots" content="index, follow" />
				<meta name="title" content="Santos Alarcón - Desarrollador Web" />
				<meta
					property="description"
					content="Portfolio Web de Santos Alarcón, desarrollador Web"
				/>
				<meta
					name="description"
					content="Portfolio Web de Santos Alarcón, desarrollador Web"
				/>
				<meta
					name="keywords"
					content="santos alarcon, desarrollador web, desarrollador web castilla la mancha, desarrollador web ciudad real, portfolio, desarrollador frontend, desarrollador React, desarrollador full-stack"
				/>
				<meta
					property="og:title"
					content="Santos Alarcón - Desarrollador Web"
				/>
				<meta
					property="og:description"
					content="Portfolio Web de Santos Alarcón, desarrollador Web"
				/>
				<meta
					property="og:image"
					content="https://www.santosalarcon.es/LogoTransparente.webp"
				/>
				<meta property="og:url" content="https://www.santosalarcon.es" />
				<meta property="og:type" content="website" />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return (
		<div className="relative bg-primary">
			<div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
				<Navbar />
				<Hero />
			</div>
			<About />
			<Tech />
			<Works />
			<div className="relative z-0">
				<Contact />
				<StarsCanvas />
			</div>
			<Footer />
		</div>
	);
}
