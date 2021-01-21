import React from 'react'

export default function ErrorForm({
    errorMessage,
    containerClass
}) {
    return (
    <div className={containerClass}>
        {errorMessage}
    </div>
    )
}
