import React from "react";
import "./footer.css";

/* import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io"; */

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        See You soon
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li><a href="#services">Services</a></li> */}
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li><a href="#testimonals">Testimonials</a></li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <p className="footer-sentence">
        Ce site a été réalisé à l'aide de la librarie{" "}
        <a target="_blank" href="https://react.dev/">
          React
        </a>
      </p>
      <div className="header__socials">
        <a href="https://linkedin.com/in/ornellaborges" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/OrnellaBorges" target="_blank">
          {" "}
          <BsGithub />
        </a>
      </div>
      {/*         <div className="footer__socials">
            <a href="https://facebook.com"><FaFacebookF /></a>
            <a href="https://instagram.com"><FiInstagram /></a>
            <a href="https://twitter.com"><IoLogoTwitter /></a>
        </div> */}
      <div className="footer__copyright">
        <small> &copy; All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
