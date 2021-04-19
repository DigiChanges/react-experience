import { Fragment, useEffect } from "react";
import { Field, Form, Formik } from "formik";
import ChangePasswordSchema from "../../SchemaValidations/ChangePasswordSchema";
import Router from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { changePassword } from "../../redux/users/actions";
import Title from "../../atoms/Title";
import Button from "../../atoms/Button";
import ErrorForm from "../../atoms/ErrorForm";
import Label from "../../atoms/Label";

const UserChangePassword = (): any => {
  const { userSelected } = useSelector((state) => state.Users);
  const dispatch = useDispatch();

  useEffect(() => {
    //unmount component
    return () => {
      // dispatch(unselectedUser());
    };
  }, []);

  return (
    <Fragment>
      <section className="text-gray-500 body-font bg-gray-900 w-128 flex ">
        <div className="w-full">
          <div className="text-4xl mb-2">
            <Title titleType="h1" className="noClass">
              Change Password
            </Title>
          </div>
          <div className="bg-gray-800 p-6  border-teal border-t-12  mb-6 rounded-lg shadow-lg ">
            <Formik
              initialValues={{
                password: "",
                passwordConfirmation: "",
              }}
              validationSchema={ChangePasswordSchema}
              onSubmit={async (values) => {
                if (userSelected && userSelected.id) {
                  const { password, passwordConfirmation } = values;
                  dispatch(
                    changePassword(
                      userSelected.id,
                      password,
                      passwordConfirmation
                    )
                  );
                }
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="flex flex-col  bg-gray-800 rounded-lg border-teal border-t-12 shadow-lg">
                    <div className="mb-4">
                      <Label
                        htmlFor="password"
                        className="font-bold text-grey-darker block mb-2"
                      >
                        New Password
                      </Label>
                      <Field
                        name="password"
                        type="password"
                        id="password"
                        className="w-full bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-2 rounded shadow"
                        placeholder="New password"
                      />
                      {errors.password && touched.password ? (
                        <ErrorForm className="text-red-500 p-2">
                          {errors.password}
                        </ErrorForm>
                      ) : null}
                    </div>
                    <div className="mb-4">
                      <Label
                        htmlFor="passwordConfirmation"
                        className="font-bold text-grey-darker block mb-2"
                      >
                        Confirm New Password
                      </Label>
                      <Field
                        name="passwordConfirmation"
                        type="password"
                        id="passwordConfirmation"
                        className="w-full bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-2 rounded shadow"
                        placeholder="Confirm new password"
                      />
                      {errors.password && touched.password ? (
                        <ErrorForm className="text-red-500 p-2">
                          {errors.password}
                        </ErrorForm>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex justify-evenly mt-8">
                    <Button
                      className="flex shadow-kx1 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg text-center"
                      buttonType="button"
                      onClick={() => Router.push("/users")}
                    >
                      Back
                    </Button>
                    <Button
                      className="flex shadow-kx1 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center"
                      buttonType="submit"
                    >
                      Save
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default UserChangePassword;
