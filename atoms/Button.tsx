import React from 'react'

const defaultClick = () => {
        return true;
}

const Button = ({children, buttonClass, buttonClick, buttonType}) => (

    <button className={buttonClass} type={buttonType}
    onClick={buttonClick === "none" ? defaultClick : buttonClick}>
        {children}
    </button>
    )

export default Button
