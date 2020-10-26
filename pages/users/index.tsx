import React, {useState} from "react";
import UsersTable from "../../templates/tables/users/UsersTable";
import ConfirmDeleteUser from "../../templates/modal/ConfirmDeleteUser";
import AddUserModal from "../../templates/modal/AddUserModal";
import IconPlus from "../../atoms/IconPlus";
const customData = require("../../data/userdata.json");

const UsersPage = (): any =>
{
  const [booleanAddUser, setBooleanAddUser] = useState(false);
  const [booleanConfirmDelete, setBooleanConfirmDelete] = useState(false);

  const openAddUser = () =>
  {
    setBooleanAddUser(!booleanAddUser);
  };

  const openConfirmDelete = () =>
  {
    setBooleanConfirmDelete(!booleanConfirmDelete);
  };

  return (
    <>
      <UsersTable data={customData} />
      <AddUserModal open={booleanAddUser}/>
      {booleanConfirmDelete ? (
        <ConfirmDeleteUser close={openConfirmDelete} />
      ) : null}
      <div className="flex justify-center">
        <div className="flex items-end mb-8">
          <button
            className="p-0 w-16 h-16 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
            onClick={openAddUser}
          >
            <IconPlus />
          </button>
        </div>
      </div>
    </>
  );
};

export default UsersPage;
