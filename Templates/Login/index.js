import React from "react";

const Login = () => (
    <section className="text-gray-500 body-font bg-gray-900 h-screen">
        <div className="container mx-auto h-full flex justify-center items-center">
            <div className="w-1/3">
                <h1 className="font-hairline mb-6 text-center">Login</h1>
                <div className="bg-gray-800 p-6 rounded-lg border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
                    <div className="mb-4">
                        <label className="font-bold text-grey-darker block mb-2">Email</label>
                        <input type="text" className="w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2 hover:border-grey px-2 py-2 rounded shadow" placeholder="Your Username"/>
                    </div>

                    <div className="mb-4">
                        <label className="font-bold text-grey-darker block mb-2">Password</label>
                        <input type="text" className="w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2 hover:border-grey px-2 py-2 rounded shadow" placeholder="Your Password"/>
                    </div>

                    <div className="flex items-center justify-between">
                        <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Login
                        </button>

                        <a className="no-underline inline-block align-baseline font-bold text-sm text-blue hover:text-blue-dark float-right" href="#">
                            Forgot Password?
                        </a>
                    </div>

                </div>
                <div className="text-center">
                    <p className="text-grey-dark text-sm">Don't have an account? <a href="#" className="no-underline text-blue font-bold">Create an Account</a>.</p>
                </div>
            </div>
        </div>
    </section>
)

export default Login;