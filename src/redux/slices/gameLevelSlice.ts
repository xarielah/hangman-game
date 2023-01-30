import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { GameDifficulties } from "./gameConfigSlice";

export type GameLevel = {
  timer: number; // In minutes
  maxStrikes: number;
};

export const gameLevels: { [key: string]: GameLevel } = {
  [GameDifficulties.EASY]: {
    timer: 7,
    maxStrikes: 5,
  },
  [GameDifficulties.MEDIUM]: {
    timer: 5,
    maxStrikes: 4,
  },
  [GameDifficulties.HARD]: {
    timer: 3,
    maxStrikes: 3,
  },
};

const initialState: GameLevel = gameLevels[GameDifficulties.EASY];

const gameLevelSlice = createSlice({
  name: "gameLevel",
  initialState,
  reducers: {
    setGameLevel: (state, action: PayloadAction<GameDifficulties>) => {
      state = gameLevels[action.payload];
    },
    resetLevel: (state) => {
      state = gameLevels[GameDifficulties.EASY];
    },
  },
});

export const { setGameLevel, resetLevel } = gameLevelSlice.actions;

export const getGameLevel = (state: RootState) => state.gameLevel;

export default gameLevelSlice.reducer;
