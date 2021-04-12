import React from 'react'
import Button from '../atoms/Button'

const ButtonConfirm = ({ children, ...props }) =>
{
  return (
    <Button
      className="flex shadow-kx1 mx-1 text-white button-primary hover:button-primary-hover focus:button-primary-active text-center font-semibold"
      buttonType="submit"
			{...props}
		>
      {children}
    </Button>
  )
}

export default ButtonConfirm;
