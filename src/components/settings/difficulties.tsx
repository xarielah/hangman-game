import React, { ChangeEvent, useLayoutEffect, useState } from "react";
import useGameConfig from "../../hooks/use-game-config";
import { GameDifficulties } from "../../redux/slices/gameConfigSlice";

const Difficulties = () => {
  const [difficulties, setDifficulties] = useState<string[]>([]);
  const { setLevel } = useGameConfig();

  const handleChange = (event: ChangeEvent) => {
    const inputValue = (event.target as HTMLSelectElement).value;

    /**
     * This sanitizes the input value.
     */
    if (difficulties.includes(inputValue)) {
      switch (inputValue) {
        case "easy":
          return setLevel(GameDifficulties.EASY);
        case "medium":
          return setLevel(GameDifficulties.MEDIUM);
        case "hard":
          return setLevel(GameDifficulties.HARD);
        default:
          return setLevel(GameDifficulties.EASY);
      }
    }
  };

  useLayoutEffect(() => {
    let difficultiesArray: string[] = [];
    for (let diff in GameDifficulties) {
      difficultiesArray.push(diff.toLowerCase());
    }
    setDifficulties(difficultiesArray);
  }, []);

  return (
    <select onChange={handleChange} className="input-text">
      {difficulties.map((diff) => (
        <option value={diff} key={diff}>
          {diff.slice(0, 1).toUpperCase() + diff.slice(1)}
        </option>
      ))}
    </select>
  );
};

export default Difficulties;
