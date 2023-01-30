import React from "react";
import {
  GameConfig,
  getGameSettings,
  setConfig,
} from "../redux/slices/gameConfigSlice";
import { useDispatch, useSelector } from "react-redux";

const useGameConfig = () => {
  const dispatch = useDispatch();
  const config = useSelector(getGameSettings);

  const setGameConfig = (config: GameConfig) => {
    // do validations to config
    dispatch(setConfig(config));
  };

  const gameConfig = (): GameConfig => {
    return config;
  };

  return { setGameConfig, gameConfig };
};

export default useGameConfig;
