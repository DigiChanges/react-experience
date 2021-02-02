import React from 'react'


const Button = ({children, className, buttonClick, buttonType}) => {
    const defaultClick = () => {
        return true;
    }
    return (
    <button className={className} type={buttonType}
    onClick={buttonClick === "none" ? defaultClick : buttonClick}>
        {children}
    </button>
    )
}

export default Button
