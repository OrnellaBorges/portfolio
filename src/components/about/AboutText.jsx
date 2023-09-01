import "./about.css";

// IMPORT ICONS
import { GiDiploma } from "react-icons/gi";
import { BsStackOverflow } from "react-icons/bs";
import { LuPlane } from "react-icons/lu";
//import { PiEyeLight } from "react-icons/pi";
//import { PiEyeClosedLight } from "react-icons/pi";

//IMPORTATION IMAGES
import Shield from "../../assets/shield.png";

const AboutText = ({ indexAboutVisible }) => {
  return (
    <div>
      {indexAboutVisible === 0 && (
        <div className="mindset-content">
          <h2 className="content-title">MINDSET:</h2>
          <p>
            Hello moi c'est Ornella, bienvenue sur mon espace de présentation.
            Ancienne Modéliste dans le secteur du retail mode j'ai découvert le
            métier de Dévelopeuse Frontend il y a plus de 6 ans et depuis, plus
            d'un an j'ai sauté le pas et c'est devenu mon nouveau métier. J'aime
            beaucoup ce nouveau projet de ma vie professionnelle, il ressemble
            fortement à mon ancien métier et en plus de ça on en apprend tous
            les jours. Je suis curieuse, engagée, j'aime entreprendre et
            apprendre. Je fourmille d'idées constamment. Je suis passionée et je
            me plais dans le métier de Dévelopeuse Fullstack car il est complet,
            à la fois technique et créatif. Vous êtes ici sur ma version 1 de
            mon portfolio n'hésitez pas à repasser pour voir son évolution.
            Bonne visite et à bientot!
          </p>
          <br />
          <small>Ornella :)</small>
        </div>
      )}
      {indexAboutVisible === 1 && (
        <>
          <h2 className="content-title">MY EXPERIENCE:</h2>
          {/* //mettre un slider de text et d'image*/}
          <ul className="experience content-text">
            <li className="items">
              <h4>Sarenza (Paris) 2022-2023 - Intégratrice</h4>
              <p className="description">
                J'ai eu la chance de d'élaborer des nouvelles pages pour
                Sarenza. Cela pouvait aller de contenus exclusifs comme les
                fêtes de fin d'année, les soldes ou encore de collaborations
                entre Sarenza et les grandes marques.Certaines pages pouvaient
                comporter des animations léchées afin de rendre dynamique et
                attractive l'expérience utilisateur.
              </p>
              <small className="trad">
                I had the chance to develop new pages for Sarenza. This could
                range from exclusive content like end-of-year celebrations,
                sales or even collaborations between Sarenza and major brands.
                Some pages possible feature polished animations to make it
                dynamic and attractive user experience.
              </small>
              <div className="experience__cards">
                <ul className="stack__card">
                  <li>
                    <BsStackOverflow />
                  </li>
                  <li>HTML 5</li>
                  <li>CSS 3</li>
                  <li>Jquery</li>
                  {/* <li><a><PiEyeClosedLight /></a></li>
                                    <li><a><PiEyeClosedLight /></a></li> */}
                </ul>
                <ul className="stack__card">
                  <li>
                    <BsStackOverflow />
                  </li>
                  <li>Sass</li>
                  <li>React js</li>
                  <li>Redux</li>
                  <li>Css module</li>
                  {/* <li><a><PiEyeClosedLight /></a></li>
                                    <li><a><PiEyeClosedLight /></a></li> */}
                </ul>
              </div>
            </li>
            <li className="items">
              <h4>Texeurop (Wambrechie) 2020-2022 - Modéliste 3D</h4>
              <p className="description">
                Chargée de concevoir des collections pour plusieurs marques via
                l'outil CLO 3D. Voyage au Bengladesh et en Turquie afin de
                former les confrères en usine sur les techniques et les
                exigences du modélisme Français. Mise au point des produits et
                intermédiaire technique direct entre les usines et les marques.
              </p>
              <small className="trad">
                In charge to designing collections for several brands via the
                CLO 3 D3d tool. Trip to Bangladesh and Turkey to train
                colleagues in factory on the techniques and requirements of
                French modeling. Product development and direct technical
                intermediary between factories and brands.
              </small>
              <div className="experience__cards">
                <ul className="stack__card">
                  <li>
                    <BsStackOverflow />
                  </li>
                  <li>CLO3D</li>
                  <li>Marvelous Designer</li>
                  <li>Lectra</li>
                  <li>Adobe</li>
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
            <li className="items">
              <h4>Siplec E.Leclerc(Paris) 2016-2020 - Modéliste </h4>
              <p className="description">
                Chargée de concevoir les collections Basics de la marque
                Tissaia. Création des bases et mise en place d'une bibliothèque
                afin d'optimiser la conceptions des collections futurs.
                Conception et mise au point des produits sur Gerber Accumark.
              </p>
              <small className="trad">
                In charge to designing the brand’s Basics collections for
                Tisaia. Creation of the bases and implementation of a library to
                optimize the design of future collections. Design and product
                development on Gerber Accumark.
              </small>

              <div className="experience__cards">
                <ul className="stack__card">
                  <li>
                    <BsStackOverflow />
                  </li>
                  <li>Gerber</li>
                  <li>Adobe</li>
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
              <small>2022</small>
            </li>
            <li className="education-items">
              <p className="education-icons">
                <GiDiploma />
              </p>
              <p>BTS MMV</p>
              <small>2016</small>
            </li>
            <li className="education-items">
              <p className="education-icons">
                <GiDiploma />
              </p>
              <p>DMA</p>
              <small>2014</small>
            </li>
            <li className="education-items">
              <p className="education-icons">
                <GiDiploma />
              </p>
              <p>MANAA</p>
              <small>2012</small>
            </li>
            <li className="education-items">
              <p className="education-icons">
                <GiDiploma />
              </p>
              <p>BAC L</p>
              <small>2010</small>
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
