import React from "react";
import SideBar from '../../organisms/SideBar';

const PrivateLayout = ({children}) =>
{
	return (
		<>
		<div className='flex flex-col md:flex-row bg-gray-900'>
			<SideBar className="w-full md:w-auto min-h-auto md:min-h-screen bg-black rounded-b-xl rounded-r-none md:rounded-b-none md:rounded-r-xl shadow-oneside z-20" />
			<div className='w-full min-h-screen flex justify-center text-gray-700 body-font bg-gray-900'>
				{children}
			</div>
		</div>
		</>
	)
}

export default PrivateLayout
