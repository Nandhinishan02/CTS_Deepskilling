import React from "react";

function ListofPlayers({ players }) {
  return (
    <div>
      <h2>List of Players</h2>

      {players.map((player) => (
        <p key={player.name}>
          Mr. {player.name} {player.score}
        </p>
      ))}
    </div>
  );
}

export default ListofPlayers;