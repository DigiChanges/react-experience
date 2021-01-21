import React from 'react'

export default function TitleH2({
    titleName,
    titleClass,
}) {
    return (
        <h2 className={titleClass}>{titleName}</h2>
    )
}
