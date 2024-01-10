import React from "react";
import FlipCardContent from "./Cards/FlipCardContent";
import "./test.css";

const TestComponent = () => {
  const infosExperience = [
    {
      id: 1,
      name: "E.Leclerc",
      poste: "Modéliste 2D/3D",
      date: "2016-2020",
      description: `Chargée de concevoir les collections Basics de
                    la marque Tissaia. Création des bases et mise en
                    place d'une bibliothèque afin d'optimiser la
                    conceptions des collections futurs. Conception
                    et mise au point des produits sur Gerber
                    Accumark.`,
      stacks: ["Gerber", "Lectra", "Adobe", "Plm"],
    },
  ];

  return (
    <section className="flipCard-Container">
      <FlipCardContent
        name={infosExperience[0].name}
        poste={infosExperience[0].poste}
        description={infosExperience[0].description}
        date={infosExperience[0].date}
        stack={infosExperience[0].stacks}
        id={infosExperience[0].id}
      />
    </section>
  );
};

export default TestComponent;
