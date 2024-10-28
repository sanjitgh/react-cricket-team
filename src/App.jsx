import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Tabs from "./components/Tabs/Tabs";
import AllPlayers from "./components/AllPlayers/AllPlayers";
import SelectedPlayer from "./components/SelectedPlayer/SelectedPlayer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

function App() {
  const [isActive, setIsActive] = useState({
    players: true,
  });
  const handelActive = (status) => {
    if (status === "players") {
      setIsActive({ players: true });
    } else {
      setIsActive({ players: false });
    }
  };

  const [price, setPrice] = useState(0);
  const handelPrice = () => {
    setPrice(price + 400000);
  };

  const [selectedPlayer, setSelectedPlayer] = useState([]);
  const handelSelectedPlayer = (player) => {
    const isExist = selectedPlayer.find(
      (previousPlayer) => previousPlayer.playerId === player.playerId
    );

    if (!isExist && selectedPlayer.length < 6) {
      if (price > player.biddingPrice) {
        setPrice(price - player.biddingPrice);
        setSelectedPlayer([...selectedPlayer, player]);
        toast.success(`Congract !! ${player.name} is now your squad.`, {
          position: "top-center",
        });
      } else {
        toast.error("Not enough money to buy this player. Claim some Credit.", {
          position: "top-center",
        });
      }
    } else if (selectedPlayer.length >= 6) {
      toast.error("You can add maximum 6 players...!", {
        position: "top-center",
      });
    } else {
      toast.error("Player already selected.", {
        position: "top-center",
      });
    }
  };

  const handelDeletePlayer = (id) => {
    const remaindingPlayer = selectedPlayer.filter(
      (player) => player.playerId !== id
    );
    setSelectedPlayer(remaindingPlayer);
  };

  return (
    <>
      <Header price={price}></Header>
      <main className="container mx-auto px-3">
        <Banner handelPrice={handelPrice}></Banner>
        <Tabs
          selectedPlayer={selectedPlayer}
          handelActive={handelActive}
          isActive={isActive}
        ></Tabs>

        {isActive.players ? (
          <AllPlayers handelSelectedPlayer={handelSelectedPlayer}></AllPlayers>
        ) : (
          <SelectedPlayer
            handelActive={handelActive}
            handelDeletePlayer={handelDeletePlayer}
            selectedPlayer={selectedPlayer}
          ></SelectedPlayer>
        )}

        <Newsletter></Newsletter>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
