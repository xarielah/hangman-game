import useGame from "../../../../hooks/use-game";
import Button from "../../../ui-elements/button";
import Timer from "./timer";

const ControlBar = () => {
  const { isPaused, triesLeft, pauseGame, resetTheGame, unpauseGame } =
    useGame();

  return (
    <nav className="relative">
      <div className="flex justify-between items-center w-full">
        <div className="w-full -z-[99] absolute font-bold text-2xl flex items-center justify-center">
          Tries Left: {triesLeft}
        </div>
        <div className="font-bold text-3xl">
          <Timer />
        </div>
        <div className="flex space-x-6 items-center">
          <span
            className="text-red-800 dark:text-slate-700 cursor-pointer font-bold"
            onClick={resetTheGame}
          >
            Reset
          </span>
          <Button
            onClick={isPaused ? unpauseGame : pauseGame}
            className={
              isPaused
                ? "bg-red-600 dark:bg-red-600 shadow-red-600 dark:shadow-red-600"
                : ""
            }
          >
            {isPaused ? "Resume" : "Pause"}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default ControlBar;
