import React, {useState} from "react";
import Link from 'next/link'
import SideBarSubItem from "../atoms/SideBarSubItem";

const size = 6
const color = 'gray-500'

const SidebarItem = ({ theKey, name, path, icon, levels, itemPerms, userPerms }) => {

  // perms is declared to future conditions of show/hide content by perms

  const [open, setOpen] = useState(false);
  const multi = levels && levels.length > 0 ? true : false;
  const Icon = icon;
  // const found = itemPerms.some(r=> userPerms.permissions.indexOf(r) >= 0)


  const toggleMenu = () => {
   levels && levels.length > 0 ? setOpen(!open) : false
  }

  const getDropDownItems = () => (
   levels ? levels.map((prop, k) => {
     const SubIcon = prop.icon ? prop.icon : false;
     return <SideBarSubItem key={k} theKey={k} name={prop.name}  path={prop.path} perms={prop.perms} icon={SubIcon}/>
  }): '');

  return (
    <li className="justify-center" onClick={toggleMenu} key={theKey}>
      {multi ? (
      <div>
        <a className="flex flex-row items-center justify-center md:justify-start h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 cursor-pointer">
            {(Icon ? <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <Icon size={size} color={color}/>
            </span> : <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"></span>)}
            <span className="text-sm font-medium hidden md:block">
              { name }
            </span>
            {open && multi ? <span className="inline-flex items-center justify-end">
              -
              </span> : !open && multi ?  <span className="inline-flex items-center justify-end">
              +
              </span> : ''}
          </a>
        <div className={open ? 'dropdown-menu block' : 'dropdown-menu hidden'} >
          {open && multi ? getDropDownItems() : ''}
        </div>
      </div>
      ) : (
      <Link href={path} key={theKey}>
        <a className="flex flex-row items-center justify-center md:justify-start h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
         {(Icon ? <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
            <Icon size={size} color={color}/>
          </span> : <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"></span>)}
          <span className="text-sm font-medium hidden md:block">
            { name }
          </span>
        </a>
      </Link>
      )}
    </li>
  )
}

export default SidebarItem
