import React from "react";
import { Field, Form, Formik } from "formik";
import SignUpSchema from "../../SchemaValidations/SignUpSchema";
import Router from "next/router";
import loginData from "../../data/logindata.json";
import Logo from "../../atoms/Logo";

const Login = () => (
  <React.Fragment>
    <section className="text-gray-500 body-font bg-gray-900 h-screen">
      <div className="container mx-auto h-full flex justify-center items-center">
        <div className="w-1/3">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={SignUpSchema}
            onSubmit={async (values) => {
              // same shape as initial values

              if (
                loginData.email === values.email &&
                loginData.password === values.password
              ) {
                await Router.push("/dashboard");
              }
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Logo image={"/logo.png"} />
                <div className="bg-gray-800 p-6 rounded-lg border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
                  <h1 className="font-hairline mb-4 text-center">Login</h1>
                  <div className="mb-4">
                    <label className="font-bold text-grey-darker block mb-2">
                      Email
                    </label>
                    <Field
                      name="email"
                      type="text"
                      className="w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2 hover:border-grey px-2 py-2 rounded shadow"
                      placeholder="Your Email"
                    />
                    {errors.email && touched.email ? (
                      <div className="text-red-500 p-2">{errors.email}</div>
                    ) : null}
                  </div>

                  <div className="mb-1">
                    <label className="font-bold text-grey-darker block mb-2">
                      Password
                    </label>
                    <Field
                      name="password"
                      type="password"
                      className="w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2 hover:border-grey px-2 py-2 rounded shadow"
                      placeholder="Your Password"
                    />
                    {errors.password && touched.password ? (
                      <div className="text-red-500 p-2">{errors.password}</div>
                    ) : null}
                  </div>

                  <div className="flex items-center justify-between">
                    <a
                      className="no-underline inline-block align-baseline font-bold text-sm text-blue hover:text-blue-dark "
                      href="/forgotPassword"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <div className="mt-4">
                    <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      Login
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default Login;
