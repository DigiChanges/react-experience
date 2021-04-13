import React from "react";
import Link from "next/link";

const SideBarSubItem = ({ theKey, name, path, equalPath, icon, isToggled }) => {
  const Icon: any = icon;
  return (
    <>
      <Link href={path} key={theKey}>
        <a
          className={` border-r-2 border-main-gray-600 hover:border-blue-500 hover:text-blue-500 flex flex-row items-center justify-start h-8 ${equalPath.equal
            ? "text-blue-700 border-blue-700"
            : "text-gray-500 border-main-gray-600"
            }`}
        >
          {Icon ? (
            <span className={`${isToggled ? "hidden" : ""} inline-flex w-6 items-center md:justify-start h-6 text-lg`}>
              <Icon />
            </span>
          ) : (
            <span className="inline-flex w-6 items-center justify-center h-6 text-lg " />
          )}



          <span className={`${!isToggled ? "px-4" : "pl-10"} text-sm font-bold justify-start md:justify-center pl-2 `}>
            {name}
          </span>
        </a>
      </Link>
    </>
  );
};

export default SideBarSubItem;
