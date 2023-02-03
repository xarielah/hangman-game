import useGame from "../../../hooks/use-game";
import HeaderParagraph from "../../layout/typography/header-paragraph";
import ResetButton from "./reset-button";

const LoserScreen = () => {
  const { displayName } = useGame();

  return (
    <section className="flex items-center justify-center flex-col">
      <HeaderParagraph
        header="Oops..."
        paragraph={`${displayName}, do not worry! the pain is temporary and the pride is eternal. you can try again and know that we believe in you!`}
      />
      <ResetButton>Another Free Game?</ResetButton>
    </section>
  );
};

export default LoserScreen;
