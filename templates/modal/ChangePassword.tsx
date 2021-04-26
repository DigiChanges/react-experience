import { Fragment } from "react";
import { Field, Form, Formik } from "formik";
import SignUpSchema from "../../SchemaValidations/SignUpSchema";
import Title from "../../atoms/Title";
import Button from "../../atoms/Button";
import ErrorForm from "../../atoms/ErrorForm";
import Label from "../../atoms/Label";

const ChangePassword = ({ close }: any): any => {
  const booleanXQuit = false;

  return (
    <Fragment>
      <div
        className=" top-0 left-0 h-screen w-full flex items-center justify-center"
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
              onSubmit={() => {
                // same shape as initial values
              }}
            >
              {({ errors, touched }: any) => (
                <Form>
                  <div className="bg-gray-800 p-6 rounded-lg border-teal  border-t-12  mb-6  shadow-lg">
                    {booleanXQuit ? (
                      <div className="text-right ">
                        <Button
                          onClick={close}
                          className="text-lg"
                          buttonType="button"
                        >
                          x
                        </Button>
                      </div>
                    ) : null}

                    <Title
                      className="font-hairline text-5xl text-gray-400 mb-4 text-center"
                      titleType="h1"
                    >
                      Change Password
                    </Title>
                    <div className="mb-1">
                      <Label
                        className="font-bold text-gray-400 block mb-2"
                        htmlFor="oldPassword"
                      >
                        Old Password
                      </Label>
                      <Field
                        name="password"
                        type="password"
                        id="oldPassword"
                        className="w-full h-8 bg-gray-800  border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-gray px-2 py-2 rounded shadow"
                        placeholder="Enter Old Password"
                      />
                      {errors.password && touched.password ? (
                        <ErrorForm className="text-red-500 p-2">
                          {errors.password}
                        </ErrorForm>
                      ) : null}
                    </div>
                    <div className="mb-1">
                      <Label
                        className="font-bold text-gray-400 block mb-2"
                        htmlFor="newPassword"
                      >
                        New Password
                      </Label>
                      <Field
                        name="password"
                        type="password"
                        id="newPassword"
                        className="w-full h-8 bg-gray-800  border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-gray px-2 py-2 rounded shadow"
                        placeholder="Enter New Password"
                      />
                      {errors.password && touched.password ? (
                        <ErrorForm className="text-red-500 p-2">
                          {errors.password}
                        </ErrorForm>
                      ) : null}
                    </div>
                    <div className="mb-1">
                      <Label
                        className="font-bold text-gray-400 block mb-2"
                        htmlFor="passwordConfirmation"
                      >
                        Confirm New Password
                      </Label>
                      <Field
                        name="passwordConfirmation"
                        type="password"
                        id="passwordConfirmation"
                        className="w-full h-8 bg-gray-800  border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-gray px-2 py-2 rounded shadow"
                        placeholder="Repeat New Password"
                      />
                      {errors.passwordConfirmation &&
                      touched.passwordConfirmation ? (
                        <ErrorForm className="text-red-500 p-2">
                          {errors.passwordConfirmation}
                        </ErrorForm>
                      ) : null}
                    </div>
                    <div className="mt-10 flex justify-around ">
                      <Button
                        className="flex shadow-kx1 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg text-center"
                        onClick={close}
                        buttonType="button"
                      >
                        <span className="mr-2">Close</span>
                      </Button>

                      <Button
                        className="flex shadow-kx1 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center"
                        buttonType="submit"
                        onClick={() => console.log("props.user")}
                      >
                        Save
                      </Button>
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
