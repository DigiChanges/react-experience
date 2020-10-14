import {Fragment, useState} from "react";
import UsersTable from "../../Templates/Tables/UsersTable";
import ModalAddUser from "../../Templates/Modal/AddUser";
import UpdateUser from "../../Templates/Modal/UpdateUser";
import ChangePassword from "../../Templates/Modal/ChangePassword";
import ConfirmDeleteUser from "../../Templates/Modal/ConfirmDeleteUser";
import Router from "next/router";




const Users = () => {
  const customData = require("../../data/userdata.json");
  const [booleanAddUser, setBooleanAddUser] = useState(false);
  const [booleanChangePass, setBooleanChangePass] = useState(false);
  const [booleanConfirmDelete, setBooleanConfirmDelete] = useState(false);

  const openAddUser = () => {
    setBooleanAddUser(!booleanAddUser);
  };

  const openChangePass = () => {
    setBooleanChangePass(!booleanChangePass);
  };
  const openConfirmDelete = () => {
    setBooleanConfirmDelete(!booleanConfirmDelete);
  };

  return (
    <Fragment>
      <UsersTable 
        data={customData}
        openChangePass={openChangePass} 
        openConfirmDelete={openConfirmDelete} 
        openAddUser={openAddUser}
      />
      {booleanAddUser ? <ModalAddUser close={openAddUser} /> : null}
      {booleanChangePass ? <ChangePassword close={openChangePass} /> : null}
      {booleanConfirmDelete ? (
        <ConfirmDeleteUser close={openConfirmDelete} />
      ) : null}
    </Fragment>
  );
};

export default Users;
