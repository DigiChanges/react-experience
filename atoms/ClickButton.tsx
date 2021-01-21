import React from 'react'

export default function ClickButton({
    buttonText,
    buttonClass,
    buttonClick
}) {
    return (
        <button className={buttonClass} onClick={buttonClick}>{buttonText}</button>
    )
}
