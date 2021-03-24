import React, { Fragment, useState } from "react";
import SideBarItem from "../molecules/SideBarItem";
import { dashRoutes } from "../config/dashRoutes";
import { ADMIN } from "../config/permissions";
import { useSelector } from "react-redux";
import IconArrowCircleLeft from "../atoms/Icons/Solid/IconArrowCircleLeft";
// import Image from "../atoms/Image";

const SideBar = ({ className }) => {
  const { userPermissions, user } = useSelector((store) => store.Auth);
  const { isLoading } = useSelector((store) => store.General);
  const { currentPathname } = useSelector((store) => store.Paths);

  const [isExpanded, setExpanded] = useState(true);

  let classNameUl = "flex flex-col pt-6 pb-6 pl-6 items-center h-full justify-end md:items-start md:justify-center md:max-w-64";

  classNameUl = isExpanded ? classNameUl : "flex flex-col pt-6 pb-6 pl-6 items-center h-full justify-end md:items-start md:justify-center w-max";


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
      <div className={`flex flex-row md:flex-col ${isExpanded ? (`max-w-64`) : ``}  h-full rounded-r-3xl overflow-hidden`}>
        {/* TODO: Change image logic*/}
        {/* <div className="flex items-center justify-center h-20 shadow-md">
								 <Image
								 image={"/logo.png"}
								 className="pt-0 md:pt-5 h-16 w-32 md:h-32 md:w-auto pl-3 md:pl-0"
								 />
								 </div> */}
        <ul className={classNameUl}>
          {/* <ul className="flex flex-col pt-6 pb-6 pl-6 items-center h-full justify-end md:items-start md:justify-center w-full"> */}
          {/* <li className="flex justify-end w-full pr-6 pb-2"> */}
          <li className="flex justify-end object-fit pr-6 pb-2">
            {
              isExpanded ? (
                <button
                  onClick={() => setExpanded(false)}
                  type="button" className="flex flex-row justify-end w-6 text-main-gray-300 cursor-pointer" >
                  <IconArrowCircleLeft />
                </button>
              ) : <button
                onClick={() => setExpanded(true)}
                type="button" className="transform rotate-180 flex flex-row justify-end w-6 text-main-gray-300 cursor-pointer" >
                <IconArrowCircleLeft />
              </button>
            }
          </li>
          {getDashRoutes()}
        </ul>
      </div>
    </div >
  );
};

export default SideBar;
