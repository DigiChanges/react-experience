import {Fragment, useState} from "react";
import {Field, Form, Formik} from "formik";
import MultiSelect from "../../../atoms/MultiSelect";
import Router from "next/router";

const UpdateUser = ({userId}) => {
    console.log('monster',userId)
    let rolesPrueba = [
        {
            key: "chua",
            value: "10",
        },
        {
            key: "chubacgffga 2",
            value: "20",
        },
        {
            key: "aca 3",
            value: "30",
        },
        {
            key: "chubaca 4",
            value: "40",
        },
        {
            key: "chubaca 5",
            value: "50",
        },
        {
            key: "chubaca 6",
            value: "60",
        },
    ];

    return (
        <Fragment>
            <section className="text-gray-500 body-font bg-gray-900 h-screen flex justify-around">
                <div className='w-10/12 max-h-3/4 mt-24'>
                    <div className='text-gray-400 text-4xl'>
                        <h1>Update User</h1>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg border-teal p-1 border-t-12 bg-white mb-6 rounded-lg shadow-lg ">
                        <Formik
                            initialValues={{
                                firstName: '',
                                lastName: '',
                                email: '',
                                roles: [],
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    <div className='flex justify-around  bg-gray-800 rounded-lg border-teal border-t-12 bg-white rounded-lg shadow-lg'>
                                        <div className="bg-gray-800 p-6 p-8 mb-6 w-1/2 flex flex-col justify-between">
                                            <div className="mb-4">
                                                <label className="font-bold text-gray-400 block mb-2">
                                                    First Name
                                                </label>
                                                <Field
                                                    name="firstName"
                                                    type="text"
                                                    className="w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2 hover:border-grey px-2 py-2 rounded shadow"
                                                    placeholder="poner name del user"
                                                />
                                            </div>
                                            <div className="mb-1">
                                                <label className="font-bold text-gray-400 block mb-2">
                                                    Email
                                                </label>
                                                <Field
                                                    name="email"
                                                    type="text"
                                                    className="w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2 hover:border-grey px-2 py-2 rounded shadow"
                                                    placeholder="lastName"
                                                />
                                            </div>
                                        </div>
                                        <div className="bg-gray-800 p-6 p-8 mb-6 w-1/2 flex flex-col justify-between">
                                            <div className="mb-4">
                                                <label className="font-bold text-gray-400 block mb-2">
                                                    Last Name
                                                </label>
                                                <Field
                                                    name="lastName"
                                                    type="text"
                                                    className="w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2 hover:border-grey px-2 py-2 rounded shadow"
                                                    placeholder="lastName"
                                                />
                                            </div>
                                            <div className="mb-1">
                                                <label className="font-bold text-gray-400 block mb-2">
                                                    Roles
                                                </label>
                                                <MultiSelect options={rolesPrueba} />
                                            </div>
                                        </div>

                                    </div>
                                    <div className='flex justify-evenly mt-8'>
                                        <button
                                            className="flex shadow-kx1 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg text-center"
                                            type="button"
                                            onClick={() => (Router.push("/users"))}
                                        >
                                            <span className="mr-2">Back</span>
                                        </button>
                                        <button
                                            className="flex shadow-kx1 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center"
                                            type="button"
                                        >
                                            Save
                                        </button>
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

export default UpdateUser;
