import React from 'react'

export default function AdvButton({
    buttonText,
    buttonClass,
    buttonType,
    buttonClick
}) {
    return (
        <button className={buttonClass} type={buttonType} onClick={buttonClick}>{buttonText}</button>
    )
}
