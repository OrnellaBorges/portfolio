import React from "react";
import "./about.css";
import ME1 from "../../assets/Ornella B_BD-1.jpg";
import ME2 from "../../assets/Ornella B_BD-4.jpg";
import ME3 from "../../assets/Ornella B_BD-3.jpg";

/* const galleryDroleData = [
  "Ornella B_BD-6.jpg",
  "Ornella B_BD-6.jpg",
  "Ornella B_BD-6.jpg",
  "Ornella B_BD-6.jpg",
]; */

const AboutGallery = () => {
  return (
    <ul id="aboutGallery" className="tata">
      {/*  MAPER LA LISTE  */}
      <li className="profil-card">
        <img className="profil-img" src={ME1} alt="me2" />
        <div className="profil-info">
          <p className="profil-sentence">Bonjour</p>
        </div>
      </li>
      <li className="profil-card">
        <img className="profil-img" src={ME3} alt="me2" />
        <div className="profil-info">
          <p className="profil-sentence">Hello</p>
        </div>
      </li>
      <li className="profil-card">
        <img className="profil-img" src={ME2} alt="me2" />
        <div className="profil-info">
          <p className="profil-sentence">Hola que tal?</p>
        </div>
      </li>
      <li className="profil-card">
        <img className="profil-img" src={ME1} alt="me2" />
        <div className="profil-info">
          <p className="profil-sentence">Amazing job!</p>
        </div>
      </li>
    </ul>
  );
};

export default AboutGallery;
