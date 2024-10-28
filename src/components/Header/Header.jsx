const Header = ({price}) => {
  return (
    <header className="py-4 sticky top-0 backdrop-blur-md bg-white/80 z-50">
      <div className="container mx-auto px-3">
        <div className="navbar flex-wrap">
          <div className="flex-1 justify-center sm:justify-start mb-7 sm:mb-0">
            <img className="w-20" src="logo.png" alt="dfj" />
          </div>
          <div>
            <ul className="flex gap-3 sm:gap-6 items-center text-gray-500 font-medium flex-wrap">
              <li>
                <a className="hover:bg-transparent" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:bg-transparent" href="#">
                  Fixture
                </a>
              </li>
              <li>
                <a className="hover:bg-transparent" href="#">
                  Teams
                </a>
              </li>
              <li>
                <a className="hover:bg-transparent" href="#">
                  Schedules
                </a>
              </li>
              <li>
                <button className="btn bg-transparent border hover:bg-[#E7FE29]">
                  {price} Coin <img src="Currency.png" alt="" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
