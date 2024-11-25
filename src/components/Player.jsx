import { useState } from "react"

export default function Player({name, symbol}) {
    let [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(true);
    }

    function handleSave() {
        setIsEditing(false);
    }

    return(
        <li>
            <span className="player">
                {isEditing ?  <input type="text" defaultValue={name}/> : <span className="player-name">{name}</span>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>Edit</button>
        </li>
    )
}