import useGame from "../../../hooks/use-game";
import Settings from "../../settings/settings";
import Button from "../../ui-elements/button";

interface IStartPageProps {
  toggleGameState: () => void;
}

const StartPage = ({ toggleGameState }: IStartPageProps) => {
  const { displayName } = useGame();

  return (
    <form noValidate onSubmit={(e) => e.preventDefault()}>
      <article className="flex flex-col space-y-3">
        <Settings />
        <Button
          disabled={!displayName}
          className="w-max mx-auto"
          onClick={toggleGameState}
          type="submit"
        >
          Start Game
        </Button>
      </article>
    </form>
  );
};

export default StartPage;
