
import HomePage from './homepage';
import AboutMe from './aboutme';
import Projects from './projects';
import ContactMe from './contactme';
import Footer from "../main/Footer";

const LandingPage = () => {
    return (
        <div className="LandingPage">
            <HomePage />
            <AboutMe />
            <Projects />
            <ContactMe />
            <Footer />
        </div>
    );
}

export default LandingPage;