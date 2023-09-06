import React from "react";
import "./skills.css";

// import Icons

import reactLogo from "../../assets/react.svg";
//import clo3DLogo from '../../assets/clo3D.svg'

import { BsPatchCheckFill } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { SiAdobeindesign } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

//import {SiAdobephotoshop} from'react-icons/si'
//import {SiAdobephotoshop} from'react-icons/si'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skill I have</h5>
      <h2>My Skills stack</h2>
      <div className=" container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developpement</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <div className="techno-title-container">
                <AiFillHtml5 className="experience__details-icon" />
                <h4>HTML</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__detail">
              <div className="techno-title-container">
                <FaCss3Alt className="experience__details-icon" />
                <h4>CSS</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__detail">
              <div className="techno-title-container">
                <SiJavascript className="experience__details-icon" />
                <h4>Javascript</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__detail">
              <div className="techno-title-container">
                {" "}
                <FaBootstrap className="experience__details-icon" />
                <h4>Bootstrap</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__detail">
              <div className="techno-title-container">
                <SiTailwindcss className="experience__details-icon" />
                <h4>Tailwind</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__detail">
              <div className="experience-blocText">
                <a
                  className="experience-logoStack"
                  href="https://react.dev"
                  target="_blank"
                >
                  <img
                    src={reactLogo}
                    className="logoSkills react"
                    alt="React logo"
                  />
                </a>
                <h4>React</h4>
                <small className="text-light"></small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Developpement</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <div className="techno-title-container">
                <FaNodeJs className="experience__details-icon" />
                <h4>Node JS</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__detail">
              <div className="techno-title-container">
                <BsFiletypeSql className="experience__details-icon" />
                <h4>MySQL</h4>
                <small className="text-light"></small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__frontend">
          <h3>OTHER SKILLS STACK</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <div className="techno-title-container">
                <BsPatchCheckFill className="experience__details-icon" />
                <h4>CLO 3D</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__detail">
              <div className="techno-title-container">
                <BsPatchCheckFill className="experience__details-icon" />

                <h4>Gerber</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__detail">
              <div className="techno-title-container">
                <BsPatchCheckFill className="experience__details-icon" />
                <h4>Marvelous Designer</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__detail">
              <div className="techno-title-container">
                <SiAdobephotoshop className="experience__details-icon" />

                <h4>Photoshop</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__detail">
              <div className="techno-title-container">
                <SiAdobeindesign className="experience__details-icon" />
                <h4>Indesign</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__detail">
              <div className="techno-title-container">
                <SiAdobeillustrator className="experience__details-icon" />

                <h4>Illustrator</h4>
                <small className="text-light"></small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
