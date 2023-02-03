import HeaderParagraph from "../../layout/typography/header-paragraph";

const PausedGame = () => {
  return (
    <section>
      <HeaderParagraph
        header="Game is paused."
        paragraph="The game is currently paused, you can resume the game using the red button top right of this box."
      />
    </section>
  );
};

export default PausedGame;
