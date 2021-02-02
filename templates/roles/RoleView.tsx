import React, { useEffect } from "react";
import AvatarImage from "../../atoms/AvatarImage";
import Router from "next/router";
import { useSelector, useDispatch } from 'react-redux'
import { unselectedRole } from '../../redux/roles/actions';
import Title from "../../atoms/Title";
import Button from "../../atoms/Button";

const RoleView = () => {

  const dispatch = useDispatch()
  const { roleSelected } = useSelector( state => state.Roles )

  let unselectRole = true

  const navigateToUpdateRole = () => {
    if (!roleSelected) return
    unselectRole = false
    Router.push(`/roles/update/${roleSelected.id}`)
  }

  useEffect(() => {
    //unmount component
    return () => {
      if (unselectRole) dispatch( unselectedRole() )
    }
  }, [])

  const getPermissionsView = () => (
    roleSelected.permissions && roleSelected.permissions.length > 0 ? (
      roleSelected.permissions.map((permission, i) => (
        <span
          key={ i }
          className='w-auto flex items-center bg-gray-700 rounded-lg mr-1 mb-1 border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base px-4 py-2 hover:border-grey shadow"'
        >{ permission }
        </span>
      ))
    ) : <p>No permissions</p>
  )

  return (
    <div className="w-full h-auto md:w-128 flex flex-col justify-center items-center">
      {roleSelected ? (
        <div>
          <div className="z-10 flex justify-center">
            <AvatarImage
              avatar={"/userAvatar.jpg"}
              alt={"avatar user"}
              className={"w-32 h-32 rounded-full object-cover shadow-kx1"}
            />
          </div>
          <div id="profile" className="rounded-lg shadow-2xl bg-gray-800 -m-12">
            <div className="p-4 md:p-12 text-center lg:text-left bg-gray-800 rounded-lg border-teal border-t-12 shadow-lg">
              <div className="flex justify-center items-center relative">
                <Title titleType="h1" className="text-3xl font-bold text-white text-center pt-1">
                { roleSelected.name }
                </Title>
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
                Slug
              </p>
              <p className="text-white text-lg text-center pt-2">
                { roleSelected.slug }
              </p>
              <p className="pt-4 pb-4 text-lg text-gray-400 font-bold flex items-center justify-center text-center">
                Permissions
              </p>
              <div className="w-full h-auto flex flex-col md:flex-row h-8 text-white pt-1 pl-1 text-base justify-center">
                { getPermissionsView() }
              </div>
            </div>
            <div className="inset-x-0.bottom-0 flex justify-around pt-4 pb-4">
              <Button className="flex shadow-kx1 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg text-center"
                buttonType="button" buttonClick={() => Router.push("/roles")}>
                Back
              </Button>
              <Button className="flex shadow-kx1 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center"
                buttonType="button" buttonClick={ navigateToUpdateRole }>
                Edit
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <p>No role selected</p>
      )}
    </div>
  );
};

export default RoleView;
