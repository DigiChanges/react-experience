import React from 'react'
import Button from "../atoms/Button";

const ButtonIcon = ({ icon, labelName, buttonType = null, ...props }) => {
  const Icon = icon;

  return (
    <div className="mt-3 ">
      <Button
        buttonType={buttonType}
        className="dg-main-button-w-icon"
        {...props}
      >
        <span className="hidden md:block font-bold pb-1">{labelName}</span>
        <i className="w-5 md:w-8 md:pl-2">
          <Icon />
        </i>
      </Button>
    </div>
  )
}

export default ButtonIcon;
