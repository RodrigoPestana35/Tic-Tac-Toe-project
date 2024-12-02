export default function GameBoard({ onSelectCell, board }) {
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

    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((cell, cellIndex) => (
                            <li key={cellIndex}>
                                <button onClick={() => onSelectCell(rowIndex, cellIndex)} disabled={cell !== null}>{cell}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}