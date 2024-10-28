import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const deleteAlert = () => {
  toast.error("Player removed", {
    position: "top-center",
  });
};
const SelectedPlayer = ({
  selectedPlayer,
  handelDeletePlayer,
  handelActive,
}) => {
  return (
    <div>
      <h1 className="font-bold text-2xl my-3 text-center sm:text-start">
        SelectedPlayer({selectedPlayer.length}/6)
      </h1>
      <div className="space-y-5 mt-10">
        {selectedPlayer.map((player, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between border rounded-xl p-5"
          >
            <div className="flex gap-5 items-center">
              <img className="w-32 rounded-xl" src={player.image} alt="" />
              <div>
                <h1 className="font-bold text-xl">{player.name}</h1>
                <p className="text-gray-500">{player.battingType}</p>
              </div>
            </div>
            <button
              onClick={() => {
                handelDeletePlayer(player.playerId), deleteAlert();
              }}
              className="text-red-500 text-xl"
            >
              <RiDeleteBin6Line />
            </button>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <button
          onClick={() => handelActive("players")}
          className="btn bg-[#E7FE29] font-bold"
        >
          Add more player
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayer;
