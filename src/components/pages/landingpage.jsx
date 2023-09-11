
import HomePage from './homepage';
import AboutMe from './aboutme';
import Projects from './projects';
import ContactMe from './contactme';

const LandingPage = () => {
    return (
        <div className="LandingPage">
            <HomePage />
            <AboutMe />
            <Projects />
            <ContactMe />
        </div>
    );
}

export default LandingPage;
