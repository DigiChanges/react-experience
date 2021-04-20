import React, {PropsWithChildren} from "react";
import { Field, Form, Formik } from "formik";
import ChangePasswordSchema from "../../SchemaValidations/ChangePasswordSchema";
import Router from "next/router";
import Title from "../../atoms/Title";
import ErrorForm from "../../atoms/ErrorForm";
import Label from "../../atoms/Label";
import ButtonClose from "../../molecules/ButtonClose";
import ButtonConfirm from "../../molecules/ButtonConfirm";

const UserChangePassword: React.FC<PropsWithChildren<any>> = ({changePasswordAction}): any =>
{
  return (
    <section className="text-gray-500 body-font bg-gray-900 w-full md:container mx-auto px-3">
      <div className="mb-2 ">
        <Title className="text-3xl font-bold sm:px-0 md:px-18 lg:px-14" titleType="h1">
          Change Password
          </Title>
      </div>

      <Formik
        initialValues={{
          newPassword: "",
          newPasswordConfirmation: "",
        }}
        validationSchema={ChangePasswordSchema}
        onSubmit={async (values) => {
					changePasswordAction(values);
        }}
      >
        {({ errors, touched}) => (
          <Form>
            <div className="sm:px-0 md:px-16 lg:px-14 flex flex-wrap mb-6 text-sm">
						<div className="w-full px-2 mb-5">
							<Label
								htmlFor="password"
								className="text-gray-400 block mb-1"
							>
								Password
									</Label>
							<Field
								name="password"
								type="password"
								id="password"
								className="w-full bg-gray-800 border rounded-full border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base hover:border-grey px-2 py-3 h-10 shadow font-bold"
								placeholder="Enter Password"
							/>
							{errors.newPassword && touched.newPassword ? (
								<ErrorForm className="text-red-500 p-2">
									{errors.newPassword}
								</ErrorForm>
							) : null}
						</div>
						<div className="w-full px-2 mb-5">
							<Label
								htmlFor="passwordConfirmation"
								className="text-gray-400 block mb-1"
							>
								Confirm Password
									</Label>
							<Field
								name="passwordConfirmation"
								type="password"
								id="passwordConfirmation"
								className="w-full bg-gray-800 border rounded-full border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-3 h-10 shadow font-bold"
								placeholder="Repeat Password"
							/>
							{errors.newPasswordConfirmation &&
								touched.newPasswordConfirmation ? (
								<ErrorForm className="text-red-500 p-2">
									{errors.newPasswordConfirmation}
								</ErrorForm>
							) : null}
						</div>
						<div className="w-full mt-5 flex flex-row-reverse">
							<ButtonConfirm>Save</ButtonConfirm>
							<ButtonClose buttonType="button" onClick={() => Router.push("/users")}>
								Close
							</ButtonClose>
						</div>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default UserChangePassword;
