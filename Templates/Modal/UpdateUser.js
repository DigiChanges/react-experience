import * as React from "react";
import { Field, Form, Formik } from "formik";
import SignUpSchema from "../../SchemaValidations/SignUpSchema";
import MultiSelect from "../../atoms/MultiSelect";

const UpdateUser = ({ close, user }) => {
  console.log(user);
  //agrega o quita la x para cerrar modal en la posicion superior
  let booleanXquit = false;
  let rolesPrueba = [
    {
      key: "chua",
      value: "1",
    },
    {
      key: "chubacgffga 2",
      value: "2",
    },
    {
      key: "aca 3",
      value: "3",
    },
    {
      key: "chubaca 4",
      value: "4",
    },
    {
      key: "chubaca 5",
      value: "5",
    },
    {
      key: "chubaca 6",
      value: "6",
    },
  ];

  return (
    <React.Fragment>
      <div
        className="fixed top-0 left-0 h-screen w-full flex items-center justify-center"
        style={{ background: "rgba(0,0,0,0.8)" }}
      >
        <div className="container mx-auto h-full flex justify-center items-center">
          <div className="w-1/3">
            <Formik
              initialValues={{
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                roles: user.roles,
              }}
              validationSchema={SignUpSchema}
              onSubmit={(values) => {
                // same shape as initial values
                console.log(values);
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="bg-gray-800 p-6 rounded-lg border-teal  border-t-12  mb-6  shadow-lg">
                    {booleanXquit ? (
                      <div className="text-right ">
                        <button onClick={close} className="text-lg">
                          x
                        </button>
                      </div>
                    ) : null}

                    <h1 className="font-hairline text-5xl  mb-4 text-center">
                      Update User
                    </h1>
                    <div className="mb-4">
                      <label className="font-bold  text-grey-darker block mb-2 ">
                        First Name
                      </label>
                      <Field
                        name="firstName"
                        type="text"
                        className="w-full h-8 bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-2 rounded shadow"
                        placeholder="Enter First Name"
                      />
                      {errors.firstName && touched.firstName ? (
                        <div className="text-red-500 p-2">
                          {errors.firstName}
                        </div>
                      ) : null}
                    </div>
                    <div className="mb-4">
                      <label className="font-bold text-grey-darker block mb-2">
                        Last Name
                      </label>
                      <Field
                        name="lastName"
                        type="text"
                        className="w-full h-8 bg-gray-800  border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base hover:border-grey px-2 py-2 rounded shadow"
                        placeholder="Enter Last Name"
                      />
                      {errors.lastName && touched.lastName ? (
                        <div className="text-red-500 p-2">
                          {errors.lastName}
                        </div>
                      ) : null}
                    </div>
                    <div className="mb-4">
                      <label className="font-bold text-grey-darker block mb-2">
                        Email
                      </label>
                      <Field
                        name="email"
                        type="text"
                        className="w-full h-8 bg-gray-800  border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-2 rounded shadow"
                        placeholder="Enter Email"
                      />
                      {errors.email && touched.email ? (
                        <div className="text-red-500 p-2">{errors.email}</div>
                      ) : null}
                    </div>
                    <div className="mb-4">
                      <label className="font-bold text-grey-darker block mb-2">
                        Roles
                      </label>

                      <MultiSelect options={rolesPrueba} />
                    </div>
                    <div className="mt-10 flex justify-around ">
                      <button
                        className="flex shadow-kx1 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg text-center"
                        onClick={close}
                        type="button"
                      >
                        <span className="mr-2">Close</span>
                      </button>

                      <button
                        className="flex shadow-kx1 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center"
                        type="submit"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UpdateUser;
