import React from 'react';
import Link from 'next/link';

const size = 4
const color = 'gray-500'

const SideBarSubItem = ({theKey, name, path, perms, icon}) => { 

// perms is declared to future conditions of show/hide content by perms

     const Icon = icon;
    return (
        <Link href={ path } key={theKey}>
         <a className="flex flex-row items-center justify-center md:justify-end h-6 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-400 hover:text-gray-600">
         {(Icon ? <span className="inline-flex items-center justify-center h-6 w-12 text-lg text-gray-300">
            <Icon size={size} color={color}/>
          </span> : <span className="inline-flex items-center justify-center h-6 w-12 text-lg text-gray-300"></span>)}
          <span className="text-sm font-medium hidden md:block justify-end">
            { name }
          </span>
        </a>
     </Link>
    )
}

export default SideBarSubItem;