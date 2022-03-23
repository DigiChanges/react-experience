import React, { PropsWithChildren } from "react";
import { loginUser } from '../../redux/auth/actions'
import { useDispatch } from 'react-redux';

import SignUpSchema from "../../SchemaValidations/SignUpSchema";

import { Field, Form, Formik } from "formik";
import Title from "../../atoms/Title"
import Button from "../../atoms/Button"
import Label from "../../atoms/Label";
import PasswordShowHide from "./PasswordShowHide";
import ErrorFormikForm from "../../molecules/ErrorFormikForm";

interface LoginFormProps extends PropsWithChildren<any> {
  props?: any;
}

const LoginForm: React.FC<LoginFormProps> = ({ ...props }): any =>
{
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
          tenant: "public"
        }}
        validationSchema={SignUpSchema}
        onSubmit={async (values) => {
          dispatch(loginUser(values))
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Title titleType="h1" className="mb-2 text-left text-xs font-extrabold text-main-gray-250">
              LOGIN
						</Title>
            <div className="mb-4">
              <Label htmlFor='email' className="text-main-gray-200 block mb-2">
                Email
							</Label>
              <Field
                name="email"
                type="text"
                id="email"
                className="dg-form-field-full font-extrabold pl-5"
                placeholder="Your Email"
              />
							<ErrorFormikForm field="email" errors={errors} touched={touched}/>
            </div>
            <div>
                <div className="flex items-center justify-between">
              <Label htmlFor='password' className="text-main-gray-200 block my-3">
                Password
							</Label>
              <Button
                onClick={props.onClick}
                className="no-underline inline-block align-baseline font-bold text-sm text-blue hover:text-blue-dark "
              >
                Forgot Password?
            </Button>
            </div>
              <Field
                name="password"
                type="password"
                id="password"
                autoComplete="off"
                component={PasswordShowHide}
              />
            <ErrorFormikForm field="password" errors={errors} touched={touched}/>
            </div>


            <div className="mt-12 flex justify-center">
              <Button
                buttonType="submit"
                className="mx-auto text-white bg-primary-main border-0 py-2 focus:outline-none hover:bg-primary-hover rounded-full text-sm font-bold w-32 text-center"
              >
                Login
            </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
};

export default LoginForm;
