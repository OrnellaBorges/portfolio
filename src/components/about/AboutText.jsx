import "./about.css";

// IMPORT ICONS
import { GiDiploma } from "react-icons/gi";
//import {FaCubesStacked} from 'react-icons/fa'
import { LuPlane } from "react-icons/lu";
import { PiEyeLight } from "react-icons/pi";
import { PiEyeClosedLight } from "react-icons/pi";

//IMPORTATION IMAGES
import Shield from "../../assets/shield.png";

const AboutText = ({ indexAboutVisible }) => {
  return (
    <div>
      {indexAboutVisible === 0 && (
        <div className="mindset-content">
          <h2 className="content-title">MINDSET:</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            odit rem qui ad quia omnis eligendi nulla molestias modi aspernatur
            ipsum nam saepe esse, eos doloremque dolores animi quae sequi labore
            voluptates libero debitis. Aut, earum. Officiis assumenda
            recusandae, consequuntur nihil enim doloremque adipisci fugiat
            perspiciatis distinctio obcaecati nisi cupiditate at illo sunt et
            delectus numquam, consectetur est, explicabo hic. Eaque modi
            expedita iusto quasi eum aspernatur est, neque doloribus
            necessitatibus itaque dolores, consequuntur doloremque inventore
            molestias eius earum dignissimos aliquid rerum distinctio odio
            fugiat. Nulla repellat, corrupti fugiat a illum omnis explicabo
            molestiae at unde quod natus totam qui.
          </p>
        </div>
      )}
      {indexAboutVisible === 1 && (
        <>
          <h2 className="content-title">MY EXPERIENCE:</h2>
          {/* //mettre un slider de text et d'image*/}
          <ul className="experience content-text">
            <li className="items">
              <h4>Siplec E.Leclerc(Paris) 2016-2020 - Modéliste </h4>
              <p className="description">
                Chargée de concevoir des vêtements... collections...blalalalala
              </p>
              <div className="experience__cards">
                <ul className="stack__card">
                  <li>
                    <LuPlane />
                  </li>
                  <li>Gerber</li>
                  <li>Adobe suite</li>
                  {/* <li><a><PiEyeClosedLight /></a></li>
                              <li><a><PiEyeClosedLight /></a></li> */}
                </ul>
                <ul className=" travel__card ">
                  <li>
                    <LuPlane />{" "}
                  </li>
                  <li>India</li>
                  {/* <li><a><PiEyeClosedLight /></a></li>
                              <li><a><PiEyeClosedLight /></a></li> */}
                </ul>
              </div>

              {/* <p><a href="" className="link knowMore"> Know more</a></p> */}
            </li>
            <li className="items">
              <h4>Texeurop (Wambrechie) 2020-2023 - Modéliste 3D</h4>
              <p className="description">
                Chargée de concevoir des vêtements... collections...blalalalala
              </p>
              <div className="experience__cards">
                <ul className="stack__card">
                  <li>
                    <LuPlane />
                  </li>
                  <li>CLO3D</li>
                  <li>Marvelous Designer</li>
                  <li>Lectra</li>
                  <li>Adobe suite</li>
                  {/* <li><a><PiEyeClosedLight /></a></li>
                              <li><a><PiEyeClosedLight /></a></li> */}
                </ul>
                <ul className=" travel__card ">
                  <li>
                    <LuPlane />{" "}
                  </li>
                  <li>Bengladesh</li>
                  <li>Turkey</li>
                  {/* <li><a><PiEyeClosedLight /></a></li>
                              <li><a><PiEyeClosedLight /></a></li> */}
                </ul>
              </div>
            </li>
          </ul>
        </>
      )}
      {indexAboutVisible === 2 && (
        <>
          <h2 className="content-title">MY STUDIES:</h2>
          <ul className=" education content-text">
            <li className="education-items">
              {/*<div className="container-logo">
                                              <img className="educationLogo" src={Shield} alt="3wa Logo"/> 
                                          </div>
                      */}
              <p className="education-icons">
                <GiDiploma />
              </p>
              <p>3WA</p>
            </li>
            <li className="education-items">
              <p className="education-icons">
                <GiDiploma />
              </p>
              <p>BTS MMV</p>
            </li>
            <li className="education-items">
              <p className="education-icons">
                <GiDiploma />
              </p>
              <p>DMA</p>
            </li>
            <li className="education-items">
              <p className="education-icons">
                <GiDiploma />
              </p>
              <p>BAC L</p>
            </li>
          </ul>
        </>
      )}
      <div className="btn-container">
        <a href="#contact" className="btn btn-primary">
          Let&apos;s talk
        </a>
      </div>
    </div>
  );
};

export default AboutText;
