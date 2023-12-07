import React from "react";
import "./portfolio.css";
//import { projets } from "../../data/projectData.js";

import PortfolioCards from "./PortfolioCards";
import Section from "../containers/Section";

import SASS from "../../assets/Sass.png";
import B4Y from "../../assets/beer.png";
import FoodHero from "../../assets/fh.png";
import CoachMe from "../../assets/coachMe.png";
import HeaderSection from "../header/HeaderSection";

const projets = [
    {
        id: 1,
        image: SASS,
        title: "Saas",
        github: "https://github.com/OrnellaBorges",
        status: "In progress",
    },
    {
        id: 2,
        image: B4Y,
        title: "Beer4You",
        github: "https://github.com/OrnellaBorges",
        status: "In progress",
    },
    {
        id: 3,
        image: FoodHero,
        title: "FoodHero",
        github: "https://github.com/OrnellaBorges",
        status: "In progress",
    },
    {
        id: 4,
        image: CoachMe,
        title: "CoachMe",
        github: "https://github.com/OrnellaBorges",
        status: "In progress",
    },
];

const Portfolio = () => {
    return (
        <Section id="portfolio">
            <HeaderSection
                firstTitle="My Recent Work"
                secondTitle="Portfolio"
            />
            <ul id="ul-container">
                {projets.map((projet, index) => (
                    <PortfolioCards
                        key={index}
                        src={projet.image}
                        status="In Progress"
                        title={projet.title}
                    />
                ))}
            </ul>

            {/* <div className="container portfolio__container">
                    {data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <small>Refacto en cours</small>

                                <div className="portfolio__item-cta">
                                    <a href={github} className="btn">
                                        Github
                                    </a>
                                    <a
                                        href="#contact"
                                        className="btn btn-primary"
                                    >
                                        Let&apos;s talk
                                    </a>
                                </div>
                            </article>
                        );
                    })}
                </div> */}
        </Section>
    );
};

export default Portfolio;
