import Link from 'next/link'
import IconHome from '../atoms/IconHome'
import IconDashboard from '../atoms/IconDashboard'
import IconUsers from '../atoms/IconUsers'
import IconLogout from '../atoms/IconLogout'

const size = 6
const color = 'gray-500'

const SidebarItem = ({ name, path }) => {
  const icons = {
    'Home': <IconHome size={size} color={color}/>,
    'Dashboard': <IconDashboard size={size} color={color}/>,
    'Users': <IconUsers size={size} color={color}/>,
    'Logout': <IconLogout size={size} color={color}/>
  }
  return (
    <li>
      <Link href={ path }>
        <a className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
            { icons[name] }
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
