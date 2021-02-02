import React, { useEffect } from "react";
import { Field, Form, Formik } from "formik";
import SignUpSchema from "../../SchemaValidations/SignUpSchema";
import Select from "../../atoms/Select";
import Router from "next/router";
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../redux/users/actions';
import { getRoles } from '../../redux/roles/actions';
import Title from "../../atoms/Title";
import ErrorForm from "../../atoms/ErrorForm";
import Button from "../../atoms/Button";
import Label from "../../atoms/Label";

const UserCreate = (): any => {

  const dispatch = useDispatch()
  const { permissions } = useSelector( store => store.Auth );
  const { rolesList } = useSelector( store => store.Roles );

  useEffect(() => {
    dispatch( getRoles() );
  }, []);


  //TODO child key issue
  const getRolesList = () => (
    rolesList && rolesList.length > 0
      ? rolesList.map(item => ({ label: item.name, id: item.id }))
      : []
  );

  //TODO child key issue
  const getPermissionsList = () => (
    permissions && permissions.length > 0
      ? permissions.map((label, value) => ({ label, value }))
      : []
  );

  return (
    <section className="text-gray-500 body-font bg-gray-900 w-128">
      <div className="w-full px-5">
        <div className="text-4xl mb-2 ">
          <Title className="text-left" titleType="h1">Add User</Title>
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
              dispatch( 
                createUser(
                  firstName, 
                  lastName, 
                  email, 
                  password, 
                  passwordConfirmation,
                  permissions.map((permission: any) => permission.label),
                  roles.map(role => role.id)
                ) 
              )
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="bg-gray-800 p-6 rounded-lg border-teal  border-t-12  mb-6  shadow-lg">
                  <div className="mb-4">
                    <Label htmlFor="firstName" className="font-bold  text-gray-400 block mb-2">
                      First Name
                    </Label>
                    <Field
                      name="firstName"
                      type="text"
                      id="firstName"
                      className="w-full h-8 bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-2 rounded shadow"
                      placeholder="Enter First Name"
                    />
                    {errors.firstName && touched.firstName ? (
                      <ErrorForm className="text-red-500 p-2" >{errors.firstName}</ErrorForm>
                    ) : null}
                  </div>
                  <div className="mb-4">
                    <Label htmlFor="lastName" className="font-bold text-gray-400 block mb-2">
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
                      <ErrorForm className="text-red-500 p-2" >{errors.lastName}</ErrorForm>
                    ) : null}
                  </div>
                  <div className="mb-4">
                    <Label htmlFor="email" className="font-bold text-gray-400 block mb-2">
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
                      <ErrorForm className="text-red-500 p-2" >{errors.email}</ErrorForm>
                    ) : null}
                  </div>
                  <div className="mb-1">
                    <Label htmlFor="password" className="font-bold text-gray-400 block mb-2">
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
                      <ErrorForm className="text-red-500 p-2" >{errors.password}</ErrorForm>
                    ) : null}
                  </div>
                  <div className="mb-1">
                    <Label htmlFor="passwordConfirmation" className="font-bold text-gray-400 block mb-2">
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
                      <ErrorForm className="text-red-500 p-2" >{errors.passwordConfirmation}</ErrorForm>
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
                      items={ getPermissionsList() }
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
                    <Label htmlFor="roles" className="font-bold text-gray-400 block mb-2">
                      Roles
                    </Label>
                    <Field
                      name="roles"
                      id="roles"
                      component={Select}
                      items={ getRolesList() }
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
                    <Button className="flex shadow-kx1 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg text-center"
                      buttonType="button" buttonClick={() => Router.push("/users")}>   
                    Close
                    </Button>                 

                    <Button className="flex shadow-kx1 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center"
                      buttonType="submit" buttonClick="none">
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

export default UserCreate;
