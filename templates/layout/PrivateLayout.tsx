import React from "react";
import Breadcrumb from "../../molecules/Breadcrumb";
import SideBar from "../../organisms/SideBar";
import Footer from "../../organisms/Footer";
import NavBar from "../../organisms/NavBar";
import { useSelector } from "react-redux";

const PrivateLayout = ({ children }) => {
  const { user } = useSelector(state => state.Auth);
  console.log(user);

  return (
    <>
      <div className="grid grid-areas-md-private-layout h-full text-gray-700 body-font bg-gray-900">
        <header className="grid-in-header bg-gray-800 w-auto"> {/* TODO: Add navbar*/}
          <NavBar email={user?.email} />
        </header>

        <SideBar className="grid-in-sidebar m-4 w-auto md:w-64 md:min-h-screen hidden md:grid lg:grid bg-gray-800 rounded-lg-md shadow-md overflow-hidden " />

        <main className="grid-in-main min-h-screen w-auto">
          <Breadcrumb className="w-auto text-gray-500 text-sm lg:text-base p-5" />
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
