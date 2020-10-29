import {Fragment}  from "react";
import { Field, Form, Formik } from "formik";
import SignUpSchema from "../../SchemaValidations/SignUpSchema";
import Router from "next/router";



const UserChangePassword = (): any =>
{
  return  <Fragment>
  <section className="text-gray-500 body-font bg-gray-900 h-screen w-1/4 flex justify-center items-center">
    <div className='w-10/12 max-h-3/4'>
      <div className='text-4xl mb-2'>
        <h1>Change Password</h1>
      </div>
      <div className="bg-gray-800 p-6  border-teal border-t-12  mb-6 rounded-lg shadow-lg ">
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={SignUpSchema}
          onSubmit={() => {
           return null
          }}
        >
          {({ errors, touched }) => ( //CAMBIAR CALIDACIONES
            <Form>
              <div className='flex flex-col  bg-gray-800 rounded-lg border-teal border-t-12 shadow-lg'>
                <div className="mb-4">
                  <label htmlFor='email' className="font-bold text-grey-darker block mb-2">
                    New Password
                  </label>
                  <Field
                    name="email"
                    type="text"
                    className="w-full bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-2 rounded shadow"
                    placeholder="New password"
                  />
                  {errors.email && touched.email ? (
                    <div className="text-red-500 p-2">{errors.email}</div>
                  ) : null}
                </div>
                <div className="mb-4">
                  <label htmlFor='email' className="font-bold text-grey-darker block mb-2">
                    Confirm New Password
                  </label>
                  <Field
                    name="email"
                    type="text"
                    className="w-full bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-2 rounded shadow"
                    placeholder="Confirm new password"
                  />
                  {errors.email && touched.email ? (
                    <div className="text-red-500 p-2">{errors.email}</div>
                  ) : null}
                </div>
              </div>
              <div className='flex justify-evenly mt-8'>
                  <button
                      className="flex shadow-kx1 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg text-center"
                      type="button"
                      onClick={() => (Router.push("/users"))}
                  >
                      <span className="mr-2">Back</span>
                  </button>
                  <button
                      className="flex shadow-kx1 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center"
                      type="button"
                  >
                      Save
                  </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  </section>
</Fragment>
}

export default UserChangePassword;
  