import React, { useEffect, useState } from "react";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("");

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
                <li>
                    <a
                        href="#about"
                        className={activeSection === "about" ? "active" : ""}
                    >
                        Sobre Mi
                    </a>
                </li>
                <li>
                    <a
                        href="#projects"
                        className={activeSection === "projects" ? "active" : ""}
                    >
                        Proyectos
                    </a>
                </li>
                <li>
                    <a
                        href="#contact"
                        className={activeSection === "contact" ? "active" : ""}
                    >
                        Contacto
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;