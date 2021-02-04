import React, {Fragment} from 'react';
import SideBarItem from '../../molecules/SideBarItem';
import {dashRoutes} from '../../config/dashRoutes';
import {ADMIN} from "../../config/permissions";
import {useSelector} from 'react-redux';
import Title from "../../atoms/Title"

const SideBar = ({className}) =>
{
	const {userPermissions, user} = useSelector(store => store.Auth);

	const hasPermission = (permission, user) => userPermissions &&
		user?.roles &&
		userPermissions.includes(permission) ||
		user?.roles.find((role) => role.slug === ADMIN);

	const getDashRoutes = () => (
		dashRoutes.map((prop, key) =>
		{
			// @ts-ignore
			return prop.children ? (
				<Fragment key={key}/>
			) : (
				hasPermission(prop.permission, user) && <SideBarItem
                    key={key}
                    theKey={key}
                    name={prop.name}
                    path={prop.path}
                    userPermissions={userPermissions}
                    user={user}
                    icon={prop.icon ? prop.icon : false}
                    levels={prop.levels ? prop.levels : false}
                />
			)
		})
	);

	return (
		<div className={className}>
			<div className="flex flex-row md:flex-col w-full md:w-32 lg:w-48 bg-blue rounded-r-3xl overflow-hidden">
				<div className="flex items-center justify-center h-20 shadow-md">
					<Title className="text-x1 pl-3 md:pl-0 md:text-3xl uppercase text-indigo-500"
						   titleType="h1">Logo</Title>
				</div>
				<ul className="flex flex-row md:flex-col py-4 items-center justify-end md:items-start md:justify-center w-full">
					{getDashRoutes()}
				</ul>
			</div>
		</div>
	);
}

export default SideBar;
