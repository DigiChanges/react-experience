import React, { useState } from "react";

const PasswordShowHide = ({ field, form }) => {
  const [showHidePassword, changeShowHidePassword] = useState(false);

  return (
    <span className="flex">
      <input
        type={showHidePassword ? "text" : "password"}
        {...field}
        className="w-5/6 bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2 hover:border-grey rounded shadow"
        placeholder="Password"
      />
      <i
        role="button"
        tabIndex={0}
        className="w-1/6 inline-block border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2 hover:border-grey rounded shadow"
        onClick={() => changeShowHidePassword(!showHidePassword)}
      >
        show
      </i>
    </span>
  );
};

export default PasswordShowHide;
