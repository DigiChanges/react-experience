import React from 'react'
import Button from '../atoms/Button'

const ButtonConfirm = ({ children, ...props }) =>
{
  return (
    <Button
      className="dg-main-button"
      buttonType="submit"
			{...props}
		>
      {children}
    </Button>
  )
}

export default ButtonConfirm;
