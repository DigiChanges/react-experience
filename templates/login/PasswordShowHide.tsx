import React, { useState } from "react";

const PasswordShowHide = ({ field }) => {
  const [showHidePassword, changeShowHidePassword] = useState(false);

  return (
    <span className="flex">
      <input
        type={showHidePassword ? "text" : "password"}
        {...field}
        className="w-5/6 focus:outline-none text-base px-2 py-2 shadow"
        placeholder="Password"
      />
      <i
        role="button"
        tabIndex={0}
        className="w-1/6 inline-block focus:outline-none px-2 py-2 hover:border-grey shadow"
        onClick={() => changeShowHidePassword(!showHidePassword)}
        aria-hidden="true"
      >
        show
      </i>
    </span>
  );
};

export default PasswordShowHide;
