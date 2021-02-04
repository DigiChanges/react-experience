import dynamic from 'next/dynamic'
import {permissions} from './permissions'
const IconHome =  dynamic(() => import ('../atoms/IconHome'));
const IconDashboard = dynamic(() => import ('../atoms/IconDashboard'));
const IconRoles = dynamic(() => import ('../atoms/IconRoles'));
const IconLogout = dynamic(() => import ('../atoms/IconLogout'));

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
		isMulti: true,
		levels: [
			{
				path: '/users/create',
				name: 'Create',
				permission: permissions.USERS.SAVE
			},
			{
				path: '/users',
				name: 'List',
				icon: IconRoles,
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
				permission: permissions.ROLES.SAVE
			},
			{
				path: '/roles',
				name: 'List',
				icon: IconRoles,
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
