import React, { PropsWithChildren } from 'react';
import { Field, Form, Formik } from 'formik';
import MultiSelect from '../../atoms/MultiSelect';
import Router from 'next/router';
import Title from '../../atoms/Title'
import Label from '../../atoms/Label';
import ButtonConfirm from '../../molecules/ButtonConfirm';
import ButtonClose from '../../molecules/ButtonClose';
import { SelectTransform } from '../../transforms/default';
import DGDatePicker from '../../atoms/DGDatePicker';
import SimpleSelect from '../../atoms/SimpleSelect';
import { country, documentTypeOptions, states } from '../../entities';
import ErrorFormikForm from '../../molecules/ErrorFormikForm';
import UserUpdateSchema from '../../SchemaValidations/UserUpdateSchema';
import SelectStyle from '../../assets/customStyles/SelectStyle';
import { IUserApi } from '../../interfaces/user';

interface UserUpdateTemplateProps extends PropsWithChildren<any>
{
  permissionsList: string[];
  rolesList: any[];
  userSelected: IUserApi;
  updateAction: any;
  props?: any;
}

const UpdateUser: React.FC<UserUpdateTemplateProps> = ({
                                                         updateAction,
                                                         userSelected,
                                                         rolesList,
                                                         permissionsList
                                                       }): any =>
{
  return (
    <section className="px-4">
      <div className="mb-2 ">
        <Title className="text-3xl font-bold" titleType="h1">
          Update User
        </Title>
      </div>
      {userSelected ? (
        <Formik
          enableReinitialize={true}
          initialValues={{
            firstName: userSelected.firstName,
            lastName: userSelected.lastName,
            email: userSelected.email,
            birthday: userSelected.birthday,
            documentType: userSelected.documentType,
            documentNumber: userSelected.documentNumber,
            gender: userSelected.gender,
            phone: userSelected.phone,
            country: userSelected.country,
            address: userSelected.address,
            roles: userSelected.roles.map(role => role.id),
            permissions: userSelected.permissions,
            enable: userSelected.enable,
          }}
          validationSchema={UserUpdateSchema}
          onSubmit={(values) =>
          {
            updateAction(values, userSelected.id);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="flex flex-wrap text-sm">
                <span className="w-full text-xs text-bold">PERSONAL INFORMATION</span>
                <div className="dg-form-full-field-wrapper">
                  <Label htmlFor="firstName" className="dg-form-label">
                    First name
                  </Label>
                  <Field
                    name="firstName"
                    type="text"
                    id="firstName"
                    className="dg-form-field-full"
                    placeholder="Enter First Name"
                  />
                  <ErrorFormikForm field="firstName" errors={errors} touched={touched}/>
                </div>
                <div className="dg-form-full-field-wrapper">
                  <Label htmlFor="lastName" className="dg-form-label">
                    Last name
                  </Label>
                  <Field
                    name="lastName"
                    type="text"
                    id="lastName"
                    className="dg-form-field-full"
                    placeholder="Enter Last Name"
                  />
                  <ErrorFormikForm field="lastName" errors={errors} touched={touched}/>
                </div>
                <div className="dg-form-quarter-field-wrapper">
                  <Label htmlFor="documentType" className="dg-form-label">
                    ID number
                  </Label>
                  <div className="flex w-full">
                    <Field
                      name="documentType"
                      id="documentType"
                      component={SimpleSelect}
                      options={documentTypeOptions}
                      selectStyle={SelectStyle}
                    />
                    <Field
                      name="documentNumber"
                      type="text"
                      id="documentNumber"
                      className="flex-1 dg-form-field-quarter rounded-l-none"
                      placeholder="Enter ID"
                    />
                  </div>
                  <ErrorFormikForm field="documentNumber" errors={errors} touched={touched}/>
                </div>

                <div className="dg-form-quarter-field-wrapper text-center">
                  <Label htmlFor="gender" className="dg-form-label text-left">
                    Gender
                  </Label>

                  <Field name="gender" type="radio" id="gender" value="female"
                         className="border-1 rounded-full border-main-gray-500 bg-gray-800 p-3 focus:bg-white focus:border-white m-1"/>
                  <label htmlFor="gender" className="text-gray-400 text-xs font-bold mr-1">
                    F
                  </label>

                  <Field name="gender" type="radio" id="gender" value="male"
                         className="border-1 border-main-gray-500 bg-gray-800 p-3 focus:bg-indigo-300 focus:border-white m-1"/>
                  <label htmlFor="gender" className="text-gray-400 text-xs font-bold mr-1">
                    M
                  </label>

                  <Field name="gender" type="radio" id="gender" value="other"
                         className="border-1 border-main-gray-500 bg-gray-800 p-3 focus:bg-indigo-300 focus:border-white m-1"/>
                  <label htmlFor="gender" className="text-gray-400 text-xs font-bold mr-1">
                    Other
                  </label>
                  <ErrorFormikForm field="gender" errors={errors} touched={touched}/>
                </div>

                <div className="dg-form-quarter-field-wrapper">
                  <Label htmlFor="birthdate" className="dg-form-label">
                    Birthday
                  </Label>
                  <Field
                    name="birthday"
                    component={DGDatePicker}
                    id="birthday"
                    className="dg-form-field-full"
                    dateFormatUI="d/MM/yyyy"
                    dateFormatValue="D/MM/YYYY"
                    placeholder="Choose your birthday..."
                  />
                  <ErrorFormikForm field="birthday" errors={errors} touched={touched}/>
                </div>
                <div className="dg-form-quarter-field-wrapper">
                  <Label htmlFor="enable" className="dg-form-label">
                    Enable
                  </Label>
                  <Field
                    name="enable"
                    id="enable"
                    component={SimpleSelect}
                    selectStyle={SelectStyle}
                    options={states}
                  />
                  <ErrorFormikForm field="enable" errors={errors} touched={touched}/>
                </div>
                <div className="dg-form-full-field-wrapper">
                  <Label htmlFor="country" className="dg-form-label">
                    Country
                  </Label>
                  <Field
                    name="country"
                    id="country"
                    options={country}
                    component={SimpleSelect}
                    selectStyle={SelectStyle}
                  />
                  <ErrorFormikForm field="country" errors={errors} touched={touched}/>
                </div>
                <div className="dg-form-full-field-wrapper">
                  <Label htmlFor="address" className="dg-form-label">
                    Address
                  </Label>
                  <Field
                    name="address"
                    id="address"
                    type="text"
                    className="dg-form-field-full"
                    placeholder="Your address..."
                  />
                  <ErrorFormikForm field="address" errors={errors} touched={touched}/>
                </div>
                <span className="w-full mt-5"> CONTACT INFORMATION </span>
                <div className="dg-form-full-field-wrapper">
                  <Label htmlFor="email" className="dg-form-label">
                    Email
                  </Label>
                  <Field
                    name="email"
                    type="text"
                    id="email"
                    className="dg-form-field-full"
                    placeholder="Enter Email"
                  />
                  <ErrorFormikForm field="email" errors={errors} touched={touched}/>
                </div>
                <div className="dg-form-full-field-wrapper">
                  <Label htmlFor="phone" className="dg-form-label">
                    Phone
                  </Label>
                  <Field
                    name="phone"
                    type="text"
                    id="phone"
                    className="dg-form-field-full"
                    placeholder="Enter number"
                  />
                  <ErrorFormikForm field="phone" errors={errors} touched={touched}/>
                </div>
                <div className="w-full mb-5 pr-2">
                  <Label htmlFor="password" className="dg-form-label">
                    Password
                  </Label>
                  <Field
                    name="password"
                    type="password"
                    id="password"
                    className="dg-form-field-full"
                    placeholder="Enter Password"
                  />
                  <ErrorFormikForm field="password" errors={errors} touched={touched}/>
                </div>
                <div className="w-full mb-5 pr-2">
                  <Label htmlFor="passwordConfirmation" className="dg-form-label">
                    Confirm Password
                  </Label>
                  <Field
                    name="passwordConfirmation"
                    type="password"
                    id="passwordConfirmation"
                    className="dg-form-field-full"
                    placeholder="Repeat Password"
                  />
                  <ErrorFormikForm field="passwordConfirmation" errors={errors} touched={touched}/>
                </div>
                <div className="dg-form-full-field-wrapper">
                  <Label htmlFor="permissions" className="dg-form-label">
                    Permissions
                  </Label>
                  <Field
                    name="permissions"
                    id="permissions"
                    component={MultiSelect}
                    options={SelectTransform.getOptionsSimpleArray(permissionsList)}
                    isMulti
                    placeholder="Select permissions"
                    selectStyle={SelectStyle}
                  />
                  <ErrorFormikForm field="permissions" errors={errors} touched={touched}/>
                </div>
                <div className="dg-form-full-field-wrapper">
                  <Label htmlFor="roles" className="dg-form-label">
                    Roles
                  </Label>
                  <Field
                    name="roles"
                    id="roles"
                    component={MultiSelect}
                    options={SelectTransform.getOptionsObjectArray(rolesList, 'name', 'id')}
                    isMulti
                    selectStyle={SelectStyle}
                  />
                  <ErrorFormikForm field="roles" errors={errors} touched={touched}/>
                </div>
                <div className="w-full mt-5 flex justify-end">
                  <ButtonClose buttonType="button" onClick={() => Router.push('/users')}>
                    Close
                  </ButtonClose>
                  <ButtonConfirm>Save</ButtonConfirm>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      ) : <p>No user selected</p>} {/*TODO: Change for loading*/}
    </section>
  );
};

export default UpdateUser;
