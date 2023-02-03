import useGame from "../../../hooks/use-game";
import HeaderParagraph from "../../layout/typography/header-paragraph";
import ResetButton from "./reset-button";

const WinnerScreen = () => {
  const { displayName } = useGame();

  return (
    <section>
      <HeaderParagraph
        header="Winner!1"
        paragraph={`${displayName}, you are the great winner of this game! it wasn't easy but you've made it to the grand-finale and we are full of appreciation to your majestic skills!`}
      />
      <ResetButton>Win Again!</ResetButton>
    </section>
  );
};

export default WinnerScreen;
