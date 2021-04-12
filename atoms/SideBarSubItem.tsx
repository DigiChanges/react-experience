import React from "react";
import Link from "next/link";

const SideBarSubItem = ({ theKey, name, path, equalPath, icon, isToggled }) => {
  const Icon: any = icon;
  return (
    <>
      <Link href={path} key={theKey}>
        <a
          className={`px-4 hover:text-blue-700 text-main-gray-100 flex flex-row items-center justify-start h-8 ${equalPath?.subEqual
            ? "text-blue-700 border-r-2 border-blue-700"
            : ""
            } cursor-pointer`}
        >
          {Icon ? (
            // <span className="md:hidden inline-flex w-8 items-center justify-center md:justify-start h-6 text-lg text-main-gray-300">
            <span className={`${isToggled ? "hidden" : ""} inline-flex w-6 items-center md:justify-start h-6 text-lg`}>
              <Icon />
            </span>
          ) : (
            <span className="inline-flex w-6 items-center justify-center h-6 text-lg " />
          )}



          <span className={`${isToggled ? "pl-10" : ""} text-sm font-bold justify-start md:justify-center pl-2`}>
            {name}
          </span>
        </a>
      </Link>
    </>
  );
};

export default SideBarSubItem;
