import { useState, useEffect } from "react";
import useGame from "../../../hooks/use-game";
import getRandWord from "../../../service/get-rand-word";
import ErrorFetching from "../../ui-elements/error-fetching";
import Loading from "../../ui-elements/loading";
import Game from "./game";

const GameHandler = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [secretWord, setSecretWord] = useState<string>("");

  const { setGuesses } = useGame();

  useEffect(() => {
    try {
      getRandWord()
        .then((word) => {
          setSecretWord(word);
          setGuesses(Array.from(word).fill("_"));
        })
        .finally(() => setLoading(false));
    } catch (error) {
      console.error(error);
    }
  }, []);

  if (loading) return <Loading />;
  else if (!loading && !secretWord) return <ErrorFetching />;
  return <Game word={secretWord} />;
};

export default GameHandler;
