// turns est un tableau qu'on reçois pas la props
export default function GameBoard({ onSelectSquare, board }) {
    /* const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // fontion qui met a jour de state de maniere IMUTABLE !
  const handleSelectSquare = (rowIndex, colIndex) => {
    //console.log("rowIndex", rowIndex);
    //console.log("colIndex", colIndex);

    setGameBoard((prevGameBoard) => {
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    });
    onSelectSquare(); // cette fonctionest executé dans la function qui est passé en prop qui en realité contient la fonction dans App handleSelectSquare
  }; */

    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex} className="btn-game">
                                <button
                                    onClick={() =>
                                        onSelectSquare(rowIndex, colIndex)
                                    }
                                    className="btn"
                                    disabled={playerSymbol !== null}
                                >
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}
