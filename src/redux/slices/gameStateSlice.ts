import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type GameState = {
  live: boolean;
  paused: boolean;
  displayName: string;
  tries: number;
  guesses: string[];
  // Might consider adding "pause the game"
};

const initialState: GameState = {
  live: false,
  paused: false,
  guesses: [],
  displayName: "",
  tries: 0,
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
      state = { ...initialState, displayName };
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
    addBadChar: (state, action: PayloadAction<string>) => {
      const tempArray = state.guesses;
      tempArray.push(action.payload);
      state.guesses = tempArray;
    },
    setGuessArray: (state, action: PayloadAction<string[]>) => {
      state.guesses = action.payload;
    },
  },
});

export const {
  setMatchState,
  resetMatch,
  setPauseMatch,
  setDisplayName,
  addFailedTry,
  addBadChar,
  setGuessArray,
} = gameStateSlice.actions;

export const getGameState = (state: RootState) => state.gameState;

export default gameStateSlice.reducer;
