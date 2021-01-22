import React from 'react'

const Button = ({children, buttonClass, buttonClick, buttonType}) => (
    
    <button className={buttonClass} type={buttonType}
    onClick={buttonClick === "none" ? '' : buttonClick}>
        {children}
    </button>
    )

export default Button
