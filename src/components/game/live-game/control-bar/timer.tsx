import { useEffect, useState } from "react";
import useGame from "../../../../hooks/use-game";
import { getTimerFormat } from "../../../../utils/numbers/normalize-timer-values";

interface TimerState {
  time: number;
  minutes: number;
  seconds: number;
}

/**
 * Gets a numeric value, if it's single char,
 * return the value as number prefixed with zero.
 * @param number number
 * @returns string
 */
function normalizeNumberString(number: number): string {
  if (number < 10) return `0${number}`;
  else return number + "";
}

//! Fix calculation logic.
//! Update state object once every interval-run.

const Timer = () => {
  const [danger, setDanger] = useState<boolean>(false); // This property is when 1 minute left.
  const { gameLevel, gameState, setLosingState } = useGame();

  const initialTime = Math.floor(gameLevel.timer * 60);
  const initialMinutes = gameLevel.timer;
  const initialSeconds = 0;

  const [timeState, setTimeState] = useState<TimerState>({
    time: initialTime,
    minutes: initialMinutes,
    seconds: initialSeconds,
  });

  const tick = () => {
    if (gameState.paused) return;

    if (timeState.minutes === 0 && timeState.seconds === 0) {
      setLosingState();
    } else if (timeState.seconds === 0) {
      setTimeState({
        time: timeState.time,
        minutes: timeState.minutes - 1,
        seconds: 59,
      });
    } else if (timeState.minutes === 1 && timeState.seconds === 0) {
      setDanger(true);
    } else {
      setTimeState({
        time: timeState.time - 1,
        minutes: timeState.minutes,
        seconds: timeState.seconds - 1,
      });
    }
  };

  /**
   * This runs the timer.
   */
  useEffect(() => {
    const timer = setInterval(tick, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [timeState, gameState.paused]);

  return (
    <span
      className={`duration-300 ease-in-out ${danger ? "text-red-500" : ""}`}
    >
      {getTimerFormat(timeState.minutes, timeState.seconds)}
    </span>
  );
};

export default Timer;
