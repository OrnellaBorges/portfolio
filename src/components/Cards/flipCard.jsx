import ReactCardFlip from 'react-card-flip';

const FlipCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => {
      setIsFlipped(!isFlipped);
    };
  
    return (
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="vertical"
      >
        <div className="front">
          <h1>This is the front card</h1>
          <button onClick={handleClick}>Flip</button>
        </div>
        <div className="back">
          <h1>This is the back card</h1>
          <button onClick={handleClick}>Flip</button>
        </div>
      </ReactCardFlip>
    );
  };
  
  export default FlipCard;