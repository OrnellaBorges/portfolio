import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./cardsStyle/styleFlipCard.css";

const FlipCardContent = ({
  name,
  description,
  poste,
  date,
  stacks,
  id,
  image,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="ContainerCards">
      <div className="car-card">
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          {/* Front side */}
          <div className="card-front" onClick={handleClick}>
            <img src={image} alt="logo de la marque" />
          </div>
          {/* Back side */}
          <div className="card-back" onClick={handleClick}>
            <div className="card-back__content">
              <h2>{name}</h2>
              <p>{poste}</p>
              <small>{date}</small>
              <p className="flipCard-text">{description}</p>
            </div>

            <div className="stackContainer">
              <ul className="stackList">
                {/* condition ternaire */}

                {stacks && Array.isArray(stacks) && stacks.length > 0 ? (
                  stacks.map((stack) => (
                    <li className="stackList-element" key={`${id}-${stack}`}>
                      {stack}
                    </li>
                  ))
                ) : (
                  <p className="message">No stacks available</p>
                )}
              </ul>
            </div>
          </div>
        </ReactCardFlip>
      </div>
    </div>
  );
};

export default FlipCardContent;
