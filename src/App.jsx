import { useState } from "react"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./winning-combinations"

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {
  //let [activePlayer, setActivePlayer] = useState("X");
  let [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
      const {square, player} = turn;
      const {row, col} = square;

      gameBoard[row][col] = player;
  }

  let winner;

  for(const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
    console.log(firstSquareSymbol, secondSquareSymbol, thirdSquareSymbol);
    if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = firstSquareSymbol;
      break;
    }
  }

  function handleSelectCell(rowIndex, columnIndex) {
    //setActivePlayer((prevActivePlayer) => prevActivePlayer === "X" ? "O" : "X");
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updateTurns = [{ square: { row: rowIndex, col: columnIndex }, player: currentPlayer }, ...prevTurns];
      return updateTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        {winner && <h2>{winner} wins!</h2>}
        <GameBoard onSelectCell={handleSelectCell} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
