import Navbar from "./components/main/Navbar";
import HomePage from './components/pages/homepage';
import AboutMe from './components/pages/aboutme';
import Projects from './components/pages/projects';
import ContactMe from './components/pages/contactme';
import Footer from "./components/main/Footer";

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <HomePage />
            <AboutMe />
            <Projects />
            <ContactMe />
            <Footer />
        </div>
    );
}

export default App;