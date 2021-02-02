import React, {Fragment} from 'react'
import SidebarItem from '../../molecules/SidebarItem'
import { dashRoutes } from './dashRoutes'
import Title from "../../atoms/Title"

export default function Sidebar({className}) {

  const getDashRoutes = () => (
    dashRoutes.map((prop, key) => {
        // TODO:
        return prop.children ? (
            <Fragment key={ key } ></Fragment>
      ) : (
        <SidebarItem 
          key={ key } 
          name={ prop.name } 
          path={ prop.path }
          icon={ prop.icon ? prop.icon : false }
          isMulti={ prop.isMulti ? prop.isMulti : false }
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
