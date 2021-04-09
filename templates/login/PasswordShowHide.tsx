import React, { useState } from "react";
import Button from "../../atoms/Button";
import IconEye from "../../atoms/Icons/Stroke/IconEye";
import IconEyeCrossed from "../../atoms/Icons/Stroke/IconEyeCrossed";

const PasswordShowHide = ({ field, type }) =>
{
  const [isShowingPassword, setIsShowingPassword] = useState(false);

  const showPasswordClick = () =>
	{
    setIsShowingPassword(!isShowingPassword)
  }

  return (
    <>
      <div className="relative mr-1 my-2 flex-grow">
        <input
          type={isShowingPassword ? "text" : "password"}
          {...field}
          className="w-full focus:outline-none focus:border-indigo-500 text-base px-4 py-2 hover:border-grey rounded shadow font-extrabold"
          placeholder="Your Password"
        />
        <span className="absolute inset-y-0 right-0 flex items-center pl-2">
          <Button
						className="text-right w-8 h-8 mt-2 mb-1 mx-3 text-purple-lighter"
            onClick={showPasswordClick}>
            {
							isShowingPassword
							? <IconEye />
              : <IconEyeCrossed />
            }
          </Button>
        </span>
      </div>
    </>
  );
};

export default PasswordShowHide;
