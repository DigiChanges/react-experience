import React from 'react'

const Label = ({children, htmlFor, className}) => (
	<label htmlFor={htmlFor} className={className}>
		{children}
	</label>
)

export default Label
