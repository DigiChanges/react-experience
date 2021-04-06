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
				className="flex bg-primary-main hover:bg-primary-hover rounded-full mx-auto border-0 p-2 md:pt-4 md:px-8 focus:outline-none text-lg"
			>
		<span className="hidden md:block font-bold pb-1">{labelName}</span>
		<i className="w-8 pl-2">
			<Icon/>
		</i>
		</Button>
		</div>
	)
}

export default ButtonIcon;
