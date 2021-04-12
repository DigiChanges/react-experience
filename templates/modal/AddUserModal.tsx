import React, {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import SignUpSchema from "../../SchemaValidations/SignUpSchema";
import Modal from "../../molecules/Modal";
import Title from "../../atoms/Title";
import Button from "../../atoms/Button"
import ErrorForm from "../../atoms/ErrorForm"
import Label from "../../atoms/Label";

const AddUserModal = ({open}: any): any =>
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
							firstName: "",
							lastName: "",
							email: "",
							password: "",
							passwordConfirmation: "",
							roles: [],
						}}
						validationSchema={SignUpSchema}
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
										Add user
									</Title>
									<div className="mb-4">
										<Label
											htmlFor="firstName"
											className="font-bold text-gray-400 block mb-2"
										>
											First Name
										</Label>
										<Field
											name="firstName"
											type="text"
											className="w-full h-8 bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-2 rounded shadow"
											placeholder="Enter First Name"
										/>
										{errors.firstName && touched.firstName ? (
											<ErrorForm className="text-red-500 p-2">{errors.firstName}</ErrorForm>
										) : null}
									</div>
									<div className="mb-4">
										<Label
											htmlFor="lastName"
											className="font-bold text-gray-400 block mb-2"
										>
											Last Name
										</Label>
										<Field
											name="lastName"
											type="text"
											id="lastName"
											className="w-full h-8 bg-gray-800  border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base hover:border-gray px-2 py-2 rounded shadow"
											placeholder="Enter Last Name"
										/>
										{errors.lastName && touched.lastName ? (
											<ErrorForm className="text-red-500 p-2">{errors.lastName}</ErrorForm>
										) : null}
									</div>
									<div className="mb-4">
										<Label
											htmlFor="email"
											className="font-bold text-gray-400 block mb-2"
										>
											Email
										</Label>
										<Field
											name="email"
											type="text"
											id="email"
											className="w-full h-8 bg-gray-800  border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-gray px-2 py-2 rounded shadow"
											placeholder="Enter Email"
										/>
										{errors.email && touched.email ? (
											<ErrorForm className="text-red-500 p-2">{errors.email}</ErrorForm>
										) : null}
									</div>
									<div className="mb-1">
										<Label
											htmlFor="password"
											className="font-bold text-gray-400 block mb-2"
										>
											Password
										</Label>
										<Field
											name="password"
											type="password"
											id="password"
											className="w-full h-8 bg-gray-800  border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-gray px-2 py-2 rounded shadow"
											placeholder="Enter Password"
										/>
										{errors.password && touched.password ? (
											<ErrorForm className="text-red-500 p-2">{errors.password}</ErrorForm>
										) : null}
									</div>
									<div className="mb-1">
										<Label
											htmlFor="passwordConfirmation"
											className="font-bold text-gray-400 block mb-2"
										>
											Confirm Password
										</Label>
										<Field
											name="passwordConfirmation"
											type="password"
											id="passwordConfirmation"
											className="w-full h-8 bg-gray-800  border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-gray px-2 py-2 rounded shadow"
											placeholder="Repeat Password"
										/>
										{errors.passwordConfirmation &&
										touched.passwordConfirmation ? (
											<ErrorForm
												className="text-red-500 p-2">{errors.passwordConfirmation}</ErrorForm>
										) : null}
									</div>
									<div className="mb-4">
										<Label
											htmlFor="roles"
											className="font-bold text-gray-400 block mb-2"
										>
											Roles
										</Label>
									</div>
									<div className="mt-10 flex justify-around">
										<Button buttonType="button"
												className="flex shadow-kx1 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg text-center"
												onClick={closeModal}
										>
											Close
										</Button>
										<Button
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

export default AddUserModal;
