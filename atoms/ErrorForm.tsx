import React from 'react'

const ErrorForm = ({children, ...props}) => (
    
    <div className={props.containerClass}>
        {children}
    </div>
)

export default ErrorForm
