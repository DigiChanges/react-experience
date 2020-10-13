import * as React from "react";
import IconsTableAccion from "../../../atoms/IconsTableAccion";
import IconEnableTable from "../../../atoms/IconEnableTable";
import IconDisabledTable from "../../../atoms/IconsDisabledTable";

const ListUsersTemplatePage = (
  openUpdate,
  openChangePass,
  openConfirmDelete
) => {
  const columns = [
    {
      name: "First Name",
      selector: "firstName",
      sortable: true,
    },
    {
      name: "Last Name",
      selector: "lastName",
      sortable: true,
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
    },
    {
      name: "Roles",
      selector: "rolesData",
      sortable: true,
    },
    {
      name: "State",
      selector: "",
      sortable: true,
      cell: (row, rowIndex) => {
        return (
          <React.Fragment>
            {row.enable ? <IconEnableTable /> : <IconDisabledTable />}
          </React.Fragment>
        );
      },
    },
    {
      name: "Actions",
      selector: "",
      sortable: true,
      cell: (row, rowIndex) => {
        return (
          <React.Fragment>
            <IconsTableAccion
              openUpdate={openUpdate}
              openChangePass={openChangePass}
              openConfirmDelete={openConfirmDelete}
              user={row}
            />
          </React.Fragment>
        );
      },
    },
  ];
  return columns;
};

export default ListUsersTemplatePage;
