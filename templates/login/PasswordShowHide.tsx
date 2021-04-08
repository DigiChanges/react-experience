import { Field } from "formik";
import React, { useState } from "react";
import Button from "../../atoms/Button";
import IconEye from "../../atoms/Icons/Stroke/IconEye";
import IconEyeCrossed from "../../atoms/Icons/Stroke/IconEyeCrossed";
import PasswordShowInput from "../../atoms/PasswordShowInput";

const PasswordShowHide = ({ field, type }) => {
  // const [showHidePassword, changeShowHidePassword] = useState(false);
  const [isShowingPass, setShow] = useState(true);

  const handleClick = () => {
    setShow(!isShowingPass)
  }
  // const handleClick = () => {
  //   changeShowHidePassword(!showHidePassword)
  // }

  return (
    <>
      {/* <Field
        type={showHidePassword ? "text" : "password"}
        {...field}
        name="password"
        id="password"
        placeholder="Your Password"
        component={PasswordShowInput}
        className="w-full inline-block border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2 hover:border-grey rounded shadow"
        onClick={handleClick}
      /> */}
      <div className="relative mr-1 my-2 flex-grow">
        <input
          type={type}
          {...field}
          className="w-full focus:outline-none focus:border-indigo-500 text-base px-4 py-2 hover:border-grey rounded shadow font-extrabold"
          placeholder="Your Password"
        />
        <span className="absolute inset-y-0 right-0 flex items-center pl-2">
          <Button className="text-right w-8 h-8 mt-2 mb-1 mx-3 text-purple-lighter"
            buttonClick={handleClick}>
            {isShowingPass ?
              <IconEye />
              : <IconEyeCrossed />}
          </Button>
        </span>
      </div>
    </>
  );
};

export default PasswordShowHide;
