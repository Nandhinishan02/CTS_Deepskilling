import React from "react";
import "./App.css";

import ListofPlayers from "./components/ListofPlayers";
import IndianPlayers from "./components/IndianPlayers";

function App() {
  // 11 players with names and scores
  const players = [
    { name: "Sachin", score: 90 },
    { name: "Dhoni", score: 85 },
    { name: "Virat", score: 95 },
    { name: "Rohit", score: 80 },
    { name: "Rahul", score: 65 },
    { name: "Jadeja", score: 55 },
    { name: "Ashwin", score: 75 },
    { name: "Hardik", score: 68 },
    { name: "Bumrah", score: 88 },
    { name: "Shami", score: 60 },
    { name: "Rishabh", score: 72 }
  ];

  // Filter players with scores below 70 using arrow function
  const playersBelow70 = players.filter(
    (player) => player.score < 70
  );

  // T20 Players
  const T20players = [
    "First Player",
    "Second Player",
    "Third Player",
    "Fourth Player",
    "Fifth Player"
  ];

  // Ranji Trophy Players
  const RanjiTrophyPlayers = [
    "Sixth Player",
    "Seventh Player",
    "Eighth Player",
    "Ninth Player",
    "Tenth Player"
  ];

  // Flag for conditional rendering
  let flag = true;

  return (
    <div className="App">
      {flag ? (
        <div>
          <ListofPlayers players={players} />

          <h2>List of Players having Scores Less than 70</h2>

          {playersBelow70.map((player) => (
            <p key={player.name}>
              Mr. {player.name} {player.score}
            </p>
          ))}
        </div>
      ) : (
        <IndianPlayers
          t20Players={T20players}
          ranjiTrophyPlayers={RanjiTrophyPlayers}
        />
      )}
    </div>
  );
}

export default App;