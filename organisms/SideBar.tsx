import React, { Fragment, useState } from "react";
import SideBarItem from "../molecules/SideBarItem";
import { dashRoutes } from "../config/dashRoutes";
import { ADMIN } from "../config/permissions";
import { useSelector } from "react-redux";
import IconArrowCircleLeft from "../atoms/Icons/Solid/IconArrowCircleLeft";

const SideBar = ({ className }) => {
  const { userPermissions, user } = useSelector((store) => store.Auth);
  const { isLoading } = useSelector((store) => store.General);
  const { currentPathname } = useSelector((store) => store.Paths);

  const [isExpanded, setExpanded] = useState(true);

  let classNameUl = "flex flex-col items-center h-full md:items-start md:justify-center w-56 pl-4 ml-1 ";

  classNameUl = isExpanded ? classNameUl : "flex flex-col items-center h-full md:items-center md:justify-center w-full";


  const hasPermission = (permission, user) =>
    (userPermissions && user?.roles && userPermissions.includes(permission)) ||
    user?.roles.find((role) => role.slug === ADMIN);

  const getDashRoutes = () =>
    dashRoutes.map((prop: any, key) => {
      return prop.children ? (
        <Fragment key={key} />
      ) : (
        hasPermission(prop.permission, user) && (
          <SideBarItem
            key={key}
            theKey={key}
            name={prop.name}
            path={prop.path}
            equalPath={
              currentPathname == prop.path
                ? { equal: true, currentPath: currentPathname }
                : { equal: false, currentPath: currentPathname }
            }
            userPermissions={userPermissions}
            user={user}
            icon={prop.icon ? prop.icon : false}
            levels={prop.levels ? prop.levels : false}
            isLoading={isLoading}
            isToggled={isExpanded}
          />
        )
      );
    });

  return (
    <div className={className} >
      <div className={`flex flex-row md:flex-col h-full`}>
        {/* TODO: Change image logic*/}
        <div className={classNameUl}>
          {
            isExpanded ? (
              <div className="hidden md:flex flex-row-reverse w-full">
                <button
                  onClick={() => setExpanded(false)}
                  type="button" className="right-0 w-5 text-main-gray-300 mr-3" >
                  <IconArrowCircleLeft />
                </button>
              </div>
            )
              : <div className="flex w-full ml-14 mb-8">
                <button
                  onClick={() => setExpanded(true)}
                  type="button" className="transform rotate-180 w-5 text-white" >
                  <IconArrowCircleLeft />
                </button>
              </div>
          }
          {getDashRoutes()}
        </div>
      </div>
    </div >
  );
};

export default SideBar;
