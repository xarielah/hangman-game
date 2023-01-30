import ThemeSwitch from "./theme-switch";

const NavigationBar = () => {
  return (
    <nav className="flex justify-between bg-gray-200/70 dark:bg-slate-800 px-6 py-4 rounded-xl">
      <a href="/">
        <div className="font-bold text-2xl">Hangman</div>
      </a>
      <ThemeSwitch />
    </nav>
  );
};

export default NavigationBar;
