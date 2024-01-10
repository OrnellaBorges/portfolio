const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <div className="flip-card-container">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div
          className="front"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h1> This is the front card </h1>
        </div>
        <div
          className="back"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h1> This is the back card </h1>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default FlipCard;
