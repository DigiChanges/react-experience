import React, { useState } from "react";
import IconBell from "../atoms/Icons/Stroke/IconBell";
import IconBurger from "../atoms/Icons/Stroke/IconBurger";
import IconChevronDown from "../atoms/Icons/Stroke/IconChevronDown";
import IconCross from "../atoms/Icons/Stroke/IconCross";
import Image from "../atoms/Image";

const NavBar = ({ email, onClick, showSidebar }): any => {
  const [toggledDrop, toggleDrop] = useState(false);

  return (
    <nav className=" shadow-md text-white " >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-start justify-start sm:items-stretch sm:justify-start">

            <div className="flex-shrink-0 flex items-center  cursor-pointer">
              <a href="/"> <Image image={"/logonav.png"} alt="" className="block h-8 w-auto" /></a>
            </div>
            <a href="/"> <div className="block ml-4 mt-1 text-main-gray-300 font-extrabold">DIGICHANGES</div></a>
          </div>
          <div className="absolute flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white h-8 w-8 hidden md:block lg:block">
              <span className="sr-only">View notifications</span>
              <span>
                <span className="ml-1 animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-600 opacity-75 "/>
                <span className="ml-1 absolute inline-flex rounded-full h-2 w-2 bg-blue-500"/>
                <span className=""><IconBell /></span>
              </span>
            </button>
          </div>

          <div className="hidden md:block lg:block ml-3 text-main-gray-200 font-bold">
            <div>
              {
                toggledDrop ? (
                  <button
                    type="button"
                    className="inline-flex bg-gray-800 flex rounded-full font-bold"
                    id="user-menu"
                    aria-expanded="false"
                    arias-haspopup="true"
                    onClick={() => toggleDrop(false)}>
                    <span className="sr-only">Open user menu</span>
                    <span>{email ?? ''}</span><span className="flex flex-row justify-end w-6"><IconChevronDown /></span>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="inline-flex bg-gray-800 flex rounded-full font-bold"
                    id="user-menu"
                    aria-expanded="false"
                    arias-haspopup="true"
                    onClick={() => toggleDrop(true)}>
                    <span className="sr-only">Open user menu</span>
                    <span>{email ?? ''}</span><span className="text-gray flex flex-row justify-end w-6"><IconChevronDown /></span>
                  </button>
                )
              }
            </div>


            {/* TODO: corregir dropdown, atomizar, etc */}
            <div className={`${toggledDrop ? null : (`hidden`)} origin-top-right absolute right-0 w-48 py-1 mt-5 shadow-md bg-main-gray-500 text-white`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu">
              <div role="none">
                <a href="/" className="block px-4 py-2 text-sm" role="menuitem">Item 1</a>
                <a href="/" className="block px-4 py-2 text-sm active" role="menuitem">Item 1 active</a>
                <form method="POST" action="/" role="none">
                  <button type="submit" className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                    Sign out?
                </button>
                </form>
              </div>
            </div>
          </div>


          <div className="absolute inset-y-0 p-3 right-0 flex items-center md:hidden">
            <button
              onClick={onClick}
              type="button" className="inline-flex items-center justify-center rounded-md text-gray-400 hover:text-white w-6 h-6" >
              <span className="sr-only">Open Main Menu</span>
              {showSidebar ? (
                <IconBurger />
              ) : (
                <IconCross />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav >
  )
}

export default NavBar;
