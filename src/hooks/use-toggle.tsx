import React, { useEffect, useLayoutEffect, useState } from "react";

export type ThemeValues = "dark" | "light";

const useToggle = () => {
  const [theme, setTheme] = useState<ThemeValues>("dark");

  useLayoutEffect(() => {
    if (document.documentElement.classList[0] === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const toggle = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setTheme("dark");
    }
  };

  return { theme, toggle };
};

export default useToggle;
