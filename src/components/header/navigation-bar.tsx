import useGame from "../../hooks/use-game";
import ThemeSwitch from "./theme-switch";

const NavigationBar = () => {
  const { displayName, isLive } = useGame();
  return (
    <nav className="flex justify-between bg-gray-200/70 dark:bg-slate-800 px-6 py-4 rounded-xl">
      <a href="/">
        <div className="font-bold text-2xl">Hangman</div>
      </a>
      <div className="flex space-x-3 items-center">
        {displayName && isLive ? (
          <span className="font-light bg-gray-300 shadow dark:bg-slate-700 py-1 px-2 rounded-lg">
            Playing as <span className="font-medium">{displayName}</span>
          </span>
        ) : (
          ""
        )}
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default NavigationBar;
