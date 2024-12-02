const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard({ onSelectCell, turns }) {
/*     let [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectCell(rowIndex, cellIndex) {
        setGameBoard((prevGameBoard) => {
            //prevGameBoard[rowIndex][cellIndex] = "X"; esta forma não é recomendada, pois o React não detecta a mudança
            //return prevGameBoard;
            const updatedBoard = [ ...prevGameBoard.map(row => [...row])]; //Cria uma cópia do array, usando o spread operator para copiar cada linha do array
            updatedBoard[rowIndex][cellIndex] = activePlayerSymbol;  //Atualiza a célula selecionada com o símbolo do jogador ativo
            return updatedBoard; //Retorna o novo estado atualizado com a célula selecionada
        });
        onSelectCell();
    } */

    let gameBoard = initialGameBoard;

    for (const turn of turns) {
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
    }


    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <il key={rowIndex}>
                    <ol>
                        {row.map((cell, cellIndex) => (
                            <li key={cellIndex}>
                                <button onClick={() => onSelectCell(rowIndex, cellIndex)} disabled={gameBoard[rowIndex][cellIndex] ? true : false}>{cell}</button>
                            </li>
                        ))}
                    </ol>
                </il>
            ))}
        </ol>
    )
}