import React from "react";
import IconLockOpen from "../../../atoms/Icons/IconLockOpen";
import IconLockClosed from "../../../atoms/Icons/IconLockClosed";

const RoleStateCell = (row: any): any =>
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

export default RoleStateCell;
