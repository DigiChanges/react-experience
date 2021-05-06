import React from "react";

const UserRemove = ({ lastName, firstName }) =>
{
  return (
			<div className="font-hairline  text-gray-400 mb-4 text-center">
				<div className="w-full text-3xl">Are you sure delete user:</div>
				<span className='text-2xl'>
					{`${lastName} ${firstName}`}
				</span>
			</div>
  );
};

export default UserRemove;
