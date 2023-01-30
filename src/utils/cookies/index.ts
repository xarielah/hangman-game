import { GameConfig } from "../../redux/slices/gameConfigSlice";
import { SETTINGS_COOKIE } from "./definitions";

function parseCookies(): any {
  let cookieObject: { [key: string]: string } = {};

  const split = document.cookie.split(";");
  const anotherSplit = split.map((cookieString) => cookieString.split("="));
  anotherSplit.forEach((cookie) => {
    cookieObject[cookie[0].trim()] = cookie[1].trim();
  });

  return cookieObject;
}

export function isCookieExists(name: string): boolean {
  if (!document.cookie) return false;

  const cookiesObject = parseCookies();
  if (!cookiesObject[name]) return false;

  return true;
}

export function getSettingsCookie(): GameConfig | null {
  if (!isCookieExists(SETTINGS_COOKIE)) return null;

  const cookiesObject = parseCookies();
  return cookiesObject[SETTINGS_COOKIE];
}
