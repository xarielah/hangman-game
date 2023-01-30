import { useEffect } from "react";
import useGame from "../../../hooks/use-game";
import ControlBar from "./control-bar/control-bar";
import GuessInput from "./guess-input/guess-input";
import GuessStatus from "./guess-status/guess-status";

interface IGameProps {
  word: string;
}

// Todo: implemement a timer
// implement hooks for the different slices

const Game = ({ word }: IGameProps) => {
  const { startGame, addBadTry } = useGame();

  useEffect(() => {
    startGame();
  }, []);

  return (
    <div className="w-full">
      <ControlBar />
      <GuessStatus />
      <GuessInput addGuess={(char: string) => addBadTry(char)} />
    </div>
  );
};

export default Game;
