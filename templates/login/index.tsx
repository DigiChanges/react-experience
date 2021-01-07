import React  from "react";
import { Field, Form, Formik } from "formik";
import SignUpSchema from "../../SchemaValidations/SignUpSchema";
import Image from "../../atoms/Image";
import { loginUser } from '../../redux/auth/actions'
import { useDispatch } from 'react-redux';

const Login = () =>
{
  const dispatch = useDispatch()

  return(
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
							const { email, password } = values
              dispatch( loginUser(email, password) )
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Image image={"/logo.png"} />
                <div className="bg-gray-800  rounded-lg border-teal p-8 border-t-12  mb-6 shadow-lg">
                  <h1 className="font-hairline mb-4 text-center">Login</h1>
                  <div className="mb-4">
                    <label htmlFor='email' className="font-bold text-grey-darker block mb-2">
                      Email
                    </label>
                    <Field
                      name="email"
                      type="text"
                      className="w-full bg-gray-800  border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2 hover:border-grey  rounded shadow"
                      placeholder="Your Email"
                    />
                    {errors.email && touched.email ? (
                      <div className="text-red-500 p-2">{errors.email}</div>
                    ) : null}
                  </div>

                  <div className="mb-1">
                    <label htmlFor='password' className="font-bold text-grey-darker block mb-2">
                      Password
                    </label>
                    <Field
                      name="password"
                      type="password"
                      autoComplete="off"
                      className="w-full bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2 hover:border-grey  rounded shadow"
                      placeholder="Your Password"
                    />
                    {errors.password && touched.password ? (
                      <div className="text-red-500 p-2">{errors.password}</div>
                    ) : null}
                  </div>

                  <div className="flex items-center justify-between">
                    <a
                      className="no-underline inline-block align-baseline font-bold text-sm text-blue hover:text-blue-dark "
                      href={"/forgotPassword"}
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <div className="mt-4">
                    <button type="submit" className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
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
)};

export default Login;
