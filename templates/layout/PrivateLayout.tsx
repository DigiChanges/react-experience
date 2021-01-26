import React from "react";
import Sidebar from '../../organisms/sidebar/Sidebar';

const PrivateLayout = ({ children }) => {

  return (
    <div className='flex flex-col md:flex-row'>
      <Sidebar className="w-full md:w-auto min-h-auto md:min-h-screen bg-black"/>
      <div className='w-full min-h-screen flex justify-center text-gray-700 body-font bg-gray-900'>
        {children}
      </div>
    </div>
  )
}

export default PrivateLayout
