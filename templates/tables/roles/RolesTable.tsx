import React, {useEffect} from "react";
import DataTable from "react-data-table-component";
import ListRolesTemplateColumns from "./ListRolesTemplateColumns";
import TableUsersStyle from "../../../assets/customStyles/TableUsersStyle";
import {getRoles} from '../../../redux/roles/actions';
import {useDispatch, useSelector} from 'react-redux';
import Title from '../../../atoms/Title';

const RolesTable = () =>
{
	const dispatch = useDispatch()
	const {rolesList} = useSelector((state : any) => state.Roles)

	useEffect(() =>
	{
		dispatch(getRoles())
	}, []);

	const getRoleRow = (id, name, slug) => ({
		id,
		name,
		slug
	})

	const getRows = () => rolesList.map(r => getRoleRow(r.id, r.name, r.slug))

	return (
		<>
			<div className="px-16 pt-20 rounded-xl">
				<Title className="text-5xl text-gray-500" titleType="h1">
					Roles
				</Title>
				{rolesList && (
					rolesList.length > 0 ? (
						<DataTable
							columns={ListRolesTemplateColumns}
							data={getRows()}
							title={false}
							striped={true}
							noHeader
							theme="DGDarkTheme"
							customStyles={TableUsersStyle}
							className="flex-col md:flex-row"
						/>
					) : (
						<p>No Roles</p>
					)
				)}
			</div>
		</>
	);
};

export default RolesTable;
