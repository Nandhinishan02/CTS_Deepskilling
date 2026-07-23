import React from "react";

function EvenPlayers({ second, fourth }) {
  return (
    <div>
      <h3>Even Players</h3>

      <p>Second: {second}</p>
      <p>Fourth: {fourth}</p>
    </div>
  );
}

export default EvenPlayers;