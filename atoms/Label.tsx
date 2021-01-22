import React from 'react'

const Label = ({children, hFor, labelClass}) => (
        <label htmlFor={hFor} className={labelClass}>
           {children}
        </label>
    )

export default Label