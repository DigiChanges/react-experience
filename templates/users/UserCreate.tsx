import React from "react";
import { Field, Form, Formik } from "formik";
import SignUpSchema from "../../SchemaValidations/SignUpSchema";
import Select from "../../atoms/Select";
import Router from "next/router";
import { useDispatch } from 'react-redux'
import { createUser } from '../../redux/users/actions'

const UserCreate = (): any => {

  const dispatch = useDispatch()

  const rolesPrueba = [
    {
      label: "Admin",
      value: "10",
    }
  ];

  const permissionsTest = [
    {
      label: "authKeepAlive",
      value: "100",
    }
  ];

  return (
    <section className="text-gray-500 body-font bg-gray-900 w-128">
      <div className="w-full px-5">
        <div className="text-4xl mb-2 ">
          <h1 className="text-left">Add User</h1>
        </div>
        <div className="bg-gray-800 p-6  border-teal border-t-12  mb-6 rounded-lg shadow-lg">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              passwordConfirmation: "",
              permissions: [],
              roles: [],
            }}
            validationSchema={SignUpSchema}
            onSubmit={async (values) => {
              const { firstName, lastName, email, password, passwordConfirmation, permissions, roles } = values
              console.log('values', values)
              dispatch( 
                createUser(
                  firstName, 
                  lastName, 
                  email, 
                  password, 
                  passwordConfirmation,
                  permissions.map(permission => permission.label),
                  roles.map(role => role.label)
                ) 
              )
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="bg-gray-800 p-6 rounded-lg border-teal  border-t-12  mb-6  shadow-lg">
                  <div className="mb-4">
                    <label
                      htmlFor="firstName"
                      className="font-bold  text-gray-400 block mb-2 "
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
                      htmlFor="permissions"
                      className="font-bold text-gray-400 block mb-2"
                    >
                      Permissions
                    </label>
                    <Field
                      name="permissions"
                      component={Select}
                      items={permissionsTest}
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

                  <div className="mb-4">
                    <label
                      htmlFor="roles"
                      className="font-bold text-gray-400 block mb-2"
                    >
                      Roles
                    </label>
                    <Field
                      name="roles"
                      component={Select}
                      items={rolesPrueba}
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
                  <div className="mt-10 flex justify-around ">
                    <button
                      className="flex shadow-kx1 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg text-center"
                      onClick={() => Router.push("/users")}
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
    </section>
  );
};

export default UserCreate;
