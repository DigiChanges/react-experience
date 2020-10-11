import * as React from "react";
import IconDeleteTable from "../atoms/IconDeleteTable";
import IconChangePassTable from "../atoms/IconChangePassTable";
import IconUpdateUserTable from "../atoms/IconUpdateUserTable";
import IconViewUserTable from "../atoms/IconViewUserTable";
const IconsTableAccion = ({
  openUpdate,
  openChangePass,
  openConfirmDelete,
}) => {
  return (
    <React.Fragment>
      <IconViewUserTable />
      <IconChangePassTable open={openChangePass} />
      <IconUpdateUserTable open={openUpdate} />
      <IconDeleteTable open={openConfirmDelete} />
    </React.Fragment>
  );
};

export default IconsTableAccion;
