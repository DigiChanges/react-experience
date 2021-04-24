import React from "react";
import Breadcrumb from "../../molecules/Breadcrumb";
import SideBar from "../../organisms/SideBar";
import Footer from "../../organisms/Footer";
import NavBar from "../../organisms/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { setShowSidebar } from '../../redux/menu/actions';
import ConfirmDelete from "../modal/ConfirmDelete";
import SideBarItem from "../../molecules/SideBarItem";
import { dashRoutes } from "../../config/dashRoutes";
import SideBarSubItem from "../../atoms/SideBarSubItem";

const PrivateLayout: React.FC<any> = ({ children }) =>
{
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.Auth);
  const { showSidebar } = useSelector(state => state.Menu);
  const { modalData } = useSelector(state => state.General);

  const onClick = () => {
    dispatch(setShowSidebar())
  }

  const getDashItems = () => 
    dashRoutes.map((route, rKey) => 
      <SideBarItem
        key={rKey}
        name={route.name}
        path={route.path}
        icon={route.icon}
        permission={route.permission}
      >
        {
          route.levels?.map((level, lKey) => 
            <SideBarSubItem
              key={lKey}
              name={level.name}
              path={level.path}
              icon={level.icon}
              permission={level.permission}
            />
          )
        }
      </SideBarItem>
    )

  return (
      <div className="grid grid-areas-md-private-layout h-full text-gray-700 body-font bg-gray-900">
        <header className="grid-in-header bg-gray-800 w-auto">
          <NavBar showSidebar={showSidebar} onClick={onClick} email={user?.email} />
        </header>
        <div className="hidden md:block mt-6 ml-4 z-10">
          <SideBar className="absolute ml-1 bg-gray-800 rounded-lg-md shadow-md h-89 py-5">
            {getDashItems()}
          </SideBar>
        </div>
        {showSidebar ? (

          <SideBar className="hidden" />

        ) : (
          <div className="absolute md:block mt-20 md:m-4 z-10">
            <SideBar className="ml-5 bg-gray-800 rounded-lg-md shadow-md h-89 py-5">
              {getDashItems()}
            </SideBar>
          </div>
        )}
        <main className="grid-in-main min-h-screen w-full">
          <Breadcrumb className="pt-5 text-gray-500 lg:text-base ml-4 sm:ml-4" />
          {children}
        </main>
        <Footer className="flex grid-in-footer border m-4 w-auto p-4 text-sm text-gray-200 rounded justify-center">
          2021 © DigiChanges
        </Footer>
				<ConfirmDelete
					open={modalData?.open}
					idSelected={modalData?.idSelected}
					text={modalData?.text}
					action={modalData?.action}
				/>
      </div>
  );
};

export default PrivateLayout;
