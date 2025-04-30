
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import translations from '../lang';

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadFull } from "tsparticles";

const Hero = () => {
    const language = useSelector(state => state.language);
    const t = translations[language];
    const [init, setInit] = useState(false);

    useEffect(() => {
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => {
        setInit(true);
      });
    }, []);

    return (
        <section className="hero" id="hero">
            <Particles
                className="hero_particles"
                id="tsparticles"
                init={init}
                options={{
                    background: { color: { value: "#0d0d12" } },
                    fpsLimit: 60,
                    interactivity: {
                        events: { onClick: { enable: false }, onHover: { enable: false } },
                        modes: {}
                    },
                    particles: {
                        color: { value: "#e94560" },
                        links: {
                            color: "#3a4252",
                            distance: 150,
                            enable: true,
                            opacity: 0.3,
                            width: 1
                        },
                        move: {
                            enable: true,
                            speed: 0.5,
                            direction: "none",
                            outModes: { default: "bounce" }
                        },
                        number: { value: 500, density: { enable: true, area: 800 } },
                        opacity: { value: 0.3 },
                        shape: { type: "none" },
                        size: { value: { min: 1, max: 3 } }
                    },
                    detectRetina: true
                }}
            />
            <div className="hero_content">
                <div className="hero_title">
                    {t.hero.title} <span className="hero_name">Franco</span>.
                </div>
                <div className="hero_subtitle">
                    {t.hero.subtitle}
                </div>
                <button className="btn btn-outline hero_btn" onClick={() => window.scrollTo({ top: document.getElementById("about").offsetTop, behavior: "smooth" })}>
                    {t.hero.button} <span className="hero_arrow">↓</span>
                </button>
            </div>
        </section>
    );
};

export default Hero;