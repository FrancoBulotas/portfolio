
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import translations from '../lang';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("");
    const language = useSelector(state => state.language);
    const t = translations[language];

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let currentSection = "";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 100; 
                const sectionHeight = section.offsetHeight;
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute("id");
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="navbar">
            <ul className="navbar_list">
                {/* <li>
                    <a
                        href="#hero"
                        className={activeSection === "about" ? "active" : ""}
                    >
                        {t.navBar.home}
                    </a>
                </li> */}
                <li>
                    <a
                        href="#about"
                        className={activeSection === "about" ? "active" : ""}
                    >
                        {t.navBar.about}
                    </a>
                </li>
                <li>
                    <a
                        href="#projects"
                        className={activeSection === "projects" ? "active" : ""}
                    >
                        {t.navBar.projects}
                    </a>
                </li>
                <li>
                    <a
                        href="#contact"
                        className={activeSection === "contact" ? "active" : ""}
                    >
                        {t.navBar.contact}
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;