import { configureStore } from "@reduxjs/toolkit";
import gameConfigReducer from "./slices/gameConfigSlice";
import gameLevelSlice from "./slices/gameLevelSlice";
import gameStateReducer from "./slices/gameStateSlice";

export const store = configureStore({
  reducer: {
    gameConfig: gameConfigReducer,
    gameState: gameStateReducer,
    gameLevel: gameLevelSlice,
  },
  devTools: import.meta.env.PROD ? false : true,
});

export type RootState = ReturnType<typeof store.getState>;
