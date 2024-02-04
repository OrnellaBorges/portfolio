import React from "react";
import FlipCardContent from "./Cards/FlipCardContent";
import "./test.css";

import imagePathSiplec from "../assets/siplec-backgroud.jpeg";
import imagePathTex from "../assets/tex-card.png";
import imagePathSarenza from "../assets/sarenza-card.jpeg";

const TestComponent = () => {
  const infosExperience = [
    {
      id: 1,
      name: "E.Leclerc",
      poste: "Modéliste 2D/3D",
      date: "2016-2020",
      description: `Chargée de concevoir les collections de
                    la marque Tissaia. Création des bases, mise en
                    place d'une bibliothèque afin d'optimiser la
                    conceptions des collections futurs. Conception
                    et mise au point sur Gerber
                    Accumark.`,
      stacks: ["Gerber", "Lectra", "Adobe", "Plm"],
      pathImage: imagePathSiplec,
    },
    {
      id: 2,
      name: "TexEurop",
      poste: "Modéliste 2D/3D",
      date: "2020-2022",
      description: `Modélisation 3D les collections pour
      plusieurs marques via CLO 3D. Mise au point
      des produits et intermédiaire technique direct
      entre les usines et les marques.`,
      stacks: ["Clo 3D", "Marvelous", "Lectra", "Adobe"],
      pathImage: imagePathTex,
    },
    {
      id: 2,
      name: "Sarenza",
      poste: "Intégratrice-Developpeuse",
      date: "2022-2023",
      description: `Modélisation 3D les collections pour
        plusieurs marques via CLO 3D. Mise au point
        des produits et intermédiaire technique direct
        entre les usines et les marques.`,
      stacks: ["HTML", "CSS/SASS", "React", "Redux"],
      pathImage: imagePathSarenza,
    },
  ];

  return (
    <section className="flipCard-Container">
      <FlipCardContent
        name={infosExperience[0].name}
        poste={infosExperience[0].poste}
        description={infosExperience[0].description}
        date={infosExperience[0].date}
        stacks={infosExperience[0].stacks}
        id={infosExperience[0].id}
        image={infosExperience[0].pathImage}
      />
      <FlipCardContent
        name={infosExperience[1].name}
        poste={infosExperience[1].poste}
        description={infosExperience[1].description}
        date={infosExperience[1].date}
        stacks={infosExperience[1].stacks}
        id={infosExperience[1].id}
        image={infosExperience[1].pathImage}
      />
      <FlipCardContent
        name={infosExperience[2].name}
        poste={infosExperience[2].poste}
        description={infosExperience[2].description}
        date={infosExperience[2].date}
        stacks={infosExperience[2].stacks}
        id={infosExperience[2].id}
        image={infosExperience[2].pathImage}
      />
    </section>
  );
};

export default TestComponent;
