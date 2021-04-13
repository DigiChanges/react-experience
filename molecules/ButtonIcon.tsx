import React from 'react'
import Button from "../atoms/Button";

const ButtonIcon = ({ icon, labelName, buttonType = null, ...props }) => {
  const Icon = icon;

  return (
    <div className="mt-4 text-white">
      <Button
        buttonType={buttonType}
        className="flex bg-primary-main hover:bg-primary-hover rounded-full mx-auto border-0 p-3 md:pt-4 md:px-8 focus:outline-none text-lg"
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
