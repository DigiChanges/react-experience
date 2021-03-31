import React from "react";
import Breadcrumb from "../../molecules/Breadcrumb";
import SideBar from "../../organisms/SideBar";
import Footer from "../../organisms/Footer";
import NavBar from "../../organisms/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { setShowSidebar } from '../../redux/menu/actions';

const PrivateLayout = ({ children, ...pageProps }) => {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.Auth);
  const { showSidebar } = useSelector(state => state.Menu);

  const onClick = () => {
    dispatch(setShowSidebar())
  }

  return (
    <>
      <div className="grid grid-areas-md-private-layout h-full text-gray-700 body-font bg-gray-900">
        <header className="grid-in-header bg-gray-800 w-auto">
          <NavBar showSidebar={showSidebar} onClick={onClick} email={user?.email} />
        </header>
        <div className="hidden absolute md:block mt-20 ml-4 z-10">
          <SideBar className="ml-1 max-w-64 bg-gray-800 rounded-lg-md shadow-md h-90" />
        </div>
        {showSidebar ? (

          <SideBar className="hidden" />

        ) : (
          <div className="absolute md:block mt-20 md:m-4 z-10">
            <SideBar className="ml-5 max-w-64 bg-gray-800 rounded-lg-md shadow-md h-90" />
          </div>
        )}
        <main className="grid-in-main min-h-screen w-100">

          <Breadcrumb className="ml-6 text-gray-500 text-sm lg:text-base py-5 sm:px-0 md:px-20 lg:px-14" />
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
