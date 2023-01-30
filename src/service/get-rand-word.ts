/**
 * This is the service file to handle fetching a new word.
 * Make sure .env file includes the following variables:
 * VITE_API_KEY: string;
 * VITE_WORD_API: string;
 */

const API_KEY = import.meta.env.VITE_API_KEY;
const WORD_API = import.meta.env.VITE_WORD_API;

export default async function getRandWord(): Promise<string> {
  const response = await fetch(WORD_API ?? "", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": API_KEY ?? "",
    },
  }).then((res) => res.json());

  if (typeof response.word === "string") return response.word;
  else throw new Error("Error while trying to receive a random word.");
}
