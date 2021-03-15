import React from 'react'

const Button = ({children, className, buttonClick, buttonType = null}) =>
{
	const defaultClick = () =>
	{
		return true;
	}

	return (
		<button className={className} type={buttonType ?? "button"}
				onClick={buttonClick === "none" ? defaultClick : buttonClick}>
			{children}
		</button>
	)
}

export default Button
