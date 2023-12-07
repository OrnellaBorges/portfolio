import { useState } from "react";

//IMPORT CSS
import "./about.css";

//IMPORT ICONS FROM REACT_ICONS
//import { FaAward } from "react-icons/fa";
//import { FiUsers } from "react-icons/fi";
//import { VscFolderLibrary } from "react-icons/vsc";

//IMPORT COMPONENTS
import AboutGallery from "./AboutGallery";
//import AboutGalleryDrole from './AboutGalleryDrole'
import AboutText from "./AboutText";
import AboutCards from "./AboutCard";

const About = () => {
    const [indexAboutVisible, setIndexAboutVisible] = useState(0);

    return (
        <section id="about" className="about__container">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="toto">
                <AboutGallery />
                <div className="titi">
                    <AboutCards
                        handleChangeVisibilityAbout={setIndexAboutVisible}
                        indexAboutVisible={indexAboutVisible}
                    />
                    <AboutText indexAboutVisible={indexAboutVisible} />
                </div>
            </div>
        </section>
    );
};

export default About;
