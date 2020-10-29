import React from "react";
import { Field, Formik } from "formik";
import SignUpSchema from "../../SchemaValidations/SignUpSchema";
import MultiSelect from "../../atoms/MultiSelect";
import Router from "next/router";

const UserCreate = (): any =>
{
  const rolesPrueba = [
    {
      key: "chua",
      value: "10",
    },
    {
      key: "chubacgffga 2",
      value: "20",
    },
    {
      key: "aca 3",
      value: "30",
    },
    {
      key: "chubaca 4",
      value: "40",
    },
    {
      key: "chubaca 5",
      value: "50",
    },
    {
      key: "chubaca 6",
      value: "60",
    },
  ];

  return (
    <section className="text-gray-500 body-font bg-gray-900 h-screen w-1/4 flex justify-center items-center">
      <div className='w-10/12 max-h-3/4'>
          <div className='text-4xl mb-2'>
              <h1>Add User</h1>
          </div>
          <div className="bg-gray-800 p-6  border-teal border-t-12  mb-6 rounded-lg shadow-lg">
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
              <div>
                <div className="bg-gray-800 p-6 rounded-lg border-teal  border-t-12  mb-6  shadow-lg">

                  
                  <div className="mb-4">
                    <label htmlFor='firstName' className="font-bold  text-gray-400 block mb-2 ">
                      First Name
                    </label>
                    <Field
                      name="firstName"
                      type="text"
                      className="w-full h-8 bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-2 rounded shadow"
                      placeholder="Enter First Name"
                    />
                    {errors.firstName && touched.firstName ? (
                      <div className="text-red-500 p-2">
                        {errors.firstName}
                      </div>
                    ) : null}
                  </div>
                  <div className="mb-4">
                    <label htmlFor='lastName' className="font-bold text-gray-400 block mb-2">
                      Last Name
                    </label>
                    <Field
                      name="lastName"
                      type="text"
                      className="w-full h-8 bg-gray-800  border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base hover:border-gray px-2 py-2 rounded shadow"
                      placeholder="Enter Last Name"
                    />
                    {errors.lastName && touched.lastName ? (
                      <div className="text-red-500 p-2">
                        {errors.lastName}
                      </div>
                    ) : null}
                  </div>
                  <div className="mb-4">
                    <label htmlFor='email' className="font-bold text-gray-400 block mb-2">
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
                    <label htmlFor='password' className="font-bold text-gray-400 block mb-2">
                      Password
                    </label>
                    <Field
                      name="password"
                      type="password"
                      className="w-full h-8 bg-gray-800  border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-gray px-2 py-2 rounded shadow"
                      placeholder="Enter Password"
                    />
                    {errors.password && touched.password ? (
                      <div className="text-red-500 p-2">
                        {errors.password}
                      </div>
                    ) : null}
                  </div>
                  <div className="mb-1">
                    <label htmlFor='passwordConfirmation' className="font-bold text-gray-400 block mb-2">
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
                    <label htmlFor='roles' className="font-bold text-gray-400 block mb-2">
                      Roles
                    </label>

                    <MultiSelect options={rolesPrueba} />
                  </div>
                  <div className="mt-10 flex justify-around ">
                    <button
                      className="flex shadow-kx1 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg text-center"
                      onClick={() => (Router.push("/users"))}
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
              </div>
            )}
          </Formik>
        </div>
    </div>
    </section>
  );
};

export default UserCreate;
