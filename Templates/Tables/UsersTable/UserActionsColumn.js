import {Fragment}  from "react";
import IconsTableAction from "../../../atoms/IconsTableAccion";

const UserActionsColumn = (row, openChangePass, openConfirmDelete) => {
  return (
    <Fragment>
      <IconsTableAction
        openChangePass={openChangePass}
        openConfirmDelete={openConfirmDelete}
        userId={row.id}
      />
    </Fragment>
  );
}

export default UserActionsColumn