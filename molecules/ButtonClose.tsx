import React from 'react'
import Button from '../atoms/Button'

const ButtonClose = ({ children }) => {
  return (
    <Button
      className="flex shadow-kx1 mx-1 text-white button-secondary hover:button-secondary-hover focus:button-secondary-active text-center font-semibold"
      buttonType="submit"
      buttonClick="none" >
      {children}
    </Button>
  )
}

export default ButtonClose
