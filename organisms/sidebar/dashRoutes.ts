import dynamic from 'next/dynamic'
import {permissions} from './permissions'
const IconHome =  dynamic(() => import ('../../atoms/IconHome'));
const IconDashboard = dynamic(() => import ('../../atoms/IconDashboard'));
const IconRoles = dynamic(() => import ('../../atoms/IconRoles'));
const IconLogout = dynamic(() => import ('../../atoms/IconLogout'));

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
		permission: permissions.USERS_LIST,
		isMulti: true,
		levels: [
			{
				path: '/users/create',
				name: 'Create User',
				permission: permissions.USERS_LIST
			},
			{
				path: '/users',
				name: 'View Users',
				icon: IconRoles,
				permission: permissions.USERS_LIST
			}
		]
	},
	{
		path: '/roles',
		name: 'Roles',
		icon: IconRoles,
		permission: permissions.ROLES_LIST
	},
  {
    //TODO paths with children
    path: '/reports', name: 'Reports', children: [
      { path: '/report1', name: 'report1' },
			{ path: '/report2', name: 'report2' },
			{ path: '/report3', name: 'report3' }
    ]
  },
  {
		path: '/logout',
		name: 'Logout',
		icon: IconLogout,
		permission: ''
	}
];
