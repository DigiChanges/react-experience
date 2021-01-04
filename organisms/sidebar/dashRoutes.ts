
export const dashRoutes = [
  //Ask to Nathan
	// { 
	// 	path: '/', 
	// 	name: 'Home', 
	// },
	{ 
		path: '/dashboard', 
		name: 'Dashboard', 
	},
	{ 
		path: '/users', 
		name: 'Users', 
	},
  { 
    //TODO paths with childs
    path: '/reports', name: 'Reports', childs: [
      { path: '/report1', name: 'report1' },
			{ path: '/report2', name: 'report2' },
			{ path: '/report3', name: 'report3' }
    ] 
  },
  { 
		path: '/logout', 
		name: 'Logout', 
	}
]
