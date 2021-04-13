/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { PropsWithChildren } from "react";
import { Field, Form, Formik } from "formik";
import SignUpSchema from "../../SchemaValidations/SignUpSchema";
import Select from "../../atoms/MultiSelect";
import Title from "../../atoms/Title";
import ErrorForm from "../../atoms/ErrorForm";
import Label from "../../atoms/Label";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CountrySelector from "../../molecules/CountrySelector";
import ButtonConfirm from "../../molecules/ButtonConfirm";
import ButtonClose from "../../molecules/ButtonClose";

interface UserCreateTemplateProps extends PropsWithChildren<any> {
  permissionsList: string[];
  rolesList: any[];
  createAction: any;
  props?: any;
}

const UserCreate: React.FC<UserCreateTemplateProps> = ({ permissionsList, rolesList, createAction }): any => {
  const identityOptions = [
    { label: 'DNI', value: 'dni' },
    { label: 'CC', value: 'cc' }
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
    <section className="text-gray-500 body-font bg-gray-900 w-full md:container mx-auto px-3">
      <div className="mb-2 ">
        <Title className="text-3xl font-bold sm:px-0 md:px-18 lg:px-14" titleType="h1">
          Create User
          </Title>
      </div>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          birthday: "",
          documentType: "",
          documentNumber: "",
          gender: "",
          phone: "",
          country: "",
          address: "",
          password: "",
          passwordConfirmation: "",
          permissions: [],
          roles: [],
        }}
        validationSchema={SignUpSchema}
        onSubmit={async (values) => {
          createAction(values);
        }}
      >
        {({ errors, touched, values, setFieldValue }) => (
          <Form>

            <div className="sm:px-0 md:px-16 lg:px-14 flex flex-wrap mb-6 text-sm">
              <span className="w-full px-2 text-xs text-bold">PERSONAL INFORMATION</span>
              <div className="w-full md:w-1/2 px-2 mb-5">
                <Label
                  htmlFor="firstName"
                  className=" text-gray-400 block mb-1"
                >
                  First name
								</Label>
                <Field
                  name="firstName"
                  type="text"
                  id="firstName"
                  className="w-full bg-gray-800 border rounded-full border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base hover:border-grey px-2 py-3 h-10 shadow font-bold"
                  placeholder="Enter First Name"
                />
                {errors.firstName && touched.firstName ? (
                  <ErrorForm className="text-red-500 p-2">
                    {errors.firstName}
                  </ErrorForm>
                ) : null}
              </div>
              <div className="w-full md:w-1/2 px-2 mb-5">
                <Label
                  htmlFor="lastName"
                  className="text-gray-400 block mb-1"
                >
                  Last name
                    </Label>
                <Field
                  name="lastName"
                  type="text"
                  id="lastName"
                  className="w-full bg-gray-800 border rounded-full border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-3 h-10 shadow font-bold"
                  placeholder="Enter Last Name"
                />
                {errors.lastName && touched.lastName ? (
                  <ErrorForm className="text-red-500 p-2">
                    {errors.lastName}
                  </ErrorForm>
                ) : null}
              </div>
              <div className="w-full md:w-1/4 px-2 mb-5">
                <Label
                  htmlFor="documentType"
                  className="text-gray-400 block mb-1"
                >
                  ID number
                    </Label>
                <div className="flex w-full">
                  <Field
                    name="documentType"
                    id="documentType"
                    component={Select}
                    items={identityOptions}
                    className="flex-1 w-1/4 border-main-gray-500 text-white rounded-l-full focus:outline-none focus:border-indigo-500 text-base hover:border-grey h-10 shadow font-bold"
                    primary25="#a0aec0"
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
                    name="documentNumber"
                    type="text"
                    id="documentNumber"
                    className="flex-1 w-3/4 bg-gray-800 border rounded-r-full border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base hover:border-grey px-2 py-3 h-10 shadow font-bold"
                    placeholder="Enter ID"
                  />
                </div>
                {errors.documentNumber && touched.documentNumber ? (
                  <ErrorForm className="text-red-500 p-2">
                    {errors.documentNumber}
                  </ErrorForm>
                ) : null}

              </div>

              <div className="w-full md:w-1/4 px-2 center align-center self-center justify-center items-center mb-5">
                <Label
                  htmlFor="gender"
                  className="text-gray-400 block mb-1"
                >
                  Gender
								</Label>

                <Field name="gender" type="radio" id="gender" value="female" className="border-1 rounded-full border-main-gray-500 bg-gray-800 p-3 focus:bg-white focus:border-white m-1" />
                <label className="text-gray-400 text-xs font-bold mr-1">
                  F
                </label>

                <Field name="gender" type="radio" id="gender" value="male" className="border-1 border-main-gray-500 bg-gray-800 p-3 focus:bg-indigo-300 focus:border-white m-1" />
                <label className="text-gray-400 text-xs font-bold mr-1">
                  M
                </label>

                <Field name="gender" type="radio" id="gender" value="other" className="border-1 border-main-gray-500 bg-gray-800 p-3 focus:bg-indigo-300 focus:border-white m-1" />
                <label className="text-gray-400 text-xs font-bold mr-1">
                  Other
                </label>

                {errors.gender && touched.gender ? (
                  <ErrorForm className="text-red-500 p-2">
                    {errors.gender}
                  </ErrorForm>
                ) : null}
              </div>

              <div className="w-full md:w-1/4 px-2 mb-5">
                <Label
                  htmlFor="birthdate"
                  className="text-gray-400 block mb-1"
                >
                  Date picker
                </Label>
                <Field
                  name="birthday"
                  component={DatePicker}
                  id="date"
                  className="w-full bg-gray-800 border rounded-full border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 h-10 py-3 shadow font-bold"
                  selected={values.birthday}
                  dateFormat="MMMM d, yyyy"
                  onChange={date => setFieldValue('birthday', date)}
                />
              </div>
              <div className="w-full md:w-1/2 px-2 mb-5">
                <Label
                  htmlFor="country"
                  className="text-gray-400 block mb-1"
                >
                  Country
								</Label>
                <Field
                  name="country"
                  id="country"
                  component={CountrySelector}
                  className="bg-gray-800 border rounded-full border-gray-700 text-base  hover:border-grey shadow font-bold"
                  placeholder="Select country"
                  primary25="#a0aec0"
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
              </div>
              <div className="w-full md:w-1/2 px-2 mb-5">
                <Label
                  htmlFor="address"
                  className="text-gray-400 block mb-1"
                >
                  Address
								</Label>
                <Field
                  name="address"
                  id="address"
                  type="text"
                  className="w-full bg-gray-800 border rounded-full border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base hover:border-grey px-2 py-3 h-10 shadow font-bold"
                  placeholder="Your address..."
                />
              </div>
              <span className="w-full mt-5 px-2">CONTACT INFORMATION </span>
              <div className="w-full md:w-1/2 px-2 mb-5">
                <Label
                  htmlFor="email"
                  className="text-gray-400 block mb-1"
                >
                  Email
                    </Label>
                <Field
                  name="email"
                  type="text"
                  id="email"
                  className="w-full bg-gray-800 border rounded-full border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-3 h-10 shadow font-bold"
                  placeholder="Enter Email"
                />
                {errors.email && touched.email ? (
                  <ErrorForm className="text-red-500 p-2">
                    {errors.email}
                  </ErrorForm>
                ) : null}
              </div>
              <div className="w-full md:w-1/2 px-2 mb-5">
                <Label
                  htmlFor="phone"
                  className="text-gray-400 block mb-1"
                >
                  Phone
								</Label>
                <Field
                  name="phone"
                  type="text"
                  id="phone"
                  className="w-full bg-gray-800 border rounded-full border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-3 h-10 shadow font-bold"
                  placeholder="Enter number"
                />
                {errors.phone && touched.phone ? (
                  <ErrorForm className="text-red-500 p-2">
                    {errors.phone}
                  </ErrorForm>
                ) : null}
              </div>
              <div className="w-full px-2 mb-5">
                <Label
                  htmlFor="password"
                  className="text-gray-400 block mb-1"
                >
                  Password
                    </Label>
                <Field
                  name="password"
                  type="password"
                  id="password"
                  className="w-full bg-gray-800 border rounded-full border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base hover:border-grey px-2 py-3 h-10 shadow font-bold"
                  placeholder="Enter Password"
                />
                {errors.password && touched.password ? (
                  <ErrorForm className="text-red-500 p-2">
                    {errors.password}
                  </ErrorForm>
                ) : null}
              </div>
              <div className="w-full px-2 mb-5">

                <Label
                  htmlFor="passwordConfirmation"
                  className="text-gray-400 block mb-1"
                >
                  Confirm Password
                    </Label>
                <Field
                  name="passwordConfirmation"
                  type="password"
                  id="passwordConfirmation"
                  className="w-full bg-gray-800 border rounded-full border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-3 h-10 shadow font-bold"
                  placeholder="Repeat Password"
                />
                {errors.passwordConfirmation &&
                  touched.passwordConfirmation ? (
                  <ErrorForm className="text-red-500 p-2">
                    {errors.passwordConfirmation}
                  </ErrorForm>
                ) : null}
              </div>
              {/* <div className="w-full md:w-1/2 px-2 mb-5">
                <Label
                  htmlFor="email"
                  className="text-gray-400 block mb-1"
                >
                  Email
                    </Label>
                <Field
                  name="email"
                  type="text"
                  id="email"
                  className="w-full bg-gray-800 border rounded-full border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-3 h-10 shadow font-bold"
                  placeholder="Enter Email"
                />
                {errors.email && touched.email ? (
                  <ErrorForm className="text-red-500 p-2">
                    {errors.email}
                  </ErrorForm>
                ) : null}
              </div> */}
              <div className="w-full md:w-1/2 mb-5 px-2">
                <Label
                  htmlFor="permissions"
                  className="text-gray-400 block mb-1"
                >
                  Permissions
                    </Label>
                <Field
                  name="permissions"
                  id="permissions"
                  component={Select}
                  items={getPermissionsList()}
                  isMulti
                  className="bg-gray-800 border rounded-full border-gray-700 text-base hover:border-grey shadow font-bold"
                  placeholder="Select permissions"
                  primary25="#a0aec0"
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
              </div>
              <div className="w-full md:w-1/2 mb-5 px-2">
                <Label
                  htmlFor="roles"
                  className="text-gray-400 block mb-1"
                >
                  Roles
                    </Label>
                <Field
                  name="roles"
                  id="roles"
                  component={Select}
                  items={getRolesList()}
                  isMulti
                  className="bg-gray-800 border rounded-full border-gray-700 text-base hover:border-grey shadow font-bold"
                  placeholder="Select roles"
                  primary25="#a0aec0"
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
              </div>




              <div className="w-full mt-5 flex flex-row-reverse">
                <ButtonConfirm>Save</ButtonConfirm>
                <ButtonClose>Close</ButtonClose>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default UserCreate;
