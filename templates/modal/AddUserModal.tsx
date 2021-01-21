import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import SignUpSchema from "../../SchemaValidations/SignUpSchema";
import Modal from "../../molecules/Modal";
import TitleH1 from "../../atoms/TitleH1";
import ClickButton from "../../atoms/ClickButton";
import TypeButton from "../../atoms/TypeButton"
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
                  <TitleH1 titleName="Add user" titleClass="font-hairline text-5xl text-gray-400 mb-4 text-center" />
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
                      <ErrorForm errorMessage={errors.firstName} containerClass="text-red-500 p-2" />
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
                      <ErrorForm errorMessage={errors.lastName} containerClass="text-red-500 p-2" />
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
                      <ErrorForm errorMessage={errors.email} containerClass="text-red-500 p-2" />
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
                      <ErrorForm errorMessage={errors.password} containerClass="text-red-500 p-2" />
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
                      <ErrorForm errorMessage={errors.passwordConfirmation} containerClass="text-red-500 p-2" />
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
                    <ClickButton
                      buttonClass="flex shadow-kx1 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg text-center"
                      buttonText="Close"
                      buttonClick={closeModal}
                    />
                    <TypeButton
                      buttonClass="flex shadow-kx1 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center"
                      buttonType="submit"
                      buttonText="Save"
                    />
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
