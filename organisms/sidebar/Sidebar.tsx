import IconHome from '../../atoms/IconHome'
import IconDashboard from '../../atoms/IconDashboard'
import IconUsers from '../../atoms/IconUsers'
import IconLogout from '../../atoms/IconLogout'

const size = 6
const color = 'gray-500'

const DASH_ROUTES = [
	{ 
		path: '/', 
		name: 'Home', 
		icon: <IconHome size={size} color={color}/>
	},
	{ 
		path: '/dashboard', 
		name: 'Dashboard', 
		icon: <IconDashboard size={size} color={color}/> 
	},
	{ 
		path: '/users', 
		name: 'Users', 
		icon: <IconUsers size={size} color={color}/> 
	},
  { 
    path: '/reports', name: 'Reports', icon: null, childs: [
      { path: '/report1', name: 'report1', icon: null },
			{ path: '/report2', name: 'report2', icon: null },
			{ path: '/report3', name: 'report3', icon: null }
    ] 
  },
  { 
		path: '/logout', 
		name: 'Logout', 
		icon: <IconLogout size={size} color={color}/>  
	}
]

export default function Sidebar() {

  const menu = []
  DASH_ROUTES.forEach((prop, key) => {
    if (prop.childs) {
			//TODO with dropdown
    } else {
      menu.push(
        <li key={ key }>
          <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
							{ prop.icon }
						</span>
            <span className="text-sm font-medium">{ prop.name }</span>
          </a>
        </li>
      )
    }
  })  

  return (
    // <div style={{
    //   position:'fixed',
    //   top: '0',
    //   left: '-30%',
    //   width: '68px',
    //   height: '100vh',
    //   backgroundColor: '#881090',
    //   padding: '.5rem 1rem 0 0',
    //   transition: '.5s',
    //   zIndex: 100
    // }}>

    //   <nav classNameName='h-full flex flex-col justify-between overflow-hidden'>
    //     <div>

    //     </div>
    //   </nav>
    // </div>



    <div className="min-h-screen">
      <div className="flex flex-col w-56 bg-blue rounded-r-3xl overflow-hidden">
        <div className="flex items-center justify-center h-20 shadow-md">
          <h1 className="text-3xl uppercase text-indigo-500">Logo</h1>
        </div>
        <ul className="flex flex-col py-4">
          { menu }
          {/* <li>
            <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
              <span className="text-sm font-medium">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-music"></i></span>
              <span className="text-sm font-medium">Music</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-drink"></i></span>
              <span className="text-sm font-medium">Drink</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-shopping-bag"></i></span>
              <span className="text-sm font-medium">Shopping</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-chat"></i></span>
              <span className="text-sm font-medium">Chat</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-user"></i></span>
              <span className="text-sm font-medium">Profile</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-bell"></i></span>
              <span className="text-sm font-medium">Notifications</span>
              <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-log-out"></i></span>
              <span className="text-sm font-medium">Logout</span>
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  )
} 
