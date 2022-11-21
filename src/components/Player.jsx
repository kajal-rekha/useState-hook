import { useState } from "react";

const demoPlayerObj = {
  firstName: "Arham",
  lastName: "Abrar",
  jerseyNum: 10,
};
const Player = () => {
  const [player, setPlayer] = useState({});

  const handleAddProperty = () => {
    setPlayer({ ...player, ...demoPlayerObj });
  };

  const handleMakeGoal = () => {
    const randomGoal = Math.floor(Math.random() * 100 + 1);
    setPlayer({ ...player, goals: randomGoal });
  };
  return (
    <div>
      <h2>
        Player name:{player.firstName} {player.lastName}
      </h2>
      <h2>Player jersey: {player.jerseyNum}</h2>
      <h2>Goals: {player.goals}</h2>
      <button onClick={handleAddProperty}>Add property</button>
      <br />
      <button onClick={handleMakeGoal}>Make goal</button>
    </div>
  );
};

export default Player;
