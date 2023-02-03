import { ButtonHTMLAttributes } from "react";
import useGame from "../../../hooks/use-game";
import Button from "../../ui-elements/button";

interface IResetButtonProps {
  children: string;
}

const ResetButton = (
  props: ButtonHTMLAttributes<HTMLButtonElement> & IResetButtonProps
) => {
  const { resetTheGame } = useGame();

  return <Button onClick={resetTheGame}>{props.children}</Button>;
};

export default ResetButton;
