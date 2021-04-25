import React, { useState } from "react";
import Link from "next/link";
import IconChevronDown from "../atoms/Icons/Stroke/IconChevronDown";
import IconChevronRight from "../atoms/Icons/Stroke/IconChevronRight";

interface SideBarItemProps extends React.PropsWithChildren<any> {
  name : string,
  path : string,
  icon? : any,
  isToggled? : boolean,
  isLoading?: boolean
}

const SideBarItem : React.FC<SideBarItemProps> = ({
  children,
  name,
  path,
  icon,
  isToggled,
  isLoading
}) => {
  const [open, setOpen] = useState(false);

  const levels = React.Children.toArray(children)
  const multi = levels && levels.length > 0;
  const Icon: any = icon;
  const isLogoutClass = path === "/logout" ? "mt-auto pb-8" : " ";

  const toggleMenu = () => {
    levels && levels.length > 0 ? setOpen(!open) : false;
  };

  const getLabelOrItem = (path, name, equalPath) => {
    if (path) {
      return (
        <Link href={path}>
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
      ? React.Children.map(children, (child : React.ReactElement) => {
        isLoading && open ? setOpen(!open) : "";
        return (
          React.cloneElement(child, {isToggled})
        )
      })
      : "";

  return (
    <div className={`${isToggled ? "" : "pl-4 mx-1"}  w-full ${isLogoutClass}`}>
      {multi ? (
        <>
          <button
            onClick={toggleMenu}
            className={`
            w-full focus:outline-none hover:text-blue-500 hover:border-blue-500 border-r-2 border-gray-800 flex flex-row items-center h-8
            ${open ? "text-blue-500 hover:text-blue-500 hover:border-blue-500" : "text-main-gray-100"}`}
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
            ${open && isToggled ? `w-full flex flex-col ` : `ml-10`}
            `}
          >
            {multi && isToggled ? getDropDownItems() : ""}
          </div>
        </>
      ) : (getLabelOrItem(path, name, false /* equalPath */))}
    </div>
  );
};

export default SideBarItem;
