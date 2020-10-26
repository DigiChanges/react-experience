import React  from "react";
import Image from "../../atoms/Image";
import Router from "next/router";

const UserView = (): any =>
{
    const roles = ['admin', 'tortuga ninja', 'user', 'power ranger']
    return (
        <>
            <div className="w-3/4 flex flex-col  items-center h-auto mx-auto my-32">
                <div className='z-10'>
                    <Image image={'/userImg.jpg'} alt='user image' className='w-32 h-32 rounded-full object-cover shadow-kx1'/>
                </div>
                <div id="profile" className="rounded-lg shadow-2xl bg-gray-800 -m-12">
                    <div className="p-4 md:p-12 text-center lg:text-left bg-gray-800 rounded-lg border-teal border-t-12 shadow-lg">
                        <h1 className="text-3xl font-bold pt-8 lg:pt-0 text-white text-center">Jeremias David Koch</h1>
                        <div className="mx-auto w-auto pt-3 border-b-2 border-gray-600 opacity-25"></div>
                        <p className="pt-4 text-base text-gray-400 font-bold flex items-center justify-center text-center">
                            Email
                        </p>
                        <p className="text-white text-base text-center pt-2">
                            jeremiaskoch.92@gmail.com
                        </p>
                        <p className="pt-4 pb-4 text-base text-gray-400 font-bold flex items-center justify-center text-center">
                            Roles
                        </p>
                        <div className="w-full flex h-8 text-white pt-1 pl-1 text-base justify-center">
                            {roles.length > 0 ?
                             roles.map(rol => {
                             return <span className='w-auto flex items-center bg-gray-700 rounded-lg mr-1 mb-1 border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2 hover:border-grey shadow"'>{rol}</span>
                             })
                             : <p>El usuario no tiene rol</p>}
                        </div>
                    </div>
                    <div className="inset-x-0.bottom-0 flex justify-around pt-4 pb-4">
                        <button
                            className="flex shadow-kx1 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg text-center"
                            onClick={() => (Router.push("/users"))}
                        >
                            Back
                        </button>
                        <button
                            className="flex shadow-kx1 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center"
                            onClick={() => (Router.push("/users/update/"))} //add useid in router
                        >
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
};


export default UserView;