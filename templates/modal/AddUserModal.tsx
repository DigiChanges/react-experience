import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import SignUpSchema from "../../SchemaValidations/SignUpSchema";
import Modal from "../../molecules/Modal";

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
                  <h1 className="font-hairline text-5xl text-gray-400 mb-4 text-center">
                    Add user
                  </h1>
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
                      <div className="text-red-500 p-2">{errors.firstName}</div>
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
                      <div className="text-red-500 p-2">{errors.lastName}</div>
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
                      <div className="text-red-500 p-2">{errors.email}</div>
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
                      <div className="text-red-500 p-2">{errors.password}</div>
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
                      <div className="text-red-500 p-2">
                        {errors.passwordConfirmation}
                      </div>
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
                  <div className="mt-10 flex justify-around ">
                    <button
                      className="flex shadow-kx1 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg text-center"
                      onClick={closeModal}
                    >
                      <span className="mr-2">Close</span>
                    </button>

                    <button
                      className="flex shadow-kx1 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center"
                      type="submit"
                    >
                      Save
                    </button>
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
