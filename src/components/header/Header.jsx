//import { styles } from './header.css' // CSS MODULE VERSION
import "./header.css";

// IMPORT COMPONENTS
import CTA from "./CTA";
import OrnellaMobile from "../../assets/Ornella-nb-mobile.jpg";
import Ornella from "../../assets/Ornella-nb.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header className="hero-header">
      <img className="hero-image-mobile" src={OrnellaMobile} alt="me" />
      <img className="hero-image-desktop" src={Ornella} alt="me" />

      <div className="hero-text">
        <h5>Hello I am</h5>
        <h1>Ornella Borges</h1>
        <h5 className="text-light">Fullstack Developer JS</h5>
        <div className="techno-title">
          <p>React</p>
          <div className="dot"></div>
          <p>NodeJs</p>
        </div>
        <small></small>
        <HeaderSocials />
        <CTA />
      </div>
    </header>
  );
};

export default Header;
