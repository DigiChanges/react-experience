import React from "react";
import Link from "next/link";

const size = 4;
const color = "gray-500";

const SideBarSubItem = ({ theKey, name, path, equalPath, icon }) => {
  const Icon: any = icon;

  return (
    <Link href={path} key={theKey}>
      <a
        className={`w-full flex flex-row items-center justify-center md:justify-start h-12  ${
          equalPath?.subEqual
            ? "text-white border-r-2 border-blue-700"
            : "text-gray-500 hover:text-white"
        } cursor-pointer`}
      >
        {Icon ? (
          <span className="inline-flex w-8 items-center justify-center md:justify-start h-6  text-lg text-gray-300">
            <Icon size={size} color={color} />
          </span>
        ) : (
          <span className="inline-flex w-8 items-center justify-center h-6 w-12 text-lg text-gray-300" />
        )}

        <span className="text-sm font-medium hidden md:block justify-start md:justify-start">
          {name}
        </span>
      </a>
    </Link>
  );
};

export default SideBarSubItem;
