import * as React from "react";
import IconDeleteTable from "../atoms/IconDeleteTable";
import IconChangePassTable from "../atoms/IconChangePassTable";
import IconUpdateUserTable from "../atoms/IconUpdateUserTable";
import IconViewUserTable from "../atoms/IconViewUserTable";
const IconsTableAccion = ({ close }) => {
  return (
    <React.Fragment>
      <IconViewUserTable />
      <IconChangePassTable />
      <IconUpdateUserTable close={close} />
      <IconDeleteTable />
    </React.Fragment>
  );
};

export default IconsTableAccion;
