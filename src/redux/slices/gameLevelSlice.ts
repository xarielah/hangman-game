import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { GameDifficulties } from "./gameConfigSlice";

export type GameLevel = {
  timer: number; // In minutes
  maxStrikes: number;
  showGuesses: boolean;
};

export const gameLevels: { [key: string]: GameLevel } = {
  [GameDifficulties.EASY]: {
    timer: 7,
    maxStrikes: 5,
    showGuesses: true,
  },
  [GameDifficulties.MEDIUM]: {
    timer: 5,
    maxStrikes: 4,
    showGuesses: false,
  },
  [GameDifficulties.HARD]: {
    timer: 3,
    maxStrikes: 3,
    showGuesses: false,
  },
};

const initialState: GameLevel = gameLevels[GameDifficulties.EASY];

const gameLevelSlice = createSlice({
  name: "gameLevel",
  initialState,
  reducers: {
    setGameLevel: (state, action: PayloadAction<GameDifficulties>) => {
      const newState = { ...gameLevels[action.payload] };
      state.timer = newState.timer;
      state.maxStrikes = newState.maxStrikes;
      state.showGuesses = newState.showGuesses;
    },
    resetLevel: (state) => {
      state = gameLevels[GameDifficulties.EASY];
    },
  },
});

export const { setGameLevel, resetLevel } = gameLevelSlice.actions;

export const getGameLevel = (state: RootState) => state.gameLevel;

export default gameLevelSlice.reducer;
