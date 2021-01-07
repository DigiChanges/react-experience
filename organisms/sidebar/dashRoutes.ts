import dynamic from 'next/dynamic'

const IconHome =  dynamic(() => import ('../../atoms/IconHome'));
const IconDashboard = dynamic(() => import ('../../atoms/IconDashboard'));
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
		permission: 'usersList'
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
