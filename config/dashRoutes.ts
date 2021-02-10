import dynamic from 'next/dynamic'
import {permissions} from './permissions'

const IconHome = dynamic(() => import ('../atoms/Icons/IconHome'));
const IconDashboard = dynamic(() => import ('../atoms/Icons/IconDashboard'));
const IconRoles = dynamic(() => import ('../atoms/Icons/IconRoles'));
const IconLogout = dynamic(() => import ('../atoms/Icons/IconLogout'));
const IconEye = dynamic(() => import ('../atoms/IconEye'));
const IconPlus = dynamic(() => import ('../atoms/IconPlus'));

export const dashRoutes = [
	{
		path: '/dashboard',
		name: 'Dashboard',
		icon: IconHome,
		permission: 'Dashboard'
	},
	{
		path: '/users',
		name: 'Users',
		icon: IconDashboard,
		permission: permissions.USERS.LIST,
		levels: [
			{
				path: '/users/create',
				name: 'Create',
				icon: IconPlus,
				permission: permissions.USERS.SAVE
			},
			{
				path: '/users',
				name: 'List',
				icon: IconEye,
				permission: permissions.USERS.LIST
			}
		]
	},
	{
		path: '/roles',
		name: 'Roles',
		icon: IconRoles,
		permission: permissions.ROLES.LIST,
		levels: [
			{
				path: '/roles/create',
				name: 'Create',
				icon: IconPlus,
				permission: permissions.ROLES.SAVE
			},
			{
				path: '/roles',
				name: 'List',
				icon: IconEye,
				permission: permissions.ROLES.LIST
			}
		]
	},
	{
		path: '/logout',
		name: 'Logout',
		icon: IconLogout,
		permission: 'Logout'
	}
];
