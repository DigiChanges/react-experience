import React, {useState} from "react";
import Link from 'next/link'

const size = 6
const color = 'gray-500'

const SidebarItem = ({ name, path, icon, isMulti, levels }) => {

  const [open, setOpen] = useState(false);
  const Icon = icon;

  const toggleMenu = () => {
    isMulti ? setOpen(!open) : false
  }

  const getDropDownItems = () => (
   levels ? levels.map((prop, key) => {
     const SubIcon = prop.icon ? prop.icon : false;
     return <Link href={ prop.path } key={ key }>
        <a className="flex flex-row items-center justify-center md:justify-end h-6 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-400 hover:text-gray-600">
        {(SubIcon ? <span className="inline-flex items-center justify-center h-6 w-12 text-lg text-gray-300">
           <SubIcon size={4} color={color}/>
         </span> : <span className="inline-flex items-center justify-center h-6 w-12 text-lg text-gray-300"></span>)}
         <span className="text-sm font-medium hidden md:block justify-end">
           { prop.name }
         </span>
       </a>
    </Link>
  }): '');

  return (
    <li className="justify-center" onClick={toggleMenu}>
      <Link href={ path }>
        <a className="flex flex-row items-center justify-center md:justify-start h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
         {(Icon ? <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
            <Icon size={size} color={color}/>
          </span> : <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"></span>)}
          <span className="text-sm font-medium hidden md:block">
            { name }
          </span>
          {open && isMulti ? <span className="inline-flex items-center justify-end">
            -
            </span> : !open && isMulti ?  <span className="inline-flex items-center justify-end">
            +
            </span> : ''}
        </a>
      </Link>
      <div className={open ? 'dropdown-menu block' : 'dropdown-menu hidden'} >
        {open && isMulti ? getDropDownItems() : 'No dropdown'}
      </div>
    </li>
  )
}

export default SidebarItem
