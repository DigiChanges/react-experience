import React, {useEffect} from "react";
import DataTable from "react-data-table-component";
import ListUsersTemplateColumns from "./ListUsersTemplateColumns";
import TableUsersStyle from "../../../assets/customStyles/TableUsersStyle";
import {getUsers} from '../../../redux/users/actions';
import {useDispatch, useSelector} from 'react-redux';
import Title from '../../../atoms/Title';

const UsersTable = () =>
{

	const dispatch = useDispatch()
	const {usersList} = useSelector(state => state.Users);

	useEffect(() =>
	{
		dispatch(getUsers());
	}, []);

	const mapRoles = roles =>
	{
		if (roles && roles.length > 0)
		{
			let rolesData = ''
			roles.map(role =>
			{
				rolesData = rolesData.concat(`${role.name} `)
			})
			return rolesData
		}
		return ''
	}

	const getUserRow = (id, firstName, lastName, email, roles) => ({
		id,
		firstName,
		lastName,
		email,
		rolesData: mapRoles(roles)
	})

	const getRows = () => usersList.map(u => getUserRow(u.id, u.firstName, u.lastName, u.email, u.roles))

	return (
		<>
			<div className="pt-2 rounded-xl">
				<Title className="text-5xl text-gray-500" titleType="h1">
					Users
				</Title>
				{usersList && (
					usersList.length > 0 ? (
						<DataTable
							columns={ListUsersTemplateColumns}
							data={getRows()}
							title={false}
							striped={true}
							noHeader
							theme="DGDarkTheme"
							customStyles={TableUsersStyle}
							className="flex-col md:flex-row"
						/>
					) : (
						<p>No Users</p>
					)
				)}
			</div>
		</>
	);
};

export default UsersTable;
