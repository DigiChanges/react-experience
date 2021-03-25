/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from "react";
import { Field, Form, Formik } from "formik";
import SignUpSchema from "../../SchemaValidations/SignUpSchema";
import Select from "../../atoms/Select";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../redux/users/actions";
import { getRoles } from "../../redux/roles/actions";
import Title from "../../atoms/Title";
import ErrorForm from "../../atoms/ErrorForm";
import Button from "../../atoms/Button";
import Label from "../../atoms/Label";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker"
import { getPermissions } from "../../redux/auth/actions";

export interface identityValues {
  singleLanguage: string;
}

const UserCreate = (): any => {
  const dispatch = useDispatch();
  const { permissionsList } = useSelector((store) => store.Auth);
  const { rolesList } = useSelector((store) => store.Roles);

  useEffect(() => {
    dispatch(getRoles());
    dispatch(getPermissions());
  }, []);

  const identityOptions = [
    { label: 'DNI', value: 'DNI' },
    { label: 'CC', value: 'CC' },
    { label: 'TODO', value: 'TODO'},
  ];
  //TODO child key issue
  const getRolesList = () => {
    return rolesList && rolesList.length > 0
      ? rolesList.map((role) => ({ label: role.name, value: role.id }))
      : [];
  };
  //TODO child key issue
  const getPermissionsList = () =>
    permissionsList && permissionsList.length > 0
      ? permissionsList.map((label, value) => ({ label, value }))
      : [];

  return (
    <section className="md:pl-16 text-gray-500 body-font">
      <div className="w-full">
        <div className="mb-2 md:pl-20">
          <Title className="text-left" titleType="h1">
            Create User
          </Title>
        </div>
        <div className="pl-4 md:p-10">

          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              cc: "",
              email: "",
              password: "",
              passwordConfirmation: "",
              permissions: [],
              roles: [],
            }}
            validationSchema={SignUpSchema}
            onSubmit={async (values) => {
              const {
                firstName,
                lastName,
                email,
                password,
                passwordConfirmation,
                permissions,
                roles,
              } = values;

              dispatch(
                createUser(
                  firstName,
                  lastName,
                  email,
                  password,
                  passwordConfirmation,
                  permissions.map((permission: any) => permission.label),
                  roles.map((role) => role.id)
                )
              );
            }}
          >
            {({ errors, touched }) => (
              <Form>

                <div className="w-full flex flex-wrap mb-6 shadow-lg">
                  
        <span className="w-full">PERSONAL INFORMATION</span>
                  <div className="w-full md:w-1/2">
                    <Label
                      htmlFor="firstName"
                      className=" text-gray-400 block mb-2"
                    >
                      First Name
                    </Label>
                    <Field
                      name="firstName"
                      type="text"
                      id="firstName"
                      className="w-11/12 h-8 bg-gray-800 border rounded-full border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-3 h-10 shadow font-bold"
                      placeholder="Enter First Name"
                    />
                    {errors.firstName && touched.firstName ? (
                      <ErrorForm className="text-red-500 p-2">
                        {errors.firstName}
                      </ErrorForm>
                    ) : null}
                  </div>
                  <div className="w-full md:w-1/2">
                    <Label
                      htmlFor="lastName"
                      className="text-gray-400 block mb-2"
                    >
                      Last name
                    </Label>
                    <Field
                      name="lastName"
                      type="text"
                      id="lastName"
                      className="w-11/12 h-8 bg-gray-800 border rounded-full border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-3 h-10 shadow font-bold"
                      placeholder="Enter Last Name"
                    />
                    {errors.lastName && touched.lastName ? (
                      <ErrorForm className="text-red-500 p-2">
                        {errors.lastName}
                      </ErrorForm>
                    ) : null}
                  </div>

                  <div className=" w-1/2 lg:w-1/4">
                    <Label
                      htmlFor="cc"
                      className="text-gray-400 block mb-2"
                    >
                      ID number
                    </Label>

                    <Field
                      name="cc"
                      id="cC"
                      component={Select}
                      items={identityOptions}
                      isMulti={false}
                      className="inline-flex"
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

                    <Field
                      name="cc"
                      type="text"
                      id="cC"
                      className="w-7/12 md:w-9/12 h-8 bg-gray-800 border rounded-r-full border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-3 h-10 shadow font-bold"
                      placeholder='ex: "11.111.111"'
                    />
                  </div>

                  <div className="w-1/2 lg:w-1/4 ">
                    <Label
                      htmlFor="gender"
                      className="text-gray-400 block mb-2"
                      >
                        Gender
                      </Label>
                      <label>
              <Field type="radio" value="F" className=" mt-2 border-gray-700 bg-gray-800 p-3 mx-1 focus:bg-indigo-500 " />
              F
            </label>
            <label>
              <Field type="radio" value="M" className="mt-2 border-gray-700 bg-gray-800 p-3 mx-1 focus:bg-indigo-500"  />
              M
            </label>
            <label>
              <Field type="radio" value="Other" className="mt-2 border-gray-700 bg-gray-800 p-3 mx-1 focus:bg-indigo-500" />
              Other
            </label>
                  </div>

<div className="lg:w-1/4">
<Label 
  htmlFor="birthdate"
  className="text-gray-400 block mb-2"
  >
    Date picker (WIP)
  </Label>
  <DatePicker 
  name="birthdate" 
  placeholderText="Choose birthdate" 
  onChange={(date) => {}}
  className="w-11/12 h-8 bg-gray-800 border rounded-full border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-3 h-10 shadow font-bold"
  />
</div>

<div className="w-1/4">
<Label
  htmlFor="Age"
  className="text-gray-400 block mb-2"
  >
    Age(wip)
</Label>
<Field
  name="Age"
  id="date"
  className="h-8 w-10/12 bg-gray-800 border rounded-full border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-3 h-10 shadow font-bold"
  placeholder={Date}
  ></Field>
</div>

<div className="w-full md:w-1/2">
<Label
  htmlFor="Age"
  className="text-gray-400 block mb-2"
  >
    Address
</Label>
<Field
  name="address"
  id="address"
  className="w-11/12 h-8 bg-gray-800 border rounded-full border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-3 h-10 shadow font-bold"
  placeholder="Your address..."
  ></Field>
</div>

<div className="w-full md:w-1/2">
<Label
  htmlFor="Age"
  className="text-gray-400 block mb-2"
  >
    State(wip)
</Label>
<Field
  name="address"
  id="address"
  className="w-11/12 h-8 bg-gray-800 border rounded-full border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-3 h-10 shadow font-bold"
  placeholder="Pick your country..."
  ></Field>
</div>

<span className="w-full mt-5">CONTACT INFORMATION</span>

                  <div className="w-full">
                    <Label
                      htmlFor="email"
                      className="text-gray-400 block mb-2"
                    >
                      Email
                    </Label>
                    <Field
                      name="email"
                      type="text"
                      id="email"
                      className="w-11/12 h-8 bg-gray-800 border rounded-full border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-3 h-10 shadow font-bold"
                      placeholder="Enter Email"
                    />
                    {errors.email && touched.email ? (
                      <ErrorForm className="text-red-500 p-2">
                        {errors.email}
                      </ErrorForm>
                    ) : null}
                  </div>
                  <div className="w-full">
                    <Label
                      htmlFor="password"
                      className="text-gray-400 block mb-2"
                    >
                      Password
                    </Label>
                    <Field
                      name="password"
                      type="password"
                      id="password"
                      className="w-11/12 h-8 bg-gray-800 border rounded-full border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-3 h-10 shadow font-bold"
                      placeholder="Enter Password"
                    />
                    {errors.password && touched.password ? (
                      <ErrorForm className="text-red-500 p-2">
                        {errors.password}
                      </ErrorForm>
                    ) : null}
                  </div>
                  <div className="w-full">
                    <Label
                      htmlFor="passwordConfirmation"
                      className="text-gray-400 block"
                    >
                      Confirm Password
                    </Label>
                    <Field
                      name="passwordConfirmation"
                      type="password"
                      id="passwordConfirmation"
                      className="w-11/12 h-8 bg-gray-800 border rounded-full border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-3 h-10 shadow font-bold"
                      placeholder="Repeat Password"
                    />
                    {errors.passwordConfirmation &&
                    touched.passwordConfirmation ? (
                      <ErrorForm className="text-red-500 p-2">
                        {errors.passwordConfirmation}
                      </ErrorForm>
                    ) : null}
                  </div>

                  <div className="mb-4">
                    <Label
                      htmlFor="permissions"
                      className="font-bold text-gray-400 block mb-2"
                    >
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

                  <div className="mb-4">
                    <Label
                      htmlFor="roles"
                      className="font-bold text-gray-400 block mb-2"
                    >
                      Roles
                    </Label>
                    <Field
                      name="roles"
                      id="roles"
                      component={Select}
                      items={getRolesList()}
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
                      buttonClick={() => Router.push("/users")}
                    >
                      Close
                    </Button>

                    <Button
                      className="flex shadow-kx1 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center"
                      buttonType="submit"
                      buttonClick="none"
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

export default UserCreate;
