import React, { Fragment } from "react";
import Sidebar from '../../organisms/sidebar/Sidebar';

const PrivateLayout = ({ children }) => {

  return (
    <div className='flex flex-row'>
      <Sidebar />
      <div className='w-full flex justify-center text-gray-700 body-font bg-gray-900'>
        {children}
      </div>
    </div>
  )
}

export default PrivateLayout