import React  from "react";
import Image from "../../atoms/Image";
import Router from "next/router";

const UserView = (props: any): any =>
{
    const roles = ['Admin', 'Tortuga Ninja', 'User', 'Halcon Milenario']
    return (
        <>
            <div className='min-w-1/2 h-40 bg-gray-800 rounded-lg shadow-lg flex items-center mt-24'>
                <div className='flex justify-between w-full items-start px-4'>
                    <div className='flex'>
                    <Image image={'/userImg.jpg'} alt={'user image'} className={'w-24 h-24 rounded-full object-cover shadow-kx1'} />
                    <div className='flex items-center justify-between w-10 -m-2 ml-5'>
                        <h2 className='text-2xl text-white  '>Jeremias David Koch</h2>
                    </div>
                    <div className='flex ml-20'>
                        <div className=''>
                            <h3 className='text-xl text-gray-400'>Email</h3>
                            <p className='text-lg text-white'>jeremiaskoch.92@gmail.com</p>
                        </div>
                        <h3 className='text-xl text-gray-400 max-h-5 ml-10'>Roles</h3>
                        <div className='max-h-16 w-auto px-2 pb-2 rounded mt-10 -ml-16'>
                            {roles.length > 0 ?
                                roles.map((rol, index) => {
                                    return <span className='w-auto bg-gray-700 rounded-full mr-1 mb-1 border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2 hover:border-grey shadow"'>{rol}</span>
                                }) 
                                : <span className='text-lg text-white'>Esta usuario no tiene rol</span>}
                        </div>
                    </div>  
                    </div>
                    <div className='flex flex-col'>
                        <button
                            className="flex shadow-kx1 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg text-center"
                            type="button"
                            onClick={() => (Router.push("/users"))}
                        >
                            Back
                        </button>
                        <button
                            className="mt-5 flex shadow-kx1 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center"
                            type='button'  
                            onClick={() => (Router.push(`/users/update/`))}  //add ${props.id} in route
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