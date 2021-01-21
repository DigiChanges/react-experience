import React from 'react'

export default function BasicButton({
    buttonText,
    buttonClass
}) {
    return (
        <button className={buttonClass}>{buttonText}</button>
    )
}
