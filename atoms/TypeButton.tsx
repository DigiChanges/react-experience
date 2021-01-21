import React from 'react'

export default function TypeButton({
    buttonText,
    buttonClass,
    buttonType
}) {
    return (
        <button className={buttonClass} type={buttonType}>{buttonText}</button>
    )
}
