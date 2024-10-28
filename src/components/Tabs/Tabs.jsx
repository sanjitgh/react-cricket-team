const Tabs = ({ isActive, handelActive, selectedPlayer }) => {
  return (
    <div className="flex justify-end items-center mt-10 sticky sm:top-28 top-60 z-50">
      <div className="border rounded-xl">
        <button
          onClick={() => handelActive("players")}
          className={`${
            isActive.players
              ? "px-7 py-4 border-none rounded-l-xl font-bold text-black bg-[#E7FE29]"
              : "px-7 py-4 border-none text-gray-500 font-bold bg-white rounded-lxl"
          }`}
        >
          Available
        </button>

        <button
          onClick={() => handelActive("selected")}
          className={`${
            isActive.players
              ? "px-7 py-4 border-none text-gray-500 font-bold bg-white"
              : "px-7 py-4 border-none rounded-r-xl font-bold text-black bg-[#E7FE29]"
          }`}
        >
          Selected ({selectedPlayer.length})
        </button>
      </div>
    </div>
  );
};

export default Tabs;
