import { loginUser } from '../../redux/auth/actions'
import { useDispatch } from 'react-redux';

import SignUpSchema from "../../SchemaValidations/SignUpSchema";

import { Field, Form, Formik } from "formik";
import Image from "../../atoms/Image";
import Title from "../../atoms/Title"
import ErrorForm from "../../atoms/ErrorForm"
import Button from "../../atoms/Button"
import Label from "../../atoms/Label";
import PasswordShowHide from "./PasswordShowHide";

const LoginForm = ({ onClick, showRecoverPassword }): any => {
  const dispatch = useDispatch()

  return (
    <>
      {showRecoverPassword ? null : (
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
              <div className="bg-gray-650 rounded-lg border-teal p-8 border-t-12  mb-6 shadow-lg">
                <div className="flex w-full -center"><Image image={"/logonav.png"} /></div>
                <Title titleType="h1" className="mb-4 text-left text-xs font-extrabold text-main-gray-250">
                  LOGIN
									</Title>
                <div className="mb-4">
                  <Label htmlFor='email' className="text-white block mb-2">
                    Email
										</Label>
                  <Field
                    name="email"
                    type="text"
                    id="email"
                    className="w-full focus:outline-none focus:border-indigo-500 text-base px-4 py-2 hover:border-grey rounded shadow font-extrabold"
                    placeholder="Your Email"
                  />
                  {errors.email && touched.email ? (
                    <ErrorForm className="text-red-500 p-2">{errors.email}</ErrorForm>
                  ) : null}
                </div>

                <div className="mb-1">
                  <Label htmlFor='password' className="text-white block mb-2">
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
                    <ErrorForm className="text-red-500 p-2">{errors.password}</ErrorForm>
                  ) : null}
                </div>

                <div className="flex items-center justify-between">
                  <Button
                    buttonClick={onClick}
                    className="no-underline inline-block align-baseline font-bold text-sm text-blue hover:text-blue-dark "
                  >
                    Forgot Password?
										</Button>
                </div>
                <div className="mt-4 flex justify-center">
                  <Button
                    buttonClick="none"
                    buttonType="submit"
                    className="mx-auto text-white bg-primary-main border-0 py-2 focus:outline-none hover:bg-primary-hover rounded-full text-sm font-bold w-32 text-center"
                  >
                    Login
										</Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>)}
    </>
  )
};

export default LoginForm;
