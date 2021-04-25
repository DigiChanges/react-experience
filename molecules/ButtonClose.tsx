import React from 'react'
import Button from '../atoms/Button'

const ButtonClose = ({ children, ...props }) =>
{
  return (
    <Button
      className="dg-secondary-button"
      buttonType="button"
			{...props}
		>
      {children}
    </Button>
  )
}

export default ButtonClose;
