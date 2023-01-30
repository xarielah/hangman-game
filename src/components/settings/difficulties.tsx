import React, { ChangeEvent, useLayoutEffect, useState } from "react";
import { GameDifficulties } from "../../redux/slices/gameConfigSlice";

const Difficulties = () => {
  const [difficulties, setDifficulties] = useState<string[]>([]);

  const handleChange = (event: ChangeEvent) => {
    const inputValue = (event.target as any).value;

    /**
     * This sanitizes the input value.
     */
    if (difficulties.includes(inputValue)) {
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
    <select
      onChange={handleChange}
      className="rounded-xl cursor-pointer w-full p-2 shadow border-t-4 focus:outline-[1px] dark:text-slate-900 font-bold focus:outline-slate-300/60"
    >
      {difficulties.map((diff) => (
        <option value={diff} key={diff}>
          {diff.slice(0, 1).toUpperCase() + diff.slice(1)}
        </option>
      ))}
    </select>
  );
};

export default Difficulties;
