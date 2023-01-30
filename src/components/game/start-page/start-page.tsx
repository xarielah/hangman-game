import React from "react";
import getRandWord from "../../../service/get-rand-word";
import Settings from "../../settings/settings";
import Button from "../../ui-elements/button";

interface IStartPageProps {
  toggleGameState: () => void;
}

const StartPage = ({ toggleGameState }: IStartPageProps) => {
  getRandWord();
  return (
    <article className="flex flex-col space-y-3">
      <Settings />
      <Button className="w-max mx-auto" onClick={toggleGameState}>
        Start Game
      </Button>
    </article>
  );
};

export default StartPage;
