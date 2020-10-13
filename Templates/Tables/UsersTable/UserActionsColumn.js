import {Fragment}  from "react";
import IconsTableAction from "../../../atoms/IconsTableAccion";

const UserActionsColumn = (openUpdate, openChangePass, openConfirmDelete,row) => {
  return (
    <Fragment>
      <IconsTableAction
        openUpdate={openUpdate}
        openChangePass={openChangePass}
        openConfirmDelete={openConfirmDelete}
        user={row}
      />
    </Fragment>
  );
}

export default UserActionsColumn