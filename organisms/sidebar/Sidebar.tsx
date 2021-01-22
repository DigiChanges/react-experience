import React, {Fragment} from 'react'
import SidebarItem from '../../molecules/SidebarItem'
import { dashRoutes } from './dashRoutes'
import Title from "../../atoms/Title"

export default function Sidebar() {

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
          icon={ prop.icon }
        />
      )
    })
  )

  return (
    <div className="min-h-screen bg-black">
      <div className="flex flex-col w-16 md:w-32 lg:w-48 bg-blue rounded-r-3xl overflow-hidden">
        <div className="flex items-center justify-center h-20 shadow-md">
          <Title titleClass="text-x1 md:text-3xl uppercase text-indigo-500" titleType="h1">Logo</Title>
        </div>
        <ul className="flex flex-col py-4">
          { getDashRoutes() }
        </ul>
      </div>
    </div>
  )
} 
