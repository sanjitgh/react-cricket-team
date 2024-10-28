import { IoPerson } from "react-icons/io5";
import { IoFlag } from "react-icons/io5";

const SinglePlayer = ({ players, handelSelectedPlayer }) => {
  const { name, country, image, role, battingType, bowlingType, biddingPrice } =
    players;
  return (
    <div>
      <div className="space-y-4 p-5 border border-gray-200 rounded-xl">
        <img className="rounded-xl w-full max-h-60" src={image} alt="" />
        <div className="flex items-center gap-2 text-xl font-semibold">
          <IoPerson />
          <h3>{name}</h3>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-500">
            <IoFlag />
            <p>{country}</p>
          </div>
          <h1 className="px-4 rounded-md py-1 bg-gray-100">{role}</h1>
        </div>
        <div className="divider"></div>
        <p className="font-bold">Rating</p>
        <div className="flex justify-between items-center">
          <p className="text-gray-900 font-medium">{battingType}</p>
          <p className="text-gray-500">{bowlingType}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-900 font-medium">Price: ${biddingPrice}</p>
          <button
            onClick={() => {
              handelSelectedPlayer(players);
            }}
            className="btn bg-transparent border hover:bg-[#e7fe29]"
          >
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePlayer;
