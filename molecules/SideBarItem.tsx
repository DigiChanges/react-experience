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
  const isLogoutClass = path === "/logout" ? "mt-auto" : " ";


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
            className={`flex flex-row items-center w-auto justify-start md:justify-start h-8 ${equalPath.equal
              ? "text-white border-r-2 border-blue-600"
              : "text-gray-500 hover:text-white"
              } cursor-pointer`}
          >
            {Icon ? (
              <span className={`inline-flex items-center justify-center h-8 w-8 text-lg text-main-gray-300  ${equalPath.equal
                ? "text-blue-700"
                : ""
                }`}>
                <Icon />
              </span>
            ) : (
              <span className="inline-flex items-center justify-center h-8 w-8 text-lg text-main-gray-300" />
            )}
            {isToggled
              ? (<span className="text-sm font-extrabold md:block pr-3 pl-4">
                {name}
              </span>) : null}
          </a>
        </Link>)
    }
    else {
      // palabra 'menu'
      return (<div className="text-sm font-extrabold text-xl text-main-gray-300 md:block pb-2">
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
    <li className={`w-full ${isLogoutClass} pb-1`} key={theKey}>
      {multi ? (
        <div>
          <button
            onClick={toggleMenu}
            className={` flex flex-row items-center justify-start md:justify-start pr-3 h-12  ${equalPath.equal
              ? "text-white border-r-3 border-blue-700 "
              : "text-main-gray-100 hover:text-white"
              } cursor-pointer`}
          >
            {Icon ? (
              <span className={`inline-flex items-center justify-center h-8 w-8 text-lg text-main-gray-300 ${equalPath.equal
                ? "text-blue-700"
                : ""
                }`}>
                <Icon />
              </span>
            ) : (
              <span className="inline-flex items-center justify-center h-8 w-8 text-lg text-main-gray-300" />
            )}
            {isToggled
              ? (<span className="text-sm font-extrabold md:block pr-2 pl-4">
                {name}
              </span>)
              : null}

            {open && multi ? (
              <span className="inline-flex items-center justify-end pl-1 w-6"> <IconChevronDown /> </span>
            ) : !open && multi ? (
              <span className="inline-flex items-center justify-end pl-1 w-6"> <IconChevronRight /> </span>
            ) : (
              ""
            )}
          </button>

          <div
            className={
              open
                ? "dropdown-menu w-100 flex flex-col pl-5"
                : "dropdown-menu hidden w-full"
            }
          >
            {open && multi ? getDropDownItems() : ""}
          </div>
        </div>
      ) : (getLabelOrItem(path, theKey, name, equalPath))}
    </li>
  );
};

export default SideBarItem;
