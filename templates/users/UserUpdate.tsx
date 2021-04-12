import React from "react";
import {Field, Formik, Form} from "formik";
import Select from "../../atoms/Select";
import Router from "next/router";
import {useDispatch} from 'react-redux'
import {updateUser} from '../../redux/users/actions';
import Title from "../../atoms/Title"
import Button from "../../atoms/Button";
import Label from "../../atoms/Label";

const UpdateUser = ({userSelected, rolesList, permissions}): any =>
{
	const dispatch = useDispatch(); // Remove it

	const STATES = [
		{label: 'Enabled', value: 1},
		{label: 'Disabled', value: 0},
	];

	const getUserInitialState = () => (userSelected.enable ? STATES[0] : STATES[1]);

	const getUserInitialRoles = () =>
	{
		const roles = getRolesList();

		return userSelected && userSelected.roles.map((userRole) =>
		{
			return roles.find((role) => userRole.name === role.label);
		});
	};

	const getUserInitialPerms = () => (
		userSelected.permissions && userSelected.permissions.length > 0
			? userSelected.permissions.map((label, value) => ({label, value}))
			: []
	);
	const getPermissionsList = () => (
		permissions && permissions.length > 0
			? permissions.map((label, value) => ({label, value}))
			: []
	);
	const getRolesList = () => (
		rolesList && rolesList.length > 0
			? rolesList.map((label, value) => ({label: label.name, value, id: label.id}))
			: []
	);

	const formatPerms = (perms) => (
		perms && perms.length > 0
			? perms.map(label => (
				label.label
			))
			: []
	);

	const formatRoles = (role) => (
		role && role.length > 0
			? role.map(label => (
				label.id
			))
			: []
	);

	return (
		<section className="text-gray-500 body-font bg-gray-900 w-128 flex ">
			<div className="w-full">
				<div className="text-4xl mb-2">
					<Title className="text-left" titleType="h1">Update User</Title>
				</div>
				<div className="bg-gray-800 p-6  border-teal border-t-12  mb-6 rounded-lg shadow-lg">
					{userSelected ? (
						<Formik
							initialValues={{
								firstName: userSelected.firstName,
								lastName: userSelected.lastName,
								email: userSelected.email,
								roles: getUserInitialRoles(),
								permissions: getUserInitialPerms(),
								enable: getUserInitialState(),
							}}
							onSubmit={async (values) =>
							{
								//TODO enable
								const {firstName, lastName, email, permissions, roles, enable} = values
								const newPerms = formatPerms(permissions)
								const newRoles = formatRoles(roles)
								dispatch(
									updateUser(
										userSelected.id,
										firstName,
										lastName,
										email,
										newPerms,
										newRoles,
										!!enable.value
									)
								)
							}}
						>
							{(): any => (
								<Form>
									<div
										className="flex flex-col  bg-gray-800 rounded-lg border-teal border-t-12 shadow-lg">
										<div className="mb-4">
											<Label htmlFor="firstName" className="font-bold text-gray-400 block mb-2">
												First Name
											</Label>
											<Field
												name="firstName"
												type="text"
												id="firstName"
												className="w-full bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base hover:border-grey px-2 py-2 rounded shadow"
												placeholder="FirstName"
											/>
										</div>
										<div className="mb-4">
											<Label htmlFor="lastName" className="font-bold text-gray-400 block mb-2">
												Last Name
											</Label>
											<Field
												name="lastName"
												type="text"
												id="lastName"
												className="w-full bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base hover:border-grey px-2 py-2 rounded shadow"
												placeholder="lastName"
											/>
										</div>
										<div className="mb-1">
											<Label htmlFor="email" className="font-bold text-gray-400 block mb-2">
												Email
											</Label>
											<Field
												name="email"
												type="text"
												id="email"
												className="w-full bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base hover:border-grey px-2 py-2 rounded shadow"
												placeholder="email"
											/>
										</div>

										<div className="mb-4 ">
											<Label htmlFor="enable" className="font-bold text-gray-400 block mb-2">
												State
											</Label>
											<Field
												name="enable"
												id="enable"
												component={Select}
												items={STATES}
												primary25="#4a5568"
												primary="#667eea"
												neutral0="#2d3748"
												neutral20="#4a5568"
												neutral50="#a0aec0"
												neutral80="#fff"
												neutral10="#4a5568"
												neutral30="#667eea"
												primary50="#718096"
												danger="#a0aec0"
												dangerLight="#1a202c"
											/>
										</div>
										<div className="mb-4">
											<Label htmlFor="roles" className="font-bold text-gray-400 block mb-2">
												Roles
											</Label>
											<Field
												name="roles"
												id="roles"
												isMulti
												component={Select}
												items={getRolesList()}
												primary25="#4a5568"
												primary="#667eea"
												neutral0="#2d3748"
												neutral20="#4a5568"
												neutral50="#a0aec0"
												neutral80="#fff"
												neutral10="#4a5568"
												neutral30="#667eea"
												primary50="#718096"
												danger="#a0aec0"
												dangerLight="#1a202c"
											/>
										</div>
										<div className="mb-4">
											<Label htmlFor="permissions" className="font-bold text-gray-400 block mb-2">
												Permissions
											</Label>
											<Field
												name="permissions"
												id="permissions"
												component={Select}
												items={getPermissionsList()}
												isMulti
												primary25="#4a5568"
												primary="#667eea"
												neutral0="#2d3748"
												neutral20="#4a5568"
												neutral50="#a0aec0"
												neutral80="#fff"
												neutral10="#4a5568"
												neutral30="#667eea"
												primary50="#718096"
												danger="#a0aec0"
												dangerLight="#1a202c"
											/>
										</div>
									</div>
									<div className="flex justify-evenly mt-8">
										<Button
											className="flex shadow-kx1 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg text-center"
											buttonType="button"
											onClick={() => Router.push("/users")}
										>
											<span className="mr-2">Back</span>
										</Button>
										<Button
											className="flex shadow-kx1 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center"
											buttonType="submit"
										>
											Save
										</Button>
									</div>
								</Form>
							)}
						</Formik>
					) : <p>No user selected</p>}
				</div>
			</div>
		</section>
	);
};

export default UpdateUser;
