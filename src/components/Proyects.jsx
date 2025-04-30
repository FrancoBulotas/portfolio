
import { useSelector } from 'react-redux';
import translations from '../lang';

import PACUCOIMAGE from '../assets/images/collage-pacuco.png';
import TORNEOSIMAGE from '../assets/images/collage-torneos-atletismo.png';
import GITHUBLOGO from '../assets/images/github-logo.png';
import SPACE_SURVIVAL_IMAGE from '../assets/images/space-survival-image.png';
import DOWNLOAD_IMAGE from '../assets/images/download-image.png'; 

const Projects = () => {
    const language = useSelector(state => state.language);
    const t = translations[language];

    return (
        <section className="projects" id="projects">
            <div className="projects_container">
                <h2 className="projects_title">{t.projects.title}</h2>
                <div className="projects_list">
                    <div className="project_card project_left">
                        <h3 className="project_title mobile">{t.projects.project_1_title}</h3>
                        <a href="https://www.pacuco.com.ar" target="_blank">
                            <div className="project_image_container">
                                <img src={PACUCOIMAGE} alt="Pacuco" className="project_image project_image_left" />
                            </div>
                        </a>
                        <div className="project_info project_left_info">
                            <h3 className="project_title desktop">{t.projects.project_1_title}</h3>
                            <p className="project_description">{t.projects.description_1_project_1}</p>
                            <p className="project_description">{t.projects.description_2_project_1}</p>
                            <div className='project_links'>
                                <a href="https://www.pacuco.com.ar" target="_blank" className="project_link">www.pacuco.com.ar</a>
                                <div>
                                    <a href="https://github.com/FrancoBulotas/pacuco" target="_blank" className="project_link">
                                        <img src={GITHUBLOGO} alt="" className='proyect_img_git' />
                                        <span>GitHub</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="project_card project_right">
                        <h3 className="project_title mobile">{t.projects.project_2_title}</h3>
                        <a href="https://www.torneosatletismo.com.ar" target="_blank">
                            <div className="project_image_container">
                                <img src={TORNEOSIMAGE} alt="Torneos Atletismo" className="project_image project_image_right" />
                            </div>
                        </a>
                        <div className="project_info project_right_info">
                            <h3 className="project_title desktop">{t.projects.project_2_title}</h3>
                            <p className="project_description">{t.projects.description_1_project_2}</p>
                            <p className="project_description">{t.projects.description_2_project_2}</p>
                            <div className='project_links'>
                                <a href="https://www.torneosatletismo.com.ar" target="_blank" className="project_link">www.torneosatletismo.com.ar</a>
                            </div>
                        </div>
                    </div>

                    <div className="project_card project_left">
                        <h3 className="project_title mobile">{t.projects.project_3_title}</h3>
                        <a href="https://drive.google.com/drive/folders/1h0bH7eb69Hr7yhiX32mqFhI8nqxR8-So?usp=sharing" target="_blank">
                            <div className="project_image_container">
                                <img src={SPACE_SURVIVAL_IMAGE} alt="Pacuco" className="project_image project_image_left" />
                            </div>
                        </a>
                        <div className="project_info project_left_info">
                            <h3 className="project_title desktop">{t.projects.project_3_title}</h3>
                            <p className="project_description">{t.projects.description_1_project_3}</p>
                            <p className="project_description">{t.projects.description_2_project_3}</p>
                            <div className='project_links'>
                                <a href="https://github.com/FrancoBulotas/juegos_pygame" target="_blank" className="project_link">
                                    <img src={GITHUBLOGO} alt="" className='proyect_img_git' />
                                    <span>GitHub</span>
                                </a>

                                <a href="https://drive.google.com/drive/folders/1h0bH7eb69Hr7yhiX32mqFhI8nqxR8-So?usp=sharing" target="_blank" className="project_link">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 512 512" 
                                        className='proyect_svg_download'
                                        fill='#fff'
                                    >
                                        <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/>
                                    </svg>
                                    <span>{t.projects.span_download} (.exe)</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;