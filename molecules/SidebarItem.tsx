import React from "react";
import Link from 'next/link'

const size = 6
const color = 'gray-500'

const SidebarItem = ({ name, path, icon }) => {

  const Icon = icon;

  return (
    <li>
      <Link href={ path }>
        <a className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
            <Icon size={size} color={color}/>
          </span>
          <span className="text-sm font-medium">
            { name }
          </span>
        </a>
      </Link>
    </li>
  )
}

export default SidebarItem
