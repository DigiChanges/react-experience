import React, { PropsWithChildren, useState } from "react";
import IconArrowCircleLeft from "../atoms/Icons/Solid/IconArrowCircleLeft";

interface SideBarProps extends PropsWithChildren<any> {
  className?: string
}

const SideBar : React.FC<SideBarProps> = ({ children, className }) => {
  const [isExpanded, setExpanded] = useState(true);

  let classNameUl = "flex flex-col items-center h-full md:items-start md:justify-center     pl-4 ml-1 ";

  classNameUl = isExpanded ? classNameUl : "flex flex-col items-center h-full md:items-center md:justify-center w-full";

  const getChildren = () =>
    React.Children.map(children, (child : React.ReactElement) => 
      React.cloneElement(child, {isToggled: isExpanded})
    )

  return (
    <div className={`${className} ${isExpanded ? "md:relative md:w-56" : ""}`}>
      <div className={`flex flex-row md:flex-col h-full`}>
        {/* TODO: Change image logic*/}
        <div className={classNameUl}>
          {
            isExpanded ? (
              <div className="hidden md:flex flex-row-reverse w-full">
                <button
                  onClick={() => setExpanded(false)}
                  type="button" className="right-0 w-5 text-main-gray-300 mr-3" >
                  <IconArrowCircleLeft />
                </button>
              </div>
            )
              : <div className="flex w-full ml-14 mb-8">
                <button
                  onClick={() => setExpanded(true)}
                  type="button" className="transform rotate-180 w-5 text-white" >
                  <IconArrowCircleLeft />
                </button>
              </div>
          }
          {getChildren()}
        </div>
      </div>
    </div >
  );
};

export default SideBar;
