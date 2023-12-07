import { useState } from "react";
import Player from "./Player";
import Log from "./Log";
import GameBoard from "./Gameboard";
import GameOver from "./GameOver";
import { WINNING_COMBINATIONS } from "./TicTacToe-data/winning-combinations";

import "./style.css";
import HeaderTicTacToe from "./HeaderTicTacToe";

const PLAYERS = {
    X: "Player 1",
    O: "Player 2",
};

// Structure du tableau initiale pour faire nos cases
const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

//ici une function d'aide qui
function deriveActivePlayer(gameTurns) {
    let currentPlayer = "X"; // le player est initialisé a X

    if (gameTurns.length > 0 && gameTurns[0].player === "X") {
        currentPlayer = "O"; // mise a jour de la variable current player par "O" si le tableau est supérieur a 0 ET prevTurns[0].player === 'X'
    }

    return currentPlayer;
}

function deriveGameBoard(gameTurns) {
    // ce bloc de logique permet de determiner et mettre a our le gameboard
    let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])]; // ici on stock dans la variable le plan initiale du jeu
    console.log("deriveGameBoard", gameBoard);
    for (const turn of gameTurns) {
        const { square, player } = turn; // ici on reçois le symbol du player
        const { row, col } = square; // ici les coordonnées de la case

        gameBoard[row][col] = player;
    }
    return gameBoard;
}

function deriveWinner(gameBoard, players) {
    //Ce Bloc de logique est chargé de determiner qui est le gagnant

    let winner = null; // ici on déclare la variable winner qui a départ est à null
    //Il faut verifier a chaque tour si il y a un gagnant en parcourant le tableau des Wining
    /*  console.log("gameboard", gameboard);
    console.log("player", player); */
    for (const combination of WINNING_COMBINATIONS) {
        console.log("deriveWinner", gameBoard);
        const firstSquareSymbol =
            gameBoard[combination[0].row][combination[0].column];
        const secondSquareSymbol =
            gameBoard[combination[1].row][combination[1].column];
        const thirdSquareSymbol =
            gameBoard[combination[2].row][combination[2].column];
        console.log("firstSquareSymbol", firstSquareSymbol);
        console.log("secondSquareSymbol", secondSquareSymbol);
        console.log("thirdSquareSymbol", thirdSquareSymbol);
        console.log("deriveWinner", gameBoard);

        // on verifi si les symboles sont egaux en comparant a chaque tour avec chaque combinaison
        if (
            firstSquareSymbol &&
            firstSquareSymbol === secondSquareSymbol &&
            firstSquareSymbol === thirdSquareSymbol
        ) {
            winner = players[firstSquareSymbol]; // on réaffecte winner avec la valeur de firstSquareSymbol
        }
        return winner;
    }
}

export default function TicTacToe() {
    const [players, setPlayers] = useState(PLAYERS);
    const [gameTurns, setGameTurns] = useState([]);
    //const [hasWiner, setHasWinner] = useState(false);

    // soulever l'etat pour le transmettre dans les composants enfants
    //const [activePlayer, setActivePlayer] = useState("X");

    // POUR ETRE PLUS LISIBLE ON A DEPORTER LES FONCTION EN HAUT DU COMPOSANT ET PON LES APPEL ICI
    const activePlayer = deriveActivePlayer(gameTurns);
    const gameBoard = deriveGameBoard(gameTurns);
    const winner = deriveWinner(gameBoard, players);
    const hasDraw = gameTurns.length === 9 && !winner;

    function handleSelectSquare(rowIndex, colIndex) {
        //cette fonction permet de verifier le symbole du player
        //setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));

        // 81 => 83 setGameTurn est une fonction de mise a jour de l'etat de manière IMMUABLE pour ne pas fusionner les differents etat
        setGameTurns((prevTurns) => {
            //on prend la valeur précedente de gameTurn []
            const currentPlayer = deriveActivePlayer(prevTurns); // le player est initialisé a X

            /* if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O"; // mise a jour de la variable current player par "O" si le tableau est supérieur a 0 ET prevTurns[0].player === 'X'
      } */

            //ici on fait une copie du tableau (imutable)
            // updatedTurn sera un nouveau tableau avec un objet qui contien les infos du player et de la case
            const updatedTurns = [
                {
                    square: { row: rowIndex, col: colIndex },
                    player: currentPlayer,
                },
                ...prevTurns,
            ];
            return updatedTurns;
        });
    }

    function handleRestart() {
        setGameTurns([]);
    }

    //comprend pas
    function handlePlayerNameChange(symbol, newName) {
        setPlayers((prevPlayers) => {
            return {
                ...prevPlayers,
                [symbol]: newName,
            };
        });
    }
    return (
        <main className="body">
            <HeaderTicTacToe />
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player
                        initialName={PLAYERS.X}
                        symbol="X"
                        isActive={activePlayer === "X"}
                    />
                    <Player
                        initialName={PLAYERS.O}
                        symbol="O"
                        isActive={activePlayer === "O"}
                        onChangeName={handlePlayerNameChange}
                    />
                </ol>

                {(winner || hasDraw) && (
                    <GameOver winner={winner} onRestart={handleRestart} />
                )}

                <GameBoard
                    onSelectSquare={handleSelectSquare}
                    board={gameBoard}
                />
            </div>
            <Log turns={gameTurns} />
        </main>
    );
}
