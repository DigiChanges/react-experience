import React from "react";
import IconLockOpen from "../../../atoms/Icons/Stroke/IconLockOpen";
import IconLockClosed from "../../../atoms/Icons/Stroke/IconLockClosed";

const UserStateCell = (row: any): any =>
{
	return (
		<>
			{row.enable ? (
				<div className="w-6 text-green-600 mr-1">
					<IconLockOpen/>
				</div>
			) : (
				<div className="w-6 text-red-500 mr-1">
					<IconLockClosed/>
				</div>
			)}
		</>
	);
};

export default UserStateCell;
