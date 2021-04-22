import React from "react";

const UserRemove = ({ id, lastName, firstName }) =>
{
  return (
			<p className="font-hairline text-5xl text-gray-400 mb-4 text-center">
				Are you sure delete user:
				<br/>
				<span className='text-2xl'>
					{`${id} - ${lastName} ${firstName}`}
				</span>
			</p>
  );
};

export default UserRemove;
