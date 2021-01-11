import React, { Fragment, useEffect } from "react";
import AvatarImage from "../../atoms/AvatarImage";
import Router from "next/router";
// import IconLockClosed from "../../atoms/IconLockClosed";
// import IconLockOpen from "../../atoms/IconLockOpen";
import { useSelector, useDispatch } from 'react-redux'
import { unselectedUser } from '../../redux/users/actions'


const UserView = () => {

  const dispatch = useDispatch()
  const { selected } = useSelector( state => state.Users )

  // const roles = ["admin", "tortuga ninja", "user", "power ranger"];
  // const enable = true;

  useEffect(() => {
    //unmount component
    return () => {
      dispatch( unselectedUser() )
    }
  }, [])

  const getRolesView = () => (
    selected.roles && selected.roles.length > 0 ? (
      selected.roles.map(role => (
        <span
          key={ role.id }
          className='w-auto flex items-center bg-gray-700 rounded-lg mr-1 mb-1 border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2 hover:border-grey shadow"'
        >{ role.name }
        </span>
      ))
    ) : <p>El usuario no tiene rol</p>
  )

  return (
    <div className="w-128 flex flex-col justify-center items-center">
      {selected ? (
        <div>
          <div className="z-10 flex justify-center">
            <AvatarImage
              avatar={"/userAvatar.jpg"}
              // image={props.image}
              alt={"avatar user"}
              className={"w-32 h-32 rounded-full object-cover shadow-kx1"}
            />
          </div>
          <div id="profile" className="rounded-lg shadow-2xl bg-gray-800 -m-12">
            <div className="p-4 md:p-12 text-center lg:text-left bg-gray-800 rounded-lg border-teal border-t-12 shadow-lg">
              <div className="flex justify-center items-center relative">
                <h1 className="text-3xl font-bold text-white text-center pt-1">
                  { selected.firstName }
                </h1>
                {/* <div className="absolute right-0 pt-1">
                  {enable ? (
                    <IconLockOpen className={"w-6 text-green-600"} />
                  ) : (
                    <IconLockClosed className={"w-6 text-red-500"} />
                  )}
                </div> */}
              </div>
              <div className="mx-auto w-auto pt-3 border-b-2 border-gray-600 opacity-25" />
              <p className="pt-4 text-lg text-gray-400 font-bold flex items-center justify-center text-center">
                Email
              </p>
              <p className="text-white text-lg text-center pt-2">
                { selected.email }
              </p>
              <p className="pt-4 pb-4 text-lg text-gray-400 font-bold flex items-center justify-center text-center">
                Roles
              </p>
              <div className="w-full flex h-8 text-white pt-1 pl-1 text-base justify-center">
                {/* {roles.length > 0 ? (
                  roles.map((rol, index) => {
                    return (
                      <span
                        key={index}
                        className='w-auto flex items-center bg-gray-700 rounded-lg mr-1 mb-1 border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2 hover:border-grey shadow"'
                      >
                        {rol}
                      </span>
                    );
                  })
                ) : (
                  <p>El usuario no tiene rol</p>
                )} */}
                { getRolesView() }
              </div>
            </div>
            <div className="inset-x-0.bottom-0 flex justify-around pt-4 pb-4">
              <button
                className="flex shadow-kx1 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg text-center"
                onClick={() => Router.push("/users")}
              >
                Back
              </button>
              <button
                className="flex shadow-kx1 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center"
                onClick={() => Router.push("/users/update/")} //add useid in router
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>No user selected</p>
      )}
    </div>
  );
};

export default UserView;
