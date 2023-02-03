import { useState, useEffect } from "react";
import useGame from "../../../hooks/use-game";
import getRandWord from "../../../service/get-rand-word";
import ErrorFetching from "../../ui-elements/error-fetching";
import Loading from "../../ui-elements/loading";
import LoserScreen from "../game-screens/loser-screen";
import WinnerScreen from "../game-screens/winner-screen";
import Game from "./game";

const GameHandler = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [errorFetching, setErrorFetching] = useState<boolean>(false);
  const { setGuesses, setWord, currentWord, isWinner, isLoser, gameState } =
    useGame();

  useEffect(() => {
    setErrorFetching(false);
    setLoading(true);
    try {
      if (!currentWord)
        getRandWord()
          .then((word) => {
            const apiWord = word.toLowerCase(); // Make the word a lowercase no matter what the api returns.
            setWord(apiWord); // Redux setting current word state.
            setGuesses(Array.from(apiWord).fill("_"));
          })
          .finally(() => setLoading(false));
    } catch (error) {
      console.error(error);
      setErrorFetching(true);
    }
  }, [gameState.reset, currentWord]);

  if (loading) return <Loading />;
  else if (errorFetching) return <ErrorFetching />;
  else if (isWinner) return <WinnerScreen />;
  else if (isLoser) return <LoserScreen />;
  return <Game />;
};

export default GameHandler;
