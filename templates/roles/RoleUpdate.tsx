import React, {useEffect} from "react";
import {Field, Formik, Form} from "formik";
import Select from "../../atoms/Select";
import Router from "next/router";
import {useDispatch, useSelector} from 'react-redux'
import {updateRole, unselectedRole} from '../../redux/roles/actions';
import Title from "../../atoms/Title"
import Button from "../../atoms/Button";
import Label from "../../atoms/Label";

const RoleUpdate = (): any =>
{
	const dispatch = useDispatch()
	const {roleSelected} = useSelector(state => state.Roles)
	const {permissions} = useSelector(store => store.Auth)

	useEffect(() =>
	{
		//unmount component
		return () =>
		{
			dispatch(unselectedRole())
		}
	}, [])

	const STATES = [
		{label: 'Enabled', value: 1},
		{label: 'Disabled', value: 0},
	]

	const getRoleInitialState = () => (roleSelected.enable ? STATES[0] : STATES[1])

	const getRoleInitialPerms = () => (
		roleSelected.permissions && roleSelected.permissions.length > 0
			? roleSelected.permissions.map((label, value) => ({label, value}))
			: []
	)
	
	const getPermissionsList = () => (
		permissions && permissions.length > 0
			? permissions.map((label, value) => ({label, value}))
			: []
	)

	const formatPerms = (perms) => (
		perms && perms.length > 0
			? perms.map(label => (
				label.label
			))
			: []
	)
	return (
		<section className="text-gray-500 body-font bg-gray-900 w-128 flex ">
			<div className="w-full">
				<div className="text-4xl mb-2">
					<Title className="text-left" titleType="h1">Update Role</Title>
				</div>
				<div className="bg-gray-800 p-6  border-teal border-t-12  mb-6 rounded-lg shadow-lg">
					{roleSelected ? (
						<Formik
							initialValues={{
								name: roleSelected.name,
								slug: roleSelected.slug,
								permissions: getRoleInitialPerms(),
								enable: getRoleInitialState(),
							}}
							onSubmit={async (values) =>
							{
								//TODO enable
								const {name, slug, permissions, enable} = values
								const newPerms = formatPerms(permissions)
								dispatch(
									updateRole(
										roleSelected.id,
										name,
										slug,
										newPerms,
										!!enable.value,
									)
								)
							}}
						>
							{(): any => (
								<Form>
									<div
										className="flex flex-col  bg-gray-800 rounded-lg border-teal border-t-12 shadow-lg">
										<div className="mb-4">
											<Label htmlFor="name" className="font-bold text-gray-400 block mb-2">
												Name
											</Label>
											<Field
												name="name"
												type="text"
												id="name"
												className="w-full bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base hover:border-grey px-2 py-2 rounded shadow"
												placeholder="Role Name"
											/>
										</div>
										<div className="mb-1">
											<Label htmlFor="slug" className="font-bold text-gray-400 block mb-2">
												Slug
											</Label>
											<Field
												name="slug"
												type="text"
												id="slug"
												className="w-full bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base hover:border-grey px-2 py-2 rounded shadow"
												placeholder="Slug name"
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
										<div className="mb-4 ">
											<Label htmlFor="permissions" className="font-bold text-gray-400 block mb-2">
												Permissions
											</Label>
											<Field
												name="permissions"
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
											onClick={() => Router.push("/roles")}
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
					) : <p>No role selected</p>}
				</div>
			</div>
		</section>
	);
};

export default RoleUpdate;
