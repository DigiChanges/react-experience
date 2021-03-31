import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  props?: any;
}

const Button: React.FC<ButtonProps> = ({ children, props }) => {
  return (
    <button
      type="button"
      className=" w-1/12 h-12 bg-gray-700 text-white text-sm rounded-full font-bold opacity-5 py-9 px-3 gilroy"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
