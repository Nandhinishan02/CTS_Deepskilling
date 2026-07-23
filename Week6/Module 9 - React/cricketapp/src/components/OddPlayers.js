import React from "react";

function OddPlayers({ first, third, fifth }) {
  return (
    <div>
      <h3>Odd Players</h3>

      <p>First: {first}</p>
      <p>Third: {third}</p>
      <p>Fifth: {fifth}</p>
    </div>
  );
}

export default OddPlayers;