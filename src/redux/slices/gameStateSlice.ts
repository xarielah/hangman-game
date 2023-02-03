import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type GameState = {
  live: boolean;
  paused: boolean;
  displayName: string;
  tries: number;
  guesses: string[];
  badGuesses: string[];
  currentWord: string;
  win: boolean;
  lose: boolean;
  reset: boolean;
};

const initialState: GameState = {
  live: false,
  paused: false,
  guesses: [],
  badGuesses: [],
  displayName: "",
  tries: 0,
  currentWord: "",
  win: false,
  lose: false,
  reset: false,
};

const gameStateSlice = createSlice({
  name: "gameState",
  initialState,
  reducers: {
    setMatchState: (state, action: PayloadAction<boolean>) => {
      state.live = action.payload;
    },
    resetMatch: (state) => {
      const displayName = state.displayName;
      state.live = initialState.live;
      state.displayName = displayName;
      state.win = initialState.win;
      state.lose = initialState.lose;
      state.currentWord = initialState.currentWord;
      state.tries = initialState.tries;
      state.badGuesses = initialState.badGuesses;
      state.guesses = initialState.guesses;
      state.reset = !state.reset;
    },
    setPauseMatch: (state, action: PayloadAction<boolean>) => {
      state.paused = action.payload;
    },
    setDisplayName: (state, action: PayloadAction<string>) => {
      state.displayName = action.payload;
    },
    addFailedTry: (state) => {
      state.tries += 1;
    },
    addChar: (
      state,
      action: PayloadAction<{ indexes: number[]; char: string }>
    ) => {
      const tempArray = state.guesses;

      /**
       * Loops the indexes array given from useGame hook to change
       * the guesses array, this is necessary incase of multiple occurrences.
       */
      for (let i = 0; i < tempArray.length; i++) {
        if (action.payload.indexes.includes(i)) {
          tempArray[i] = action.payload.char;
        }
      }

      state.guesses = tempArray;
    },
    addBadChar: (state, action: PayloadAction<string>) => {
      const tempArray = state.badGuesses;
      const userChar = action.payload;
      if (tempArray.includes(userChar)) return;

      tempArray.push(userChar);
      state.badGuesses = tempArray;
    },
    setGuessArray: (state, action: PayloadAction<string[]>) => {
      state.guesses = action.payload;
    },
    setCurrentWord: (state, action: PayloadAction<string>) => {
      state.currentWord = action.payload;
    },
    setWinning: (state) => {
      state.win = true;
    },
    setLosing: (state) => {
      state.lose = true;
    },
  },
});

export const {
  setMatchState,
  resetMatch,
  setPauseMatch,
  setDisplayName,
  addFailedTry,
  addChar,
  setGuessArray,
  setCurrentWord,
  addBadChar,
  setWinning,
  setLosing,
} = gameStateSlice.actions;

export const getGameState = (state: RootState) => state.gameState;

export default gameStateSlice.reducer;
