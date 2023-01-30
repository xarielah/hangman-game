import React from "react";
import Button from "./button";

const ErrorFetching = () => {
  return (
    <section className="flex flex-col space-y-3 items-center justify-center">
      <p>An error occurred while fetching data, please reload the page</p>
      <Button onClick={() => window.location.reload()}>Reload</Button>
    </section>
  );
};

export default ErrorFetching;
