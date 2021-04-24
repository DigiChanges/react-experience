import {Field, Form, Formik} from "formik";
import Router from "next/router";
import Title from "../../atoms/Title"
import Button from "../../atoms/Button";
import Label from "../../atoms/Label";
import ErrorFormikForm from "../../molecules/ErrorFormikForm";
import ChangePasswordSchema from "../../SchemaValidations/ChangePasswordSchema";
import PasswordShowHide from "../login/PasswordShowHide";

const ChangeForgotPassword = ({action}): any => {
  return (
    <>
      <Formik
        initialValues={{
          confirmationToken: "",
          password: "",
          passwordConfirmation: ""
        }}
        validationSchema={ChangePasswordSchema}
        onSubmit={async (values) => {
          action(values)
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col h-4/5">
            <Title titleType="h1" className="mb-2 text-left text-xs font-extrabold text-main-gray-250 w-full">
              Change Password
						</Title>
            <div className="mb-1">
              <Label htmlFor='password' className="text-main-gray-200 block mb-2">
                Password
							</Label>
              <Field
                name="password"
                type="password"
                id="password"
                autoComplete="off"
                component={PasswordShowHide}
              />
							<ErrorFormikForm field="password" errors={errors} touched={touched}/>
            </div>

            <div className="mb-1">
              <Label htmlFor='passwordConfirmation' className="text-main-gray-200 block mb-2">
                Password
							</Label>
              <Field
                name="passwordConfirmation"
                type="password"
                id="passwordConfirmation"
                autoComplete="off"
                component={PasswordShowHide}
              />
							<ErrorFormikForm field="passwordConfirmation" errors={errors} touched={touched}/>
            </div>

            <div className="flex items-center mt-auto justify-between w-full">
              <Button
                onClick={() => Router.push("/login")}
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
}

export default ChangeForgotPassword;
