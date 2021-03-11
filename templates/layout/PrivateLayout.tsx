import React from "react";
import Breadcrumb from "../../molecules/Breadcrumb";
import SideBar from "../../organisms/SideBar";
import Footer from "../../organisms/Footer";

const PrivateLayout = ({ children }) => {
  return (
    <>
      <div className="grid grid-areas-md-private-layout lg:min-h-screen text-gray-700 body-font bg-gray-900">
        <header className="grid-in-header border-2 w-auto">HEADER</header> {/* TODO: Add navbar*/}
        <SideBar className="grid-in-sidebar m-4 bg-gray-800 rounded-lg-md shadow-md overflow-hidden" />
        <main className="grid-in-main h-auto w-auto ml-16 mr-16">
            <Breadcrumb className="w-auto text-gray-500 text-sm lg:text-base p-5"/>
            {children}
        </main>
        <Footer className="flex grid-in-footer border m-4 w-auto p-4 text-sm text-gray-200 rounded justify-center">
            2021 © DigiChanges
        </Footer>
      </div>
    </>
  );
};

export default PrivateLayout;
