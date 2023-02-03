import { ChangeEvent, useRef, useState, FormEvent } from "react";
import useGame from "../../../../hooks/use-game";
import Button from "../../../ui-elements/button";

const GuessInput = () => {
  const [errorInput, setErrorInput] = useState<string>("");
  const [userGuess, setUserGuess] = useState<string>("");
  const { getGuesses, guessLetter, getBadGuesses, showGuesses } = useGame();

  const inputRef = useRef(null);

  /**
   * Handle the onChange event when user input.
   * Also validating with regex.
   * @param event change event
   */
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserGuess("");
    setErrorInput("");

    const value = event.target.value;
    const regexp = new RegExp(/[A-Za-z]/);

    if (!regexp.test(value)) {
      setErrorInput("Only A-Z a-z characters are allowed.");
      return event.preventDefault();
    }

    setUserGuess(value.toLowerCase());
  };

  /**
   * Handles guessing of letters as well as validation.
   * @param char string
   */
  const guessAnotherLetter = (char = userGuess): void => {
    // Take a function from parent, to update state with array of guesses
    if (!char) return;

    if (getGuesses.includes(char))
      return setErrorInput(
        `${char.toUpperCase()} is already a guessed letter, try another letter.`
      );

    // Redux dispatch basically, logic implemented within the custom hook.
    guessLetter(char.toLowerCase());
  };

  /**
   * Handles the submission of the form.
   * @param event form event
   */
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    (inputRef.current! as HTMLInputElement).value = "";
    guessAnotherLetter();
  };

  return (
    <form noValidate onSubmit={(event) => handleSubmit(event)}>
      <section className="flex items-center justify-center flex-col space-y-12">
        <div className="flex flex-col space-y-3 items-center justify-center">
          <input
            ref={inputRef}
            maxLength={1}
            onChange={handleChange}
            type="text"
            className="text-9xl dark:text-slate-900 text-center w-32 uppercase rounded-xl shadow dark:shadow-gray-200"
          />
          {errorInput ? (
            <span className="text-red-600 font-bold mx-auto">{errorInput}</span>
          ) : (
            ""
          )}
        </div>
        {showGuesses ? (
          <div>
            <h3 className="text-xl font-light text-slate-600">
              Your wrong guesses:
            </h3>
            <span className="text-3xl font-light text-red-500">
              {getBadGuesses.join(", ")}
            </span>
          </div>
        ) : (
          ""
        )}
        <div className="flex flex-col items-center justify-center space-y-6">
          <Button type="submit" disabled={!!errorInput}>
            Guess!
          </Button>
          <p className="text-slate-400 font-light">
            You can also press{" "}
            <code className="bg-slate-800 p-1 rounded-md shadow">enter</code> on
            your keyboard :)
          </p>
        </div>
      </section>
    </form>
  );
};

export default GuessInput;
