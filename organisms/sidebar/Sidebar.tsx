import React, {Fragment} from 'react'
import SidebarItem from '../../molecules/SidebarItem'
import { dashRoutes } from './dashRoutes';
import { useSelector } from 'react-redux';
import Title from "../../atoms/Title"

export default function Sidebar({className}) {
  
  
  // user data to get user permissions, declared to future conditions
  const {user} = useSelector( state => state.Auth );

  const getDashRoutes = () => (
    dashRoutes.map((prop, key) => {
        // TODO:
        return prop.children ? (
            <Fragment key={ key } ></Fragment>
      ) : (
        <SidebarItem 
          key={ key } 
          theKey={ key }
          name={ prop.name } 
          path={ prop.path }
          itemPerms={ prop.permission }
          userPerms={ user ? user.permissions : false }
          icon={ prop.icon ? prop.icon : false }
          levels={ prop.levels ? prop.levels : false }
        />
      )
    })
  )

  return (
    <div className={className}>
      <div className="flex flex-row md:flex-col w-full md:w-32 lg:w-48 bg-blue rounded-r-3xl overflow-hidden">
        <div className="flex items-center justify-center h-20 shadow-md">
          <Title className="text-x1 pl-3 md:pl-0 md:text-3xl uppercase text-indigo-500" titleType="h1">Logo</Title>
        </div>
        <ul className="flex flex-row md:flex-col py-4 items-center justify-end md:items-start md:justify-center w-full">
          { getDashRoutes() }
        </ul>
      </div>
    </div>
  )
} 
