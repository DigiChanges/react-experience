import React, { useEffect } from "react";
import { Field, Formik, Form } from "formik";
import Select from "../../atoms/Select";
import Router from "next/router";
import { useDispatch, useSelector } from 'react-redux'
import { updateUser, unselectedUser } from '../../redux/users/actions';

const UpdateUser = (): any => {

  const dispatch = useDispatch()
  const { userSelected } = useSelector( state => state.Users )

  useEffect(() => {
    //unmount component
    return () => {
      dispatch( unselectedUser() )
    }
  }, [])

  const STATES = [
    { label: 'Enabled', value: 1 },
    { label: 'Disabled', value: 0 },
  ]

  const getUserInitialState = () => ( userSelected.enable ? STATES[0] : STATES[1] )

  const getUserInitialRoles = () => {
    const roles = []
    userSelected.roles.map(role => {
      roles.push({ label: role.name })
    })
    return roles
  }

  return (
    <section className="text-gray-500 body-font bg-gray-900 w-128 flex ">
      <div className="w-full">
        <div className="text-4xl mb-2">
          <h1>Update User</h1>
        </div>
        <div className="bg-gray-800 p-6  border-teal border-t-12  mb-6 rounded-lg shadow-lg">
          {userSelected ? (
            <Formik
              initialValues={{
                firstName: userSelected.firstName,
                lastName: userSelected.lastName,
                email: userSelected.email,
                enable: getUserInitialState(),
                roles: getUserInitialRoles(),
              }}
              onSubmit={async (values) => {
                //TODO enable
                const { firstName, lastName, email, enable } = values
                dispatch( 
                  updateUser(
                    userSelected.id,
                    firstName,
                    lastName,
                    email,
                    !!enable.value
                  ) 
                )
              }}
            >
              {(props): any => (
                <Form>
                  <div className="flex flex-col  bg-gray-800 rounded-lg border-teal border-t-12 shadow-lg">
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
                        className="w-full bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base hover:border-grey px-2 py-2 rounded shadow"
                        placeholder="FirstName"
                      />
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
                        className="w-full bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base hover:border-grey px-2 py-2 rounded shadow"
                        placeholder="lastName"
                      />
                    </div>
                    <div className="mb-1">
                      <label
                        htmlFor="email"
                        className="font-bold text-gray-400 block mb-2"
                      >
                        Email
                      </label>
                      <Field
                        name="email"
                        type="text"
                        className="w-full bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base hover:border-grey px-2 py-2 rounded shadow"
                        placeholder="email"
                      />
                    </div>

                    <div className="mb-4 ">
                      <label
                        htmlFor="enable"
                        className="font-bold text-gray-400 block mb-2 "
                      >
                        State
                      </label>
                      <Field
                        name="enable"
                        component={ Select }
                        items={ STATES }
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
                    
                    {/* <div className="mb-4 ">
                      <label
                        htmlFor="roles"
                        className="font-bold text-gray-400 block mb-2 "
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
                    </div> */}
                  </div>
                  <div className="flex justify-evenly mt-8">
                    <button
                      className="flex shadow-kx1 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg text-center"
                      type="button"
                      onClick={() => Router.push("/users")}
                    >
                      <span className="mr-2">Back</span>
                    </button>
                    <button
                      className="flex shadow-kx1 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          ) : <p>No user selected</p>}
        </div>
      </div>
    </section>
  );
};

export default UpdateUser;
