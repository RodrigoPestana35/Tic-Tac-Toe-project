import { useState } from "react"

export default function Player({initialName, symbol}) {
    let [playerName, setPlayerName] = useState(initialName);
    let [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        //setIsEditing(!isEditing);    Não usar dessa forma, pois pode haver problemas de sincronização, 
        //pois o valor atualizado pode não ser baseado no valor anterior porque o React agenda as atualizações de estado
        setIsEditing((prevIsEditing) => !prevIsEditing);  // Usar dessa forma para garantir que o valor atualizado seja baseado no valor anterior
    }

    function handleInputChange(event) {
        setPlayerName(event.target.value)
    }

    return(
        <li>
            <span className="player">
                {isEditing ?  <input type="text" value={playerName} required onChange={handleInputChange}/> : <span className="player-name">{playerName}</span>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}