import React, { useLayoutEffect, useState } from "react";
import Difficulties from "./difficulties";

const Settings = () => {
  return (
    <section className="min-w-[300px] flex flex-col space-y-3 my-3">
      <h1 className="text-center font-bold text-xl">Game Settings:</h1>
      <div>
        <Difficulties />
      </div>
    </section>
  );
};

export default Settings;
