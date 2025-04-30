
import GITHUBLOGO from '../assets/images/github-logo.png';
import MAILLOGO from '../assets/images/mail-logo.png';

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="footer_container">

                <div className='go_to_top_container' onClick={() => window.scrollTo({ top: (0, 0), behavior: "smooth"})}>
                    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' viewBox='0 0 24 24' >
                        <title></title>
                        <path fill="#fafafa" d="M17.707 10.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM17.707 17.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
                    </svg>
                </div>

                <div className='footer_links_container'>
                    <a href="https://github.com/FrancoBulotas" target="_blank" className="footer_link">
                        <img src={GITHUBLOGO} alt="" className="footer_img" />
                    </a>
                    <a href="mailto:francobulotas@gmail.com" target="_blank" className="footer_link">
                        <img src={MAILLOGO} alt=""  className="footer_img"/>
                    </a>
                </div>
                <p className="p-footer">FRANCO BULOTAS @2025</p>
            </div>
        </footer>   
    )
}

export default Footer;

