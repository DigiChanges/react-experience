import React from 'react'
import Button from '../atoms/Button'

const ButtonConfirm = ({ children }) => {
  return (
    <Button
      className="flex shadow-kx1 mx-1 text-white button-primary hover:button-primary-hover focus:button-primary-active text-center font-semibold"
      buttonType="submit"
      buttonClick="none" >
      {children}
    </Button>
  )
}

export default ButtonConfirm
