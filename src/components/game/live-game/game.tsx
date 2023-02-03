import { useEffect } from "react";
import useGame from "../../../hooks/use-game";
import PausedGame from "../game-screens/paused-game";
import ControlBar from "./control-bar/control-bar";
import GuessInput from "./guess-input/guess-input";
import GuessStatus from "./guess-status/guess-status";

// Todo: implement a timer

const Game = () => {
  const {
    startGame,
    gameState,
    checkWinOrLose,
    triesLeft,
    getGuesses,
    currentWord,
    isPaused,
  } = useGame();

  useEffect(() => {
    if (!gameState.live && currentWord) startGame();
  }, []);

  useEffect(() => {
    if (currentWord) checkWinOrLose();
  }, [getGuesses, triesLeft]);

  return (
    <div className="w-full">
      <ControlBar />
      <section className="min-h-[600px] flex flex-col items-center justify-center">
        {isPaused ? (
          <PausedGame />
        ) : (
          <>
            <GuessStatus />
            <GuessInput />
          </>
        )}
      </section>
    </div>
  );
};

export default Game;
