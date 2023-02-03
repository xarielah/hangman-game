import { useState } from "react";
import GameHandler from "./components/game/live-game/game-handler";
import StartPage from "./components/game/start-page/start-page";

function App() {
  const [isGameActive, setIsGameActive] = useState<boolean>(false);

  const toggleGameState = () => {
    setIsGameActive((prev) => !prev);
  };

  return (
    <section className="flex min-h-[700px] justify-center items-center">
      {!isGameActive ? (
        <StartPage toggleGameState={toggleGameState} />
      ) : (
        <GameHandler />
      )}
    </section>
  );
}

export default App;
