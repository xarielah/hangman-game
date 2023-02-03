import { ChangeEvent, useState } from "react";
import useGame from "../../hooks/use-game";

const DisplayName = () => {
  const [errorInput, setErrorInput] = useState<string>("");
  const { setUserDisplayName, displayName } = useGame();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setErrorInput("");
    const value = event.target.value.trim();
    const regexp = new RegExp(/^[a-z0-9]+$/i);
    if (!regexp.test(value)) {
      setUserDisplayName("");
      return setErrorInput("You can only use A-Z a-z 0-9.");
    }

    if (value.length < 3) {
      setUserDisplayName("");
      return setErrorInput("Minimum 3 characters are needed.");
    }

    setUserDisplayName(value);
  };
  return (
    <div className="flex flex-col space-y-1">
      <input
        onChange={handleChange}
        type="text"
        className="input-text"
        placeholder="What's your game name?"
      />
      {errorInput ? (
        <span className="font-bold text-red-500">{errorInput}</span>
      ) : (
        ""
      )}
    </div>
  );
};

export default DisplayName;
