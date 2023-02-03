import { useLayoutEffect } from "react";
import Difficulties from "./difficulties";
import DisplayName from "./display-name";

const Settings = () => {
  useLayoutEffect(() => {}, []);

  return (
    <section className="min-w-[300px] flex flex-col space-y-3 my-3">
      <h1 className="text-center font-bold text-xl">Game Settings:</h1>
      <div className="flex flex-col space-y-6">
        <Difficulties />
        <DisplayName />
      </div>
    </section>
  );
};

export default Settings;
