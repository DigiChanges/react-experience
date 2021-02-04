import React from 'react'

const Title = ({children, titleType, className}) =>

	titleType === "h5" ? (<h5 className={className}>{children}</h5>) :
		titleType === "h4" ? (<h4 className={className}>{children}</h4>) :
			titleType === "h3" ? (<h3 className={className}>{children}</h3>) :
				titleType === "h2" ? (<h2 className={className}>{children}</h2>) :
					titleType === "h1" ? (<h1 className={className}>{children}</h1>) :
						(<h1 className={className}>{children}</h1>)

export default Title
