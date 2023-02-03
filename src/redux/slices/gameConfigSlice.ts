import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export enum GameDifficulties {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export type GameConfig = {
  difficulty: GameDifficulties;
};

const initialState: GameConfig = {
  difficulty: GameDifficulties.EASY,
};

const gameConfigSlice = createSlice({
  name: "gameConfig",
  initialState,
  reducers: {
    setConfig: (state, action: PayloadAction<GameConfig>) => {
      state = { ...action.payload };
    },
    setDifficulty: (state, action: PayloadAction<GameDifficulties>) => {
      state.difficulty = action.payload;
    },
  },
});

export const { setConfig, setDifficulty } = gameConfigSlice.actions;

export const getGameSettings = (state: RootState) => state.gameConfig;

export default gameConfigSlice.reducer;
