import React, { useState } from "react";
import UsersTable from "../../templates/tables/users/UsersTable";
import ConfirmDeleteUser from "../../templates/modal/ConfirmDeleteUser";
import AddUserModal from "../../templates/modal/AddUserModal";
import IconPlus from "../../atoms/IconPlus";
import Link from "next/link";
import customData from "../../data/userdata.json";

const UsersPage = (): any => {
    
  const [booleanConfirmDelete, setBooleanConfirmDelete] = useState(false);

  const openConfirmDelete = (): any => {
    setBooleanConfirmDelete(!booleanConfirmDelete);
  };

  return (
    <>
      <div className="w-full h-full flex flex-col justify-between">        
        <UsersTable data={customData} />
        <AddUserModal />
        {booleanConfirmDelete ? (
          <ConfirmDeleteUser close={openConfirmDelete} />
        ) : null}
        <div className="flex justify-end items-end pr-8 mb-8">
          <Link href="/users/create">
            <button className="p-0 w-16 h-16 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
              <IconPlus />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UsersPage;
