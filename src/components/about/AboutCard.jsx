import "./about.css";

//IMPORT ICONS FROM REACT_ICONS
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { GiBrain } from "react-icons/gi";
import { PiStudentFill } from "react-icons/pi";

//IMPORT COMPONENTS

const tabs = [
  {
    icon: <GiBrain className="about__icon" />,
    title: "Mindset",
    desc: "Beautyful personality of course",
  },
  {
    icon: <FaAward className="about__icon" />,
    title: "Experience",
    desc: "7+ Years Working",
  },
  {
    icon: <PiStudentFill className="about__icon" />,
    title: "Education",
    desc: "5+ Years Studing",
  },
];

const AboutCards = ({ handleChangeVisibilityAbout, indexAboutVisible }) => {
  return (
    <div className="about__content">
      <div className="about__cards">
        {tabs.map(({ icon, title, desc }, index) => (
          <article
            className={`about__card ${
              indexAboutVisible === index ? "active" : ""
            }`}
            onClick={() => handleChangeVisibilityAbout(index)}
            key={index}
          >
            {icon}
            <h5>{title}</h5>
            <small>{desc}</small>
          </article>
        ))}

        {/* <a className='link'>click here to know more</a> */}
      </div>
    </div>
  );
};

export default AboutCards;
