import React, {useEffect} from "react";
import {Field, Form, Formik} from "formik";
import RoleSchema from "../../SchemaValidations/RoleSchema";
import Select from "../../atoms/MultiSelect";
import Router from "next/router";
import {useDispatch, useSelector} from 'react-redux'
import {createRole, getRoles} from '../../redux/roles/actions'
import Title from "../../atoms/Title"
import ErrorForm from "../../atoms/ErrorForm"
import Button from "../../atoms/Button";
import Label from "../../atoms/Label";

const RoleCreate = (): any =>
{
	const dispatch = useDispatch()
	const {permissions} = useSelector((store : any) => store.Auth)

	useEffect(() =>
	{
		// dispatch(getRoles());
	}, []);

	//TODO child key issue
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
		<section className="text-gray-500 body-font bg-gray-900 w-128">
			<div className="w-full px-5">
				<div className="text-4xl mb-2 ">
					<Title className="text-left" titleType="h1">Create Role</Title>
				</div>
				<div className="bg-gray-800 p-6 border-teal border-t-12  mb-6 rounded-lg shadow-lg">
					<Formik
						initialValues={{
							name: "",
							slug: "",
							permissions: []
						}}
						validationSchema={RoleSchema}
						onSubmit={async (values) =>
						{
							const {name, slug, permissions} = values
							const newPerms = formatPerms(permissions)
							dispatch(
								createRole(
									name,
									slug,
									newPerms
								)
							)
						}}
					>
						{({errors, touched}) => (
							<Form>
								<div className="bg-gray-800 p-6 rounded-lg border-teal  border-t-12  mb-6  shadow-lg">
									<div className="mb-4">
										<Label htmlFor="name" className="font-bold  text-gray-400 block mb-2">
											Role Name
										</Label>
										<Field
											name="name"
											type="text"
											id="name"
											className="w-full h-8 bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-2 rounded shadow"
											placeholder="Enter Role Name"
										/>
										{errors.name && touched.name ? (
											<ErrorForm className="text-red-500 p-2">{errors.name}</ErrorForm>
										) : null}
									</div>
									<div className="mb-4">
										<Label htmlFor="lastName" className="font-bold text-gray-400 block mb-2">
											Slug
										</Label>
										<Field
											name="slug"
											type="text"
											id="slug"
											className="w-full h-8 bg-gray-800  border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base hover:border-gray px-2 py-2 rounded shadow"
											placeholder="Enter Slug"
										/>
										{errors.slug && touched.slug ? (
											<ErrorForm className="text-red-500 p-2">{errors.slug}</ErrorForm>
										) : null}
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
									<div className="mt-10 flex justify-around">
										<Button
											className="flex shadow-kx1 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg text-center"
											buttonType="button"
											onClick={() => Router.push("/roles")}
										>
											Close
										</Button>

										<Button
											className="flex shadow-kx1 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center"
											buttonType="submit"
										>
											Save
										</Button>
									</div>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</section>
	);
};

export default RoleCreate;
