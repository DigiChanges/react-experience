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
import { getPermissions } from "../../redux/auth/actions";
import CountrySelector from "../../molecules/CountrySelector";

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
    { label: 'TODO', value: 'TODO' },
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
    <section className="md:px-32 text-gray-500">
      <div className="mb-2 ">
        <Title className="text-left" titleType="h1">
          Create User
          </Title>
      </div>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          cc: "",
          email: "",
          gender: "",
          phone: "",
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

            <div className="px-4 lg:px-16 flex flex-wrap mb-6">

              <span className="w-full">PERSONAL INFORMATION</span>
              <div className="w-full md:w-1/2 px-2">
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
                  className="w-full h-8 bg-gray-800 border rounded-full border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-3 h-10 shadow font-bold"
                  placeholder="Enter First Name"
                />
                {errors.firstName && touched.firstName ? (
                  <ErrorForm className="text-red-500 p-2">
                    {errors.firstName}
                  </ErrorForm>
                ) : null}
              </div>
              <div className="w-full md:w-1/2 px-2">
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
                  className="w-full h-8 bg-gray-800 border rounded-full border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-3 h-10 shadow font-bold"
                  placeholder="Enter Last Name"
                />
                {errors.lastName && touched.lastName ? (
                  <ErrorForm className="text-red-500 p-2">
                    {errors.lastName}
                  </ErrorForm>
                ) : null}
              </div>

              <div className="w-full lg:w-1/4 px-2">
                <Label
                  htmlFor="cc"
                  className="text-gray-400 block mb-2"
                >
                  ID number(WIP)
                    </Label>

                <Field
                  name="cc"
                  component={Select}
                  items={identityOptions}
                  isMulti={false}
                  className="w-5/12 inline-block"
                  primary25="#fff"
                  primary="#667eea"
                  neutral0="rgba(20,25,31)"
                  neutral20="rgba(17,21,30)"
                  neutral50="#a0aec0"
                  neutral80="#718096"
                  neutral10="#fff"
                  neutral30="#667eea"
                  primary50="#718096"
                  danger="#a0aec0"
                  dangerLight="#fff"
                />

                <Field
                  name="cc"
                  type="text"
                  className="inline-block w-7/12 h-8 bg-gray-800 border rounded-r-full border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base hover:border-grey px-2 py-3 h-10 shadow font-bold"
                  placeholder='ex: "11.111.111"'
                />
                {errors.cc && touched.cc ? (
                  <ErrorForm className="text-red-500 p-2">
                    {errors.cc}
                  </ErrorForm>
                ) : null}
              </div>
              <div className="w-full lg:w-1/4 px-2 center align-center self-center justify-center items-center">
                <Label
                  htmlFor="gender"
                  className="text-gray-400 block mb-2"
                >
                  Gender
                      </Label>
                <label>
                  <Field type="radio" id="gender" value="F" className=" mt-2 border-gray-700 bg-gray-800 p-3 mx-1 focus:bg-indigo-500 " />
              F
            </label>
                <label>
                  <Field type="radio" id="gender" value="M" className="mt-2 border-gray-700 bg-gray-800 p-3 mx-1 focus:bg-indigo-500" />
              M
            </label>
                <label>
                  <Field type="radio" id="gender" value="Other" className="mt-2 border-gray-700 bg-gray-800 p-3 mx-1 focus:bg-indigo-500" />
              Other
            </label>
                {errors.gender && touched.gender ? (
                  <ErrorForm className="text-red-500 p-2">
                    {errors.gender}
                  </ErrorForm>
                ) : null}
              </div>

              <div className="w-full lg:w-1/4 px-2">
                <Label
                  htmlFor="birthdate"
                  className="text-gray-400 block mb-2"
                >
                  Date picker (WIP)
  </Label>
                <DatePicker
                  name="birthdate"
                  placeholderText="Choose birthdate"
                  // onChange={/*todo*/}
                  className="w-full h-8 bg-gray-800 border rounded-full border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-3 h-10 shadow font-bold"
                />
              </div>
              <div className="w-full lg:w-1/4 px-2">
                <Label
                  htmlFor="Age"
                  className="text-gray-400 block mb-2"
                >
                  Age(wip)
</Label>
                <Field
                  name="Age"
                  id="date"
                  className="h-8 w-full bg-gray-800 border rounded-full border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-3 h-10 shadow font-bold"
                  placeholder={Date}
                ></Field>
              </div>
              <div className="w-full md:w-1/2 px-2">
                <Label
                  htmlFor="Address"
                  className="text-gray-400 block mb-2"
                >
                  Address
</Label>
                <Field
                  name="address"
                  id="address"
                  className="w-full h-8 bg-gray-800 border rounded-full border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base hover:border-grey px-2 py-3 h-10 shadow font-bold"
                  placeholder="Your address..."
                ></Field>
              </div>
              <div className="w-full md:w-1/2 px-2">
                <Label
                  htmlFor="Age"
                  className="text-gray-400 block mb-2"
                >
                  State
</Label>
                <Field
                  name="address"
                  id="address"
                  component={CountrySelector}
                  className="bg-gray-800 border rounded-full border-gray-700 text-base  hover:border-grey shadow font-bold"
                  placeholder="Select State"
                  primary25="#fff"
                  primary="#667eea"
                  neutral0="rgba(20,25,31)"
                  neutral20="rgba(17,21,30)"
                  neutral50="#a0aec0"
                  neutral80="#718096"
                  neutral10="#fff"
                  neutral30="#667eea"
                  primary50="#718096"
                  danger="#a0aec0"
                  dangerLight="#fff"
                ></Field>
              </div>
              <span className="w-full mt-5">CONTACT INFORMATION</span>
              <div className="w-full md:w-1/2 px-2">
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
                  className="w-full h-8 bg-gray-800 border rounded-full border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-3 h-10 shadow font-bold"
                  placeholder="Enter Email"
                />
                {errors.email && touched.email ? (
                  <ErrorForm className="text-red-500 p-2">
                    {errors.email}
                  </ErrorForm>
                ) : null}
              </div>
              <div className="w-full md:w-1/2 px-2">
                <Label
                  htmlFor="phone"
                  className="text-gray-400 block mb-2"
                >
                  Phone
                    </Label>
                <Field
                  name="phone"
                  type="number"
                  id="phone"
                  className="w-full h-8 bg-gray-800 border rounded-full border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-3 h-10 shadow font-bold"
                  placeholder="Enter number"
                />
                {errors.phone && touched.phone ? (
                  <ErrorForm className="text-red-500 p-2">
                    {errors.phone}
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
                  className="w-full h-8 bg-gray-800 border rounded-full border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-3 h-10 shadow font-bold"
                  placeholder="Enter Password"
                />
                {errors.password && touched.password ? (
                  <ErrorForm className="text-red-500 p-2">
                    {errors.password}
                  </ErrorForm>
                ) : null}
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
                  className="w-full h-8 bg-gray-800 border rounded-full border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-3 h-10 shadow font-bold"
                  placeholder="Repeat Password"
                />
                {errors.passwordConfirmation &&
                  touched.passwordConfirmation ? (
                  <ErrorForm className="text-red-500 p-2">
                    {errors.passwordConfirmation}
                  </ErrorForm>
                ) : null}
              </div>

              <div className="border-4 border-blue-700 bg-blue-800 rounded-xl my-6 p-4 w-full">
                <span>Debug mode</span>
                <div className="w-full mb-4">
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
                <div className="w-full mb-4">
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
    </section>
  );
};

export default UserCreate;
