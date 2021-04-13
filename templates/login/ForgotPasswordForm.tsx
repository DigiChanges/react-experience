import React, { PropsWithChildren } from "react";
import { forgetPassword } from '../../redux/auth/actions'
import { useDispatch } from 'react-redux';

import ForgetPasswordSchema from "../../SchemaValidations/ForgetPasswordSchema";

import { Field, Form, Formik } from "formik";
// import Image from "../../atoms/Image";
import Title from "../../atoms/Title"
import ErrorForm from "../../atoms/ErrorForm"
import Button from "../../atoms/Button"
import Label from "../../atoms/Label";

interface ForgotPasswordFormProps extends PropsWithChildren<any> {
  props?: any;
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({ ...props }) => {
  const dispatch = useDispatch()

  return (
    <>
      <Formik
        initialValues={{
          email: ""
        }}
        validationSchema={ForgetPasswordSchema}
        onSubmit={async (values) => {
          const { email } = values
          console.log(email)
          dispatch(forgetPassword(email))
          props.onClick();
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col h-4/5">
            <Title titleType="h1" className="mb-2 text-left text-xs font-extrabold text-main-gray-250 w-full">
              ACCOUNT RECOVERY
									</Title>
            <div>
              <Label htmlFor='email' className="text-main-gray-200 block mb-2">
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

            <div className="flex items-center mt-auto justify-between w-full">
              <Button
                onClick={props.onClick}
                className="flex mx-auto text-white bg-red-700 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded-full text-sm font-bold"
              >
                Cancel
									</Button>
              <Button
                buttonType="submit"
                className="mx-auto text-white bg-primary-main border-0 py-2 px-6 focus:outline-none hover:bg-primary-hover rounded-full text-sm font-bold text-center"
              >
                Send
									</Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
};

export default ForgotPasswordForm;
