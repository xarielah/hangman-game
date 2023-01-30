import React, { ButtonHTMLAttributes } from "react";

interface IButtonProps {
  children: string;
}

const Button = (
  props: ButtonHTMLAttributes<HTMLButtonElement> & IButtonProps
) => {
  return (
    <button
      {...props}
      className={`dark:bg-blue-400 p-3 rounded-xl font-bold text-xl bg-blue-200 dark:shadow-gray-200/30 dark:shadow-md shadow dark:text-white ${
        props.className ?? ""
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;
