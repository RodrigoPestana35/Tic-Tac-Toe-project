const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard() {
    return(
        <ol id="game-board">
            {initialGameBoard.map((row, rowIndex) => (
                <il key={rowIndex}>
                    <ol>
                        {row.map((cell, cellIndex) => (
                            <li key={cellIndex}><button>{cell}</button></li>
                        ))}
                    </ol>
                </il>
            ))}
        </ol>
    )
}