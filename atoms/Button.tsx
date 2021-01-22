import React from 'react'

const Button = ({children, ...props}) => (
    <button className={props.buttonClass} type={props.buttonType}
    onClick={props.buttonClick === "none" ? '' : props.buttonClick}>
        {children}
    </button>
    )

export default Button