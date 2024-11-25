import { useState } from "react"

export default function Player({name, symbol}) {
    let [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        //setIsEditing(!isEditing);    Não usar dessa forma, pois pode haver problemas de sincronização
        setIsEditing((prevIsEditing) => !prevIsEditing);  // Usar dessa forma para garantir que o valor atualizado seja baseado no valor anterior
    }

    return(
        <li>
            <span className="player">
                {isEditing ?  <input type="text" value={name} required/> : <span className="player-name">{name}</span>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}