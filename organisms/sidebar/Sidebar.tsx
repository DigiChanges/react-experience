
import SidebarItem from '../../molecules/SidebarItem'
import { dashRoutes } from './dashRoutes'

export default function Sidebar() {

  const getDashRoutes = () => (
    dashRoutes.map((prop, key) => {
      return prop.childs ? (
        //todo
        <></>
      ) : (
        <SidebarItem 
          key={ key } 
          name={ prop.name } 
          path={ prop.path }
        />
      )
    })
  )

  return (
    <div className="min-h-screen">
      <div className="flex flex-col w-56 bg-blue rounded-r-3xl overflow-hidden">
        <div className="flex items-center justify-center h-20 shadow-md">
          <h1 className="text-3xl uppercase text-indigo-500">Logo</h1>
        </div>
        <ul className="flex flex-col py-4">
          { getDashRoutes() }
        </ul>
      </div>
    </div>
  )
} 
