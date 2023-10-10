import React from "react";
import "./about.css";
import ME1 from "../../assets/Ornella B_BD-1.jpg";
import ME2 from "../../assets/Ornella B_BD-4.jpg";
import ME3 from "../../assets/Ornella B_BD-3.jpg";
import SARENZA from "../../assets/sarenza.png";
import SARENZA2 from "../../assets/sarenza2.png";
import SARENZA3 from "../../assets/sarenza3.webp";
import SARENZA4 from "../../assets/sarenza4.jpg";
import Tex from "../../assets/tex.jpg";
import Tex2 from "../../assets/fashion.jpg";
import Video from "../../assets/video.mp4";
//import Video2 from "../../assets/video2.mp4";

/* const galleryDroleData = [
  "Ornella B_BD-6.jpg",
  "Ornella B_BD-6.jpg",
  "Ornella B_BD-6.jpg",
  "Ornella B_BD-6.jpg",
]; */

const AboutGallery = () => {
    return (
        <div className="galleryContainer">
            <ul id="aboutGallery" className="cardsGallery">
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

            {/*
            

            <ul className="cardsGallery sarenzaGallery">
                <li className="profil-card">
                    <img className="profil-img" src={SARENZA} alt="sarenza" />
                    <div className="profil-info">
                        <p className="profil-sentence">Sarenza</p>
                    </div>
                </li>
                <li className="profil-card">
                    <img className="profil-img" src={SARENZA2} alt="me2" />
                    <div className="profil-info">
                        <p className="profil-sentence">Hello</p>
                    </div>
                </li>
                <li className="profil-card">
                    <img className="profil-img" src={SARENZA3} alt="me2" />
                    <div className="profil-info">
                        <p className="profil-sentence">Hola que tal?</p>
                    </div>
                </li>
                <li className="profil-card">
                    <img className="profil-img" src={SARENZA4} alt="me2" />
                    <div className="profil-info">
                        <p className="profil-sentence">Amazing job!</p>
                    </div>
                </li>
            </ul>
            <ul className="texGallery cardsGallery">
                <li className="profil-card tex">
                    <img className="profil-img" src={Tex} alt="tex" />
                    <div className="profil-info">
                        <p className="profil-sentence">Texeurop</p>
                    </div>
                </li>
                <li className="profil-card">
                    <img className="profil-img" src={Tex2} alt="me2" />
                    <div className="profil-info">
                        <p className="profil-sentence">Digital Fashion</p>
                    </div>
                </li>
            </ul>
             
            <ul className="videoCard">
                <li className="video-container">
                    <video className="video" src={Video} autoPlay loop muted />
                </li>
            </ul>*/}
        </div>
    );
};

export default AboutGallery;
