import React, { useState } from "react";
import Button from "../../atoms/Button";
import IconEye from "../../atoms/Icons/Stroke/IconEye";
import IconEyeCrossed from "../../atoms/Icons/Stroke/IconEyeCrossed";

const PasswordShowHide = ({ field }) =>
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
          className="dg-form-field-full font-extrabold"
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
