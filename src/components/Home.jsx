
import AboutMe from './AboutMe.jsx'
import Proyects from './Proyects.jsx'
import NavBar from './NavBar.jsx'
import ContactMe from './ContactMe.jsx'

const Home = () => {
    return(
        <div className='below_hero'>
            <NavBar />
            <AboutMe />
            <Proyects />
            <ContactMe />
        </div>
    )
}

export default Home;