import React, {useEffect} from "react";
import DataTable from "react-data-table-component";
import ListUsersTemplateColumns from "./ListUsersTemplateColumns";
import TableUsersStyle from "../../../assets/customStyles/TableUsersStyle";

const UsersTable = ({usersList, query}) =>
{
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
