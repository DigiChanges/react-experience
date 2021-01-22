import React from 'react'

const Title = ({children, titleType, titleClass}) => 

        titleType === "h5" ? (<h5 className={titleClass}>{children}</h5>) :
        titleType === "h4" ? (<h4 className={titleClass}>{children}</h4>) :
        titleType === "h3" ? (<h3 className={titleClass}>{children}</h3>) :
        titleType === "h2" ? (<h2 className={titleClass}>{children}</h2>) :
        titleType === "h1" ? (<h1 className={titleClass}>{children}</h1>) :
        (<h1 className={titleClass}>{children}</h1>)

export default Title
