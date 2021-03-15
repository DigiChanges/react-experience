import React from "react";
import { Field, Form, Formik } from "formik";
import SignUpSchema from "../../SchemaValidations/SignUpSchema";
import Image from "../../atoms/Image";
import { loginUser } from '../../redux/auth/actions'
import { useDispatch } from 'react-redux';
import Title from "../../atoms/Title"
import ErrorForm from "../../atoms/ErrorForm"
import Button from "../../atoms/Button"
import Label from "../../atoms/Label";
import PasswordShowHide from "./PasswordShowHide";

const Login = () =>
{
  const dispatch = useDispatch();

  return (
    <section className="text-gray-500 body-font bg-gray-900 h-screen">
      <div className="container mx-auto h-full flex justify-center items-center">
        <div className="lg:w-1/2 md:w-1/2 m-4">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={SignUpSchema}
            onSubmit={async (values) => {
              const { email, password } = values
              dispatch(loginUser(email, password))
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="bg-gray-800 rounded-lg border-teal p-8 border-t-12 mb-6 shadow-lg">
									<Image className="w-2/5 m-auto" image={"/logo.png"} />
                  <Title titleType="h6" className="font-bold mb-4 text-left text-main-gray-250">
                    LOGIN
									</Title>
                  <div className="mb-4">
                    <Label htmlFor='email' className="block mb-2">
                      Email
										</Label>
                    <Field
                      name="email"
                      type="text"
                      id="email"
                      className="w-full px-4 py-2"
                      placeholder="Your Email"
                    />
                    {errors.email && touched.email ? (
                      <ErrorForm>{errors.email}</ErrorForm>
                    ) : null}
                  </div>

                  <div className="mb-1">
                    <Label htmlFor='password' className="block mb-2">
                      Password
										</Label>
                    <Field
                      name="password"
                      type="password"
                      id="password"
                      autoComplete="off"
                      component={PasswordShowHide}
                    />
                    {errors.password && touched.password ? (
                      <ErrorForm>{errors.password}</ErrorForm>
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
                    <Button
                      buttonClick="none"
                      buttonType="submit"
                      className="flex mx-auto border-0 py-2 px-8 focus:outline-none text-lg button-primary"
                    >
                      Login
										</Button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  )
};

export default Login;
