import React from "react";
import Link from "next/link";

const SideBarSubItem = ({ theKey, name, path, equalPath, icon, isToggled }) => {
  const Icon: any = icon;

  return (
    <Link href={path} key={theKey}>
      <a
        className={`w-auto flex flex-row items-center justify-center md:justify-start h-12 ${equalPath?.subEqual
          ? "text-white border-r-2 border-blue-700"
          : "text-main-gray-100 hover:text-white"
          } cursor-pointer`}
      >
        {Icon ? (
          <span className="inline-flex w-8 items-center justify-center md:justify-start h-6 text-lg text-main-gray-300">
            <Icon />
          </span>
        ) : (
          <span className="inline-flex w-12 items-center justify-center h-6 text-lg text-main-gray-300" />
        )}

        {isToggled
          ? (<span className="text-sm font-extrabold justify-start md:justify-start">
            {name}
          </span>) : null}
      </a>
    </Link>
  );
};

export default SideBarSubItem;
