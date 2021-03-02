import React, {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import RoleSchema from "../../SchemaValidations/RoleSchema";
import Modal from "../../molecules/Modal";
import Title from "../../atoms/Title";
import Button from "../../atoms/Button"
import ErrorForm from "../../atoms/ErrorForm"
import Label from "../../atoms/Label";

const AddRoleModal = ({open}: any): any =>
{
	const [openModal, setOpenModal] = useState(false);

	const closeModal = () =>
	{
		setOpenModal(!openModal);
	};

	useEffect(() =>
	{
		setOpenModal(open);
	}, [open]);

	return (
		<Modal open={openModal}>
			<div className="container mx-auto h-full flex justify-center items-center">
				<div className="w-1/3">
					<Formik
						initialValues={{
							name: "",
							slug: "",
							permissions: {},
						}}
						validationSchema={RoleSchema}
						onSubmit={() =>
						{
							// same shape as initial values
						}}
					>
						{({errors, touched}) => (
							<Form>
								<div className="bg-gray-800 p-6 rounded-lg border-teal  border-t-12  mb-6  shadow-lg">
									<Title titleType="h1"
											className="font-hairline text-5xl text-gray-400 mb-4 text-center">
										Add Role
									</Title>
									<div className="mb-4">
										<Label
											htmlFor="name"
											className="font-bold text-gray-400 block mb-2"
										>
											Role Name
										</Label>
										<Field
											name="name"
											type="text"
											className="w-full h-8 bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-2 rounded shadow"
											placeholder="Enter First Name"
										/>
										{errors.name && touched.name ? (
											<ErrorForm className="text-red-500 p-2">{errors.name}</ErrorForm>
										) : null}
									</div>
									<div className="mb-4">
										<Label htmlFor="slug" className="font-bold text-gray-400 block mb-2">
											Slug
										</Label>
										<Field
											name="slug"
											type="text"
											id="slug"
											className="w-full h-8 bg-gray-800  border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base hover:border-gray px-2 py-2 rounded shadow"
											placeholder="Enter Last Name"
										/>
										{errors.slug && touched.slug ? (
											<ErrorForm className="text-red-500 p-2">{errors.slug}</ErrorForm>
										) : null}
									</div>
									<div className="mt-10 flex justify-around">
										<Button buttonType="button"
												className="flex shadow-kx1 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg text-center"
												buttonClick={closeModal}>
											Close
										</Button>
										<Button buttonClick="none"
												className="flex shadow-kx1 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center"
												buttonType="submit">
											Save
										</Button>
									</div>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</Modal>
	);
};

export default AddRoleModal;
