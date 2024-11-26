import { useState } from "react"

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard() {
    let [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectCell(rowIndex, cellIndex) {
        setGameBoard((prevGameBoard) => {
            /*prevGameBoard[rowIndex][cellIndex] = "X"; esta forma não é recomendada, pois o React não detecta a mudança
            return prevGameBoard;*/
            const updatedBoard = [ ...prevGameBoard.map(row => [...row])]; //Cria uma cópia do array, usando o spread operator para copiar cada linha do array
            updatedBoard[rowIndex][cellIndex] = "X";  //Atualiza a célula selecionada com o valor "X"
            return updatedBoard; //Retorna o novo estado atualizado com a célula selecionada
        });
    }


    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <il key={rowIndex}>
                    <ol>
                        {row.map((cell, cellIndex) => (
                            <li key={cellIndex}>
                                <button onClick={() => handleSelectCell(rowIndex, cellIndex)}>{cell}</button>
                            </li>
                        ))}
                    </ol>
                </il>
            ))}
        </ol>
    )
}