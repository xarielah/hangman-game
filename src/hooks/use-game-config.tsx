import {
  GameConfig,
  GameDifficulties,
  getGameSettings,
  setConfig,
  setDifficulty,
} from "../redux/slices/gameConfigSlice";
import { useDispatch, useSelector } from "react-redux";
import { setGameLevel } from "../redux/slices/gameLevelSlice";

const useGameConfig = () => {
  const dispatch = useDispatch();
  const config = useSelector(getGameSettings);

  const setGameConfig = (config: GameConfig) => {
    // do validations to config
    dispatch(setConfig(config));
  };

  const setLevel = (diff: GameDifficulties) => {
    dispatch(setDifficulty(diff));
    dispatch(setGameLevel(diff));
  };

  const gameConfig = (): GameConfig => {
    return config;
  };

  return { setGameConfig, setLevel, gameConfig };
};

export default useGameConfig;
