import dynamic from 'next/dynamic'
import {permissions} from './permissions'

const IconHome = dynamic(() => import ('../atoms/Icons/Stroke/IconHome'));
const IconLogout = dynamic(() => import ('../atoms/Icons/Stroke/IconLogout'));
const IconPlus = dynamic(() => import ('../atoms/Icons/Stroke/IconPlus'));
const IconUsers = dynamic(() => import ('../atoms/Icons/Stroke/IconUsers'));
const IconViewList = dynamic(() => import ('../atoms/Icons/Stroke/IconViewList'));
const IconCog = dynamic(() => import ('../atoms/Icons/Stroke/IconCog'));

export const dashRoutes = [
	{
		path: null,
		name: 'Menu',
		icon: null,
		permission: null
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		icon: IconHome,
		permission: 'Dashboard'
	},
	{
		path: '/users',
		name: 'Users',
		icon: IconUsers,
		permission: permissions.USERS.LIST,
		levels: [
			{
				path: '/users/create',
				name: 'Create',
				icon: IconPlus,
				permission: permissions.USERS.SAVE
			},
			{
				path: '/users/list',
				name: 'List',
				icon: IconViewList,
				permission: permissions.USERS.LIST
			}
		]
	},
	{
		path: '/roles',
		name: 'Roles',
		icon: IconCog,
		permission: permissions.ROLES.LIST,
		levels: [
			{
				path: '/roles/create',
				name: 'Create',
				icon: IconPlus,
				permission: permissions.ROLES.SAVE
			},
			{
				path: '/roles/list',
				name: 'List',
				icon: IconViewList,
				permission: permissions.ROLES.LIST
			}
		]
	},
	{
		path: '/logout',
		name: 'Logout',
		icon: IconLogout,
		permission: permissions.USERS.LIST
	}
];
