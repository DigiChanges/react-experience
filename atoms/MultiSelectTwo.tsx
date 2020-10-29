import React, {useState} from "react";
import { Field, Form, Formik, FormikProps } from 'formik';

const Pepito = ({ options }: any): any =>
{
  let rolesPrueba = [
    {
      key: "admin",
      value: "10",
    },
    {
      key: "user",
      value: "20",
    },
    {
      key: "moderador",
      value: "30",
    },
    {
      key: "presidente",
      value: "40",
    },
    {
      key: "hacker",
      value: "50",
    },
    {
      key: "chubaca",
      value: "60",
    },
  ];
  

  return <div className='bg-blue-300'>
  <h1>My Form</h1>
  <Formik
    initialValues={{rol: ''}}
    onSubmit={(values, actions) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }, 1000);
    }}
  >
    {(props: FormikProps<any>) => (
      <Form>
        <div className="w-full  ">
            <div className=" p-1 flex border border-gray-700 bg-gray-800 rounded ">
              <div className="flex flex-auto flex-wrap">
                <div className="flex-1 h-5">
                  <input
                    placeholder=""
                    className="bg-transparent p-1 px-2 appearance-none outline-none w-full  text-gray-300"
                  />
                </div>
              </div>
              <div className="text-gray-300 w-8 h-auto py-1 pl-2 pr-1 border-l flex items-center border-gray-200 ">
                <button
                  className="cursor-pointer w-10 h-auto text-gray-600 outline-none focus:outline-none"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        <div className='flex flex-col'>
          <Field as="select" name="rol" multiple='true' >
            {roles.length > 0 ?
            roles.map(rol => {
            return <option value={rol}>{rol}</option>
            }): <option value="" disabled>No hay opciones</option>}
          </Field>
          <button type="submit">Submit</button>
        </div>
        
      </Form>
    )}
  </Formik>
</div>
};

export default Pepito;