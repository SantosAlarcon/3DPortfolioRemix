import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import logo from "/LogoSantosAlarcon.svg";
import "../styles/Navbar.css";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [zIndex, setZIndex] = useState("z-auto");

    useEffect(() => {
        if (toggle) {
            document.body.style.overflowY = "hidden";
            document.body.style.overflowX = "hidden";
            setZIndex("z-50");
        } else {
            document.body.style.overflowY = "auto";
            document.body.style.overflowX = "auto";
            setTimeout(() => {
                setZIndex("z-auto");
            }, [1500]);
        }
    }, [toggle]);

    return (
        <header>
            <nav
                className={`${styles.paddingX} bg-navbar fixed top-0 z-20 flex w-full items-center py-5 backdrop-blur`}
                role="navigation"
            >
                <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
                    <Link
                        to="/"
                        className="flex items-center gap-2"
                        onClick={() => {
                            setActive("");
                            window.scrollTo(0, 0);
                        }}
                    >
                        <img
                            src={logo}
                            alt="logo"
                            className="h-9 w-9 object-contain"
                        />
                        <p className="flex cursor-pointer text-[18px] font-bold text-white">
                            Santos Alarcón Asensio
                        </p>
                    </Link>
                    <ul className="hidden list-none flex-row gap-10 sm:flex">
                        {navLinks.map((link) => (
                            <li
                                key={link.id}
                                className={`${
                                    active === link.title
                                        ? "text-white"
                                        : "text-secondary"
                                } cursor-pointer text-[18px] font-medium hover:text-white`}
                                onClick={() => setActive(link.title)}
                            >
                                <a href={`#${link.id}`}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-1 items-center justify-end sm:hidden">
                        <img
                            src={toggle ? close : menu}
                            loading="lazy"
                            alt="menu"
                            className="h-[28px] w-[28px] 
                        cursor-pointer object-contain transition"
                            onClick={() => setToggle(!toggle)}
                        />
                    </div>
                </div>
            </nav>
            <div
                className={`${!toggle ? "opacity-0" : "opacity-100"} fixed right-0 top-[4.5em] flex min-h-[100vh] min-w-[100%] overflow-hidden bg-[#000b] p-6 backdrop-blur transition ${zIndex} duration-300`}
            >
                <ul className="flex w-full list-none flex-col items-center justify-center gap-4">
                    {navLinks.map((link) => (
                        <li
                            id="mobile-menu-link"
                            key={link.id}
                            className={`${
                                active === link.title
                                    ? "text-white"
                                    : "text-secondary"
                            } mobileNavLink text-[3em] font-medium transition hover:scale-150 ${toggle ? "translate-x-0" : "translate-x-96"}`}
                            onClick={() => {
                                setActive(link.title);
                                setToggle(!toggle);
                            }}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
