import React, { useState } from "react";
import Link from "next/link";
import SideBarSubItem from "../atoms/SideBarSubItem";
import { ADMIN } from "../config/permissions";
import IconChevronDown from "../atoms/Icons/Stroke/IconChevronDown";
import IconChevronRight from "../atoms/Icons/Stroke/IconChevronRight";

const SideBarItem = ({
  theKey,
  name,
  path,
  equalPath,
  icon,
  levels,
  user,
  userPermissions,
  isLoading,
  isToggled,
}) => {
  const [open, setOpen] = useState(false);
  const multi = levels && levels.length > 0;
  const Icon: any = icon;
  const isLogoutClass = path === "/logout" ? "mt-auto pb-8" : " ";


  const hasPermission = (permission, user) =>
    (userPermissions && user?.roles && userPermissions.includes(permission)) ||
    user?.roles.find((role) => role.slug === ADMIN);

  const toggleMenu = () => {
    levels && levels.length > 0 ? setOpen(!open) : false;
  };

  const getLabelOrItem = (path, theKey, name, equalPath) => {
    if (path) {
      return (
        <Link href={path} key={theKey}>
          <a
            className={`flex flex-row items-center w-auto text-gray-500
              hover:text-blue-500 hover:border-blue-500 border-r-2 border-gray-800
              h-8 ${equalPath.equal
                ? "text-blue-700 border-blue-700"
                : "text-gray-500 border-gray-800"
              } cursor-pointer`}
          >
            {Icon ? (
              <span className={`${!isToggled ? "ml-3" : ""} inline-flex items-center justify-center h-8 w-6 text-lg `}>
                <Icon />
              </span>
            ) : (
              <span className="inline-flex items-center justify-center h-8 w-6 text-lg " />
            )}
            {isToggled
              ? (<span className="text-sm font-bold md:block pr-3 pl-4">
                {name}
              </span>) : null}
          </a>
        </Link>)
    }
    else {
      // 'menu'
      return (<div className={`${isToggled ? "block" : "hidden"} ml-1 text-sm font-bold text-main-gray-100 text-start mb-2 mr-2`}>
        {name}
      </div>)
    }

  }

  const getDropDownItems = () =>
    levels
      ? levels.map((prop, k) => {
        isLoading && open ? setOpen(!open) : "";
        const SubIcon = prop?.icon ? prop.icon : false;
        return (
          hasPermission(prop.permission, user) && (
            <SideBarSubItem
              key={k}
              theKey={k}
              name={prop.name}
              path={prop.path}
              equalPath={
                equalPath.currentPath == prop.path
                  ? { subEqual: true, subCurrentPath: equalPath.currentPath }
                  : false
              }
              icon={SubIcon}
              isToggled={isToggled}
            />
          )
        );
      })
      : "";

  return (

    <div className={`${isToggled ? "" : "pl-4 mx-1"}  w-full ${isLogoutClass}`} key={theKey}>
      {multi ? (
        <>
          <button
            onClick={toggleMenu}
            className={`
            w-full focus:outline-none hover:text-blue-500 hover:border-blue-500 border-r-2 border-gray-800 flex flex-row items-center h-8
            ${open ? "text-blue-500 hover:text-blue-500 hover:border-blue-500" : "text-main-gray-100"}
            ${equalPath.equal
                ? "text-blue-700 border-blue-700"
                : ""
              }`}
          >
            {Icon ? (
              <span className={`${!isToggled ? "ml-3" : ""} inline-flex items-center h-8 w-6 text-lg`}>
                <Icon />
              </span>
            ) : (
              <span className=" inline-flex items-center justify-center h-8 w-6 text-lg" />
            )}
            {isToggled
              ? (<span className="text-sm font-bold md:block pr-2 pl-4">
                {name}
              </span>)
              : null}

            {open && multi ? (
              // si esta compactado esto no se ve
              <span className={`${isToggled ? "" : "hidden"} inline-flex ml-auto mr-3 pl-1 w-6`}> <IconChevronDown /> </span>
            ) : !open && multi ? (
              <span className={`${isToggled ? "" : "hidden"} inline-flex ml-auto mr-3 pl-1 w-6`}> <IconChevronRight /></span>
            ) : (
              ""
            )}
            {multi && open && !isToggled ? (<div className="bg-gray-800 absolute ml-15 mt-8 pl-2">{getDropDownItems()}</div>) : null}
          </button>

          <div
            className={`
            ${open ? `text-main-gray-100` : `hidden w-full`}
            ${open && isToggled ? `w-max flex flex-col ` : `ml-10`}
            `}
          >
            {multi && isToggled ? getDropDownItems() : ""}
          </div>
        </>
      ) : (getLabelOrItem(path, theKey, name, equalPath))}
    </div>
  );
};

export default SideBarItem;
