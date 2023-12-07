import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  //let buttonCaption = "Edit";

  const handleEditClick = () => {
    //setIsEditing(!isEditing);
    setIsEditing((editing) => !editing); // conseillé par react prend l'ancienne valeur de base on peut nommer ça comme on veut
  };

  const handleChange = (value) => {
    setPlayerName(value);

    // si isEditing est truthy nous appelons onChangeName dans le cas contraire rien ne se passe
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing && <span className="player-name">{playerName}</span>}
        {isEditing && (
          <input
            type="text"
            className="player-name"
            required
            defaultValue={initialName}
            onChange={(e) => handleChange(e.target.value)}
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
