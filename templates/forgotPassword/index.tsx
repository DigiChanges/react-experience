import {Fragment}  from "react";
import { Field, Form, Formik } from "formik";
import SignUpSchema from "../../SchemaValidations/SignUpSchema";
import Router from "next/router";
import loginData from "../../data/logindata.json";
import Image from "../../atoms/Image";
import Title from "../../atoms/Title"
import Button from "../../atoms/Button";
import Label from "../../atoms/Label";

const ForgotPassword = (): any => (
  <Fragment>
    <section className="text-gray-500 body-font bg-gray-900 h-screen">
      <div className="container mx-auto h-full flex justify-center items-center">
        <div className="w-1/3">
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={SignUpSchema}
            onSubmit={async (values) => {
              // same shape as initial values

              if (loginData.email === values.email) {
                await Router.push("/");
              }
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Image image={"/logo.png"} />
                <div className="bg-gray-800 rounded-lg border-teal p-8 border-t-12 mb-6 shadow-lg">
                  <Title  titleType="h1" className="font-hairline mb-4 text-center">
                    Forgot Password
                  </Title>
                    
                  <div className="mb-4">
                    <Label htmlFor="email" className="font-bold text-grey-darker block mb-2">
                      Email
                    </Label>
                    <Field
                      name="email"
                      type="text"
                      id="email"
                      className="w-full bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base hover:border-grey px-2 py-2 rounded shadow"
                      placeholder="Your Email"
                    />
                    {errors.email && touched.email ? (
                      <div className="text-red-500 p-2">{errors.email}</div>
                    ) : null}
                  </div>

                  <div className="flex items-center justify-between">
                    <Button buttonClick="none" buttonType="button" className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      Send
                    </Button>
                      
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-grey-dark text-sm">
                    <a href="/" className="no-underline text-blue font-bold">
                      Back to login
                    </a>
                    .
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  </Fragment>
);

export default ForgotPassword;
