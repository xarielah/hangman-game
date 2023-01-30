import useGame from "../../../../hooks/use-game";

const GuessStatus = () => {
  const { gameState } = useGame();
  return (
    <div className="flex items-center justify-center my-12">
      {gameState.guesses.map((char, i) => (
        <span key={i} className="text-5xl mx-5">
          {char}
        </span>
      ))}
    </div>
  );
};

export default GuessStatus;
