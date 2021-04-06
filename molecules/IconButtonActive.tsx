import React from "react";

const IconButtonActive = ({isActive, iconEnable, iconDisable, classNameOnActive, onClick}): any =>
{
	const _iconEnable = iconEnable;
	const _iconDisable = iconDisable;

	const getIcon = () =>
	{
		return isActive ?
			<_iconEnable/> :
			<_iconDisable/>;
	}

	return (
		<div onClick={onClick} className={isActive ? "" : classNameOnActive} role="presentation">
			{getIcon()}
		</div>
	);
}

export default IconButtonActive;
