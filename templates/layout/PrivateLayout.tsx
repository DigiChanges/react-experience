import React from "react";
import Breadcrumb from "../../molecules/Breadcrumb";
import SideBar from "../../organisms/SideBar";

const PrivateLayout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-gray-900">
        <SideBar className="m-2 w-auto md:w-64 min-h-auto md:min-h-screen bg-gray-800 rounded-xl shadow-md overflow-hidden" />
        <div className="flex flex-col">
          <Breadcrumb />
        </div>
        <div className="w-full min-h-screen flex justify-center text-gray-700 body-font bg-gray-900">
          {children}
        </div>
      </div>
    </>
  );
};

export default PrivateLayout;
