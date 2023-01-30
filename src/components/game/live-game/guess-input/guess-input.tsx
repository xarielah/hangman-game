import React, { ChangeEvent, useRef, useState } from "react";
import Button from "../../../ui-elements/button";

interface IGuessInputProps {
  addGuess: (char: string) => void;
}

const GuessInput = ({ addGuess }: IGuessInputProps) => {
  const [errotInput, setErrorInput] = useState<string>("");
  const [guessLetter, setGuessLetter] = useState<string>("");

  const inputRef = useRef(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setGuessLetter("");
    setErrorInput("");
    const value = event.target.value;
    const regexp = new RegExp(/[A-Za-z]/);
    if (!regexp.test(value)) {
      setErrorInput("Only A-Z a-z characters are allowed.");
      return event.preventDefault();
    }
    setGuessLetter(value);
  };

  const guessAnotherLetter = (char = guessLetter) => {
    // Take a function from parent, to update state with array of guesses
    if (!char) return;

    addGuess(char);
  };

  return (
    <section className="flex items-center justify-center flex-col space-y-12">
      <div className="flex flex-col space-y-3 items-center justify-center">
        <input
          ref={inputRef}
          maxLength={1}
          onChange={handleChange}
          type="text"
          className="text-9xl dark:text-slate-900 w-32 uppercase rounded-xl shadow dark:shadow-gray-200"
        />
        {errotInput ? (
          <span className="text-red-600 font-bold mx-auto">{errotInput}</span>
        ) : (
          ""
        )}
      </div>
      <Button disabled={!!errotInput}>Guess!</Button>
    </section>
  );
};

export default GuessInput;
