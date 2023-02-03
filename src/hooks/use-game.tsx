import { useSelector, useDispatch } from "react-redux";
import { getGameLevel } from "../redux/slices/gameLevelSlice";
import {
  addChar,
  addFailedTry,
  getGameState,
  resetMatch,
  setCurrentWord,
  setGuessArray,
  setMatchState,
  setPauseMatch,
  setWinning,
  setLosing,
  setDisplayName,
  addBadChar,
  
} from "../redux/slices/gameStateSlice";

/**
 * This hook will provide both game's State & Level since both are related.
 */
const useGame = () => {
  const dispatch = useDispatch();
  const gameState = useSelector(getGameState);

  /**
   * Game lifecycle
   */
  const resetGame = () => dispatch(resetMatch());
  const startGame = () => dispatch(setMatchState(true));
  const pauseGame = () => dispatch(setPauseMatch(true));
  const unpauseGame = () => dispatch(setPauseMatch(false));
  const setLosingState = () => dispatch(setLosing());
  const setWord = (word: string) => dispatch(setCurrentWord(word));
  const addBadLetter = (char: string) => dispatch(addBadChar(char));

  const setGuesses = (guessArray: string[]) =>
    dispatch(setGuessArray(guessArray));

  const checkWinOrLose = () => {
    if (triesLeft === 0) return dispatch(setLosing());

    const lettersArray = Array.from(gameState.currentWord);
    if (getGuesses.toString() === lettersArray.toString())
      return dispatch(setWinning());
  };

  const guessLetter = (char: string) => {
    const standardizedChar = char.toLowerCase();
    const lettersArray = Array.from(gameState.currentWord);

    if (!lettersArray.includes(standardizedChar)) {
      addBadLetter(char);
      return dispatch(addFailedTry());
    }

    /**
     * This loops the word's letters array to check appearances.
     * Fills indexesArray with numbers of indexes occurring for that char.
     */
    let indexesArray: number[] = [];

    for (let i = 0; i < lettersArray.length; i++) {
      if (lettersArray[i] === standardizedChar) {
        indexesArray.push(i);
      }
    }

    // If the guessed character is correct - add char at the appropriate spot.
    dispatch(
      addChar({
        indexes: indexesArray,
        char: standardizedChar,
      })
    );
  };

  const resetTheGame = () => dispatch(resetGame());

  /**
   * Game lifecycle variables
   */
  const isLive = gameState.live;
  const isWinner = gameState.win;
  const isLoser = gameState.lose;
  const isPaused = gameState.paused;
  const currentWord = gameState.currentWord;
  const getGuesses = gameState.guesses;
  const getBadGuesses = gameState.badGuesses;

  // Calculates tries left for the user based on current level.
  const gameLevel = useSelector(getGameLevel);
  const triesLeft =
    gameLevel.maxStrikes - gameState.tries > 0
      ? gameLevel.maxStrikes - gameState.tries
      : 0;

  const showGuesses = gameLevel.showGuesses;

  const setUserDisplayName = (name: string) => dispatch(setDisplayName(name));
  const displayName = gameState.displayName;

  return {
    gameState,
    getGuesses,
    showGuesses,
    gameLevel,
    checkWinOrLose,
    triesLeft,
    setGuesses,
    setUserDisplayName,
    currentWord,
    isWinner,
    setLosingState,
    isLoser,
    startGame,
    resetTheGame,
    pauseGame,
    isPaused,
    isLive,
    getBadGuesses,
    displayName,
    unpauseGame,
    guessLetter,
    setWord,
  };
};

export default useGame;
