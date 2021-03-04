import React, { useState } from "react";
import Link from "next/link";
import SideBarSubItem from "../atoms/SideBarSubItem";
import { ADMIN } from "../config/permissions";
import { useRouter } from "next/router";

const size = 6; // TODO: Change config style
const color = "gray-500"; // TODO: Change config style

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
}) => {
  const router = useRouter();
  console.log("Caminito", router.pathname === path);
  const [open, setOpen] = useState(false);
  const multi = levels && levels.length > 0;
  const Icon: any = icon;

  const hasPermission = (permission, user) =>
    (userPermissions && user?.roles && userPermissions.includes(permission)) ||
    user?.roles.find((role) => role.slug === ADMIN);

  const toggleMenu = () => {
    levels && levels.length > 0 ? setOpen(!open) : false;
  };

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
              />
            )
          );
        })
      : "";

  return (
    <li className="justify-center w-full" key={theKey}>
      {multi ? (
        <div>
          <a
            onClick={toggleMenu}
            href="#"
            className={`w-full flex flex-row items-center justify-center md:justify-start h-12  ${
              equalPath.equal
                ? "text-white border-r-3 border-blue-700 "
                : "text-gray-500 hover:text-white"
            } cursor-pointer`}
          >
            {Icon ? (
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <Icon size={size} color={color} />
              </span>
            ) : (
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400" />
            )}

            <span className="text-sm font-medium hidden md:block">{name}</span>

            {open && multi ? (
              <span className="inline-flex items-center justify-end">-</span>
            ) : !open && multi ? (
              <span className="inline-flex items-center justify-end">+</span>
            ) : (
              ""
            )}
          </a>

          <div
            className={
              open
                ? "dropdown-menu block w-100 flex flex-col pl-5"
                : "dropdown-menu hidden w-full"
            }
          >
            {open && multi ? getDropDownItems() : ""}
          </div>
        </div>
      ) : (
        <Link href={path} key={theKey}>
          <a
            className={`flex flex-row items-center justify-center md:justify-start h-12 ${
              equalPath.equal
                ? "text-white border-r-2 border-blue-600"
                : "text-gray-500 hover:text-white"
            } cursor-pointer`}
          >
            {Icon ? (
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <Icon size={size} color={color} />
              </span>
            ) : (
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400" />
            )}
            <span className="text-sm font-medium hidden md:block">{name}</span>
          </a>
        </Link>
      )}
    </li>
  );
};

export default SideBarItem;
