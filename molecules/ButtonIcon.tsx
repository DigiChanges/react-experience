import React from 'react'
import Button from "../atoms/Button";

const ButtonIcon = ({icon, buttonClick, labelName, buttonType = null}) =>
{
	const Icon = icon;

	const defaultClick = () =>
	{
		return true;
	}

	return (
		<div className="mt-4 text-white">
			<Button
				buttonClick={buttonClick ?? defaultClick}
				buttonType={buttonType}
				className="flex bg-primary-main hover:bg-primary-hover rounded-full mx-auto border-0 p-2 md:py-2 md:px-8 focus:outline-none text-lg"
			>
		<span className="hidden md:block font-bold">{labelName}</span>
		<i className="w-8">
			<Icon/>
		</i>
		</Button>
		</div>
	)
}

export default ButtonIcon;
