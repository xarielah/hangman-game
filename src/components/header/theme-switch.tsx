import { FaSun } from "react-icons/fa";
import { WiMoonAltWaningCrescent5 } from "react-icons/wi";
import useToggle from "../../hooks/use-toggle";

const ThemeSwitch = () => {
  const { theme, toggle } = useToggle();

  const DIMENSIONS = "w-7 h-7";

  return (
    <button onClick={toggle}>
      {theme === "dark" ? (
        <FaSun className={DIMENSIONS} />
      ) : (
        <WiMoonAltWaningCrescent5 className={DIMENSIONS} />
      )}
    </button>
  );
};

export default ThemeSwitch;
