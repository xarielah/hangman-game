import { useSelector, useDispatch } from "react-redux";
import { resetSettings } from "../redux/slices/gameConfigSlice";
import { getGameLevel, resetLevel } from "../redux/slices/gameLevelSlice";
import {
  addBadChar,
  addFailedTry,
  getGameState,
  resetMatch,
  setGuessArray,
  setMatchState,
  setPauseMatch,
} from "../redux/slices/gameStateSlice";

const useGame = () => {
  /**
   * This hook will provide both game's State & Level since both are related.
   */
  const dispatch = useDispatch();

  const gameState = useSelector(getGameState);
  const stopGame = () => dispatch(resetMatch());
  const startGame = () => dispatch(setMatchState(true));
  const isLive = gameState.live;

  const displayName = gameState.displayName;

  const pauseGame = () => dispatch(setPauseMatch(true));
  const unpauseGame = () => dispatch(setPauseMatch(false));
  const isPaused = gameState.paused;

  const gameLevel = useSelector(getGameLevel);

  const resetGameLevel = () => {
    dispatch(resetSettings());
    dispatch(resetLevel());
  };

  const addBadTry = (char: string) => {
    dispatch(addBadChar(char));
    dispatch(addFailedTry());
  };
  const triesLeft = gameLevel.maxStrikes - gameState.tries;

  const setGuesses = (guessArray: string[]) =>
    dispatch(setGuessArray(guessArray));

  return {
    gameState,
    gameLevel,
    triesLeft,
    setGuesses,
    startGame,
    stopGame,
    pauseGame,
    isPaused,
    isLive,
    displayName,
    unpauseGame,
    addBadTry,
    resetGameLevel,
  };
};

export default useGame;
