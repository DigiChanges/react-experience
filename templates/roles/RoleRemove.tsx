import React from "react";

const RoleRemove = ({ name }) =>
{
  return (
			<div className="font-hairline  text-gray-400 mb-4 text-center">
				<div className="w-full text-3xl">Are you sure delete role:</div>
				<span className='text-2xl'>
					{`${name}`}
				</span>
			</div>
  );
};

export default RoleRemove;
