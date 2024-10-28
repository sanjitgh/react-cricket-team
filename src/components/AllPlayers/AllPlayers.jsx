import { useEffect, useState } from "react";
import SinglePlayer from "../SelectedPlayer/SinglePlayer";

const AllPlayers = ({handelSelectedPlayer}) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  return (
    <div>
        <h1 className="font-bold text-2xl mb-6 mt-3 text-center sm:text-start">Available Players</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {players.map((players, idx) => (
          <SinglePlayer key={idx} handelSelectedPlayer={handelSelectedPlayer} players={players}></SinglePlayer>
        ))}
      </div>
    </div>
  );
};

export default AllPlayers;
