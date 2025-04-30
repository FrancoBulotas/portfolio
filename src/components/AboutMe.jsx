
import React, { useEffect, useRef, useState } from "react";

import { useSelector } from 'react-redux';
import translations from '../lang';

import USER from "../assets/images/foto-cv-circulo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

import JSLOGO from "../assets/images/js-logo.png";
import HTMLLOGO from "../assets/images/html-logo.png";
import REACTLOGO from "../assets/images/react-logo.png";
import CSSLOGO from "../assets/images/css-logo.png";
import MONGOLOGO from "../assets/images/mongo-logo.png";
import EXPRESSLOGO from "../assets/images/express-logo.png";
import NODELOGO from "../assets/images/node-logo.png";
import GITLOGO from "../assets/images/git-logo.png";
import PYTHONLOGO from "../assets/images/python-logo.png";
import CLOGO from "../assets/images/c-logo.png";

import GITHUBLOGO from '../assets/images/github-logo.png';

const AboutMe = () => {
    const aboutMeRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const language = useSelector(state => state.language);
    const t = translations[language];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 } // Se activa cuando el 20% del elemento es visible
        );

        if (aboutMeRef.current) {
            observer.observe(aboutMeRef.current);
        }

        return () => {
            if (aboutMeRef.current) {
                observer.unobserve(aboutMeRef.current);
            }
        };
    }, []);

    return (
        <section className="about-me" id="about" ref={aboutMeRef}>
            <div className="about-me_container">
                <div className="about-me_header">
                    <h2 className="about-me_title">
                        {t.aboutMe.title}<span className="about-me_highlight"></span>
                    </h2>
                </div>
                <div className={`about-me_content ${isVisible ? "visible" : ""}`}>
                    <div className="about-me_description">
                        <img src={USER} alt="imagen de usuario" className="user_img" />
                        {/* <FontAwesomeIcon icon={faCircleUser} className="user_img" /> */}
                        <p>
                            {t.aboutMe.description}
                        </p>
                        <a href="https://github.com/FrancoBulotas" target="_blank" className="footer_link github_link">
                            <img src={GITHUBLOGO} alt="" className="footer_img" />
                        </a>
                    </div>
                    <div className="about-me_skills">
                        <div className="skills_row">
                            <div className="about-me_skill first_skill">
                                <img src={JSLOGO} alt="JavaScript" />
                                <span>JAVASCRIPT</span>
                            </div>
                            <div className="about-me_skill second_skill">
                                <img src={HTMLLOGO} alt="HTML" />
                                <span>HTML</span>
                            </div>
                            <div className="about-me_skill third_skill">
                                <img src={CSSLOGO} alt="CSS" />
                                <span>CSS</span>
                            </div>
                        </div>
                        <div className="skills_row">
                            <div className="about-me_skill fourth_skill">
                                <img src={REACTLOGO} alt="React" />
                                <span>REACT</span>
                            </div>
                            <div className="about-me_skill fifth_skill">
                                <img src={NODELOGO} alt="JavaScript" />
                                <span>NODE.JS</span>
                            </div>
                            <div className="about-me_skill sixth_skill">
                                <img src={MONGOLOGO} alt="MongoDB" />
                                <span>MONGODB</span>
                            </div>
                            <div className="about-me_skill seventh_skill">
                                <img src={EXPRESSLOGO} alt="MongoDB" />
                                <span>EXPRESS.JS</span>
                            </div>
                        </div>
                        <div className="skills_row">
                            <div className="about-me_skill eighth_skill">
                                <img src={PYTHONLOGO} alt="CSS" />
                                <span>PYTHON</span>
                            </div>
                            <div className="about-me_skill ninth_skill">
                                <img src={CLOGO} alt="JavaScript" />
                                <span>C#</span>
                            </div>
                            <div className="about-me_skill tenth_skill">
                                <img src={GITLOGO} alt="Git" />
                                <span>GIT</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;