import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./cardsStyle/styleFlipCard.css";

const FlipCardContent = ({ name, description, poste, date, stacks, id }) => {
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
            <img
              src="https://i.ibb.co/b22kSx7/marek-pospisil-o-UBjd22g-F6w-unsplash.jpg"
              alt="orange"
            />
          </div>
          {/* Back side */}
          <div className="card-back" onClick={handleClick}>
            <h2>{name}</h2>
            <p>{poste}</p>
            <small>{date}</small>
            <p className="flipCard-text">{description}</p>
            <ul className="stackList">
              {/* condition ternaire */}
              {stacks && Array.isArray(stacks) && stacks.length > 0 ? (
                stacks.map((stack) => (
                  <li className="stackList-element" key={`${id}-${stack}`}>
                    {stack}
                  </li>
                ))
              ) : (
                <li className="message">No stacks available</li>
              )}
            </ul>
          </div>
        </ReactCardFlip>
      </div>
    </div>
  );
};

export default FlipCardContent;
