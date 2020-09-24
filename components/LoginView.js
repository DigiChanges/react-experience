import React from "react";
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
   email: Yup.string()
     .email('Invalid email')
     .required('Required'),
   password: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
 });

const LoginView = () => (
  <React.Fragment>
    <Formik
        className="h-screen bg-white font-family-karla"
        validationSchema={SignupSchema}
        initialValues={{
            email: '',
            password: ''
        }}
        onSubmit={async values => {
            await new Promise(r => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
        }}
    >
    {({ errors, touched }) => (
        <div className="flex flex-wrap w-full">
            <div className="w-full md:w-1/2 flex flex-col">

                <div className="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24">
                    <a href="#" className="p-4 text-xl font-bold text-white bg-black">Logo</a>
                </div>

                <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
                    <p className="text-3xl text-center">Welcome</p>
                    <Form className="flex flex-col pt-3 md:pt-8">
                        <div className="flex flex-col pt-4">
                            <label className="text-lg">Email</label>
                            <Field type="email" name="email" placeholder="your@email.com" className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                            {errors.email && touched.email ? (
                                <div className="p-1 text-red-800">{errors.email}</div>) : null}
                        </div>

                        <div className="flex flex-col pt-4">
                            <label className="text-lg">Password</label>
                            <Field type="password" name="password" placeholder="Password" className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                            {errors.password && touched.password ? (
                                <div className="p-1 text-red-800">{errors.password}</div>) : null}
                        </div>

                        <Field type="submit" value="Log In" className="p-2 mt-8 text-lg font-bold text-white bg-black hover:bg-gray-700" />
                    </Form>
                    <div className="pt-12 pb-12 text-center">
                        <p>Don't have an account? <a className="font-semibold underline">Register here</a></p>
                    </div>
                </div>

            </div>

            <div className="w-1/2 shadow-2xl">
                <img className="hidden object-cover w-full h-screen md:block" src="https://source.unsplash.com/IXUM4cJynP0" alt={"test"} />
            </div>
        </div>
    )}
    </Formik>
  </React.Fragment>
)

export default LoginView;
