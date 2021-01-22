import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import SignUpSchema from "../../SchemaValidations/SignUpSchema";
import Modal from "../../molecules/Modal";
import Title from "../../atoms/Title";
import Button from "../../atoms/Button"
import ErrorForm from "../../atoms/ErrorForm"

const AddUserModal = ({ open }: any): any => {
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
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
            onSubmit={() => {
              // same shape as initial values
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="bg-gray-800 p-6 rounded-lg border-teal  border-t-12  mb-6  shadow-lg">
                  <Title  
                  titleType="h1"
                  titleClass="font-hairline text-5xl text-gray-400 mb-4 text-center" >
                    Add user
                  </Title>
                  <div className="mb-4">
                    <label
                      htmlFor="firstName"
                      className="font-bold text-gray-400 block mb-2"
                    >
                      First Name
                    </label>
                    <Field
                      name="firstName"
                      type="text"
                      className="w-full h-8 bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-2 rounded shadow"
                      placeholder="Enter First Name"
                    />
                    {errors.firstName && touched.firstName ? (
                      <ErrorForm containerClass="text-red-500 p-2" >{errors.firstName}</ErrorForm>
                    ) : null}
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="lastName"
                      className="font-bold text-gray-400 block mb-2"
                    >
                      Last Name
                    </label>
                    <Field
                      name="lastName"
                      type="text"
                      className="w-full h-8 bg-gray-800  border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base hover:border-gray px-2 py-2 rounded shadow"
                      placeholder="Enter Last Name"
                    />
                    {errors.lastName && touched.lastName ? (
                      <ErrorForm containerClass="text-red-500 p-2" >{errors.lastName}</ErrorForm>
                    ) : null}
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="font-bold text-gray-400 block mb-2"
                    >
                      Email
                    </label>
                    <Field
                      name="email"
                      type="text"
                      className="w-full h-8 bg-gray-800  border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-gray px-2 py-2 rounded shadow"
                      placeholder="Enter Email"
                    />
                    {errors.email && touched.email ? (
                      <ErrorForm containerClass="text-red-500 p-2" >{errors.email}</ErrorForm>
                    ) : null}
                  </div>
                  <div className="mb-1">
                    <label
                      htmlFor="password"
                      className="font-bold text-gray-400 block mb-2"
                    >
                      Password
                    </label>
                    <Field
                      name="password"
                      type="password"
                      className="w-full h-8 bg-gray-800  border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-gray px-2 py-2 rounded shadow"
                      placeholder="Enter Password"
                    />
                    {errors.password && touched.password ? (
                      <ErrorForm containerClass="text-red-500 p-2" >{errors.password}</ErrorForm>
                    ) : null}
                  </div>
                  <div className="mb-1">
                    <label
                      htmlFor="passwordConfirmation"
                      className="font-bold text-gray-400 block mb-2"
                    >
                      Confirm Password
                    </label>
                    <Field
                      name="passwordConfirmation"
                      type="password"
                      className="w-full h-8 bg-gray-800  border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-gray px-2 py-2 rounded shadow"
                      placeholder="Repeat Password"
                    />
                    {errors.passwordConfirmation &&
                    touched.passwordConfirmation ? (
                      <ErrorForm containerClass="text-red-500 p-2" >{errors.passwordConfirmation}</ErrorForm>
                    ) : null}
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="roles"
                      className="font-bold text-gray-400 block mb-2"
                    >
                      Roles
                    </label>
                  </div>
                  <div className="mt-10 flex justify-around">
                    <Button
                      buttonType="button"
                      buttonClass="flex shadow-kx1 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg text-center"
                      buttonClick={closeModal}
                    >
                      Close
                    </Button>
                    <Button
                      buttonClick="none"
                      buttonClass="flex shadow-kx1 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center"
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
    </Modal>
  );
};

export default AddUserModal;
