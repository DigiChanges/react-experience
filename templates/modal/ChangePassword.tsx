import {Fragment}  from "react";
import { Field, Form, Formik } from "formik";
import SignUpSchema from "../../SchemaValidations/SignUpSchema";
import TitleH1 from "../../atoms/TitleH1";

const ChangePassword = ({ close }: any): any =>
{
  let booleanXquit = false;

  return (
    <Fragment>
      <div
        className="fixed top-0 left-0 h-screen w-full flex items-center justify-center"
        style={{ background: "rgba(0,0,0,0.5)" }}
      >
        <div className="container mx-auto h-full flex justify-center items-center">
          <div className="w-1/3">
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                roles: "",
              }}
              validationSchema={SignUpSchema}
              onSubmit={(values) => {
                // same shape as initial values
              }}
            >
              {({ errors, touched }: any) => (
                <Form>
                  <div className="bg-gray-800 p-6 rounded-lg border-teal  border-t-12  mb-6  shadow-lg">
                    {booleanXquit ? (
                      <div className="text-right ">
                        <button onClick={close} className="text-lg">
                          x
                        </button>
                      </div>
                    ) : null}

                    <TitleH1 titleName="Change Password" titleClass="font-hairline text-5xl text-gray-400 mb-4 text-center" />
                    <div className="mb-1">
                      <label className="font-bold text-gray-400 block mb-2">
                        Old Password
                      </label>
                      <Field
                        name="password"
                        type="password"
                        className="w-full h-8 bg-gray-800  border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-gray px-2 py-2 rounded shadow"
                        placeholder="Enter Old Password"
                      />
                      {errors.password && touched.password ? (
                        <div className="text-red-500 p-2">
                          {errors.password}
                        </div>
                      ) : null}
                    </div>
                    <div className="mb-1">
                      <label className="font-bold text-gray-400 block mb-2">
                        New Password
                      </label>
                      <Field
                        name="password"
                        type="password"
                        className="w-full h-8 bg-gray-800  border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-gray px-2 py-2 rounded shadow"
                        placeholder="Enter New Password"
                      />
                      {errors.password && touched.password ? (
                        <div className="text-red-500 p-2">
                          {errors.password}
                        </div>
                      ) : null}
                    </div>
                    <div className="mb-1">
                      <label className="font-bold text-gray-400 block mb-2">
                        Confirm New Password
                      </label>
                      <Field
                        name="passwordConfirmation"
                        type="password"
                        className="w-full h-8 bg-gray-800  border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-gray px-2 py-2 rounded shadow"
                        placeholder="Repeat New Password"
                      />
                      {errors.passwordConfirmation &&
                      touched.passwordConfirmation ? (
                        <div className="text-red-500 p-2">
                          {errors.passwordConfirmation}
                        </div>
                      ) : null}
                    </div>
                    <div className="mt-10 flex justify-around ">
                      <button
                        className="flex shadow-kx1 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg text-center"
                        onClick={close}
                        type="button"
                      >
                        <span className="mr-2">Close</span>
                      </button>

                      <button
                        className="flex shadow-kx1 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center"
                        type="submit"
                        onClick={() => console.log("props.user")}
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
      </div>
    </Fragment>
  );
};

export default ChangePassword;
