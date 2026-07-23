import React from "react";
import OddPlayers from "./OddPlayers";
import EvenPlayers from "./EvenPlayers";

function IndianPlayers({ t20Players, ranjiTrophyPlayers }) {
  const mergedPlayers = [...t20Players, ...ranjiTrophyPlayers];

  return (
    <div>
      <h2>Indian Team</h2>

      <OddPlayers
        first={t20Players[0]}
        third={t20Players[2]}
        fifth={t20Players[4]}
      />

      <EvenPlayers
        second={t20Players[1]}
        fourth={t20Players[3]}
      />

      <h2>List of Indian Players Merged</h2>

      {mergedPlayers.map((player) => (
        <p key={player}>Mr. {player}</p>
      ))}
    </div>
  );
}

export default IndianPlayers;