import React, { Fragment } from "react";
import SideBarItem from "../molecules/SideBarItem";
import { dashRoutes } from "../config/dashRoutes";
import { ADMIN } from "../config/permissions";
import { useSelector } from "react-redux";
// import Image from "../atoms/Image";

const SideBar = ({ className }) => {
  const { userPermissions, user } = useSelector((store) => store.Auth);
  const { isLoading } = useSelector((store) => store.General);
  const { currentPathname } = useSelector((store) => store.Paths);

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
          />
        )
      );
    });

  return (
    <div className={className}>
      <div className="flex flex-row md:flex-col w-full h-full rounded-r-3xl overflow-hidden">
        {/* TODO: Change image logic*/}
        {/* <div className="flex items-center justify-center h-20 shadow-md">
          <Image
            image={"/logo.png"}
            className="pt-0 md:pt-5 h-16 w-32 md:h-32 md:w-auto pl-3 md:pl-0"
          />
        </div> */}
        <ul className="flex flex-row md:flex-col py-4 items-center h-full justify-end md:items-start md:justify-center w-full">
          {getDashRoutes()}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
