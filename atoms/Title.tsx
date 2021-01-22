import React from 'react'

const Title = ({children, ...props}) => 
        props.titleType === "h5" ? (<h5 className={props.titleClass}>{children}</h5>) :
        props.titleType === "h4" ? (<h4 className={props.titleClass}>{children}</h4>) :
        props.titleType === "h3" ? (<h3 className={props.titleClass}>{children}</h3>) :
        props.titleType === "h2" ? (<h2 className={props.titleClass}>{children}</h2>) :
        props.titleType === "h1" ? (<h1 className={props.titleClass}>{children}</h1>) :
        (<h1 className={props.titleClass}>{children}</h1>)
        
export default Title