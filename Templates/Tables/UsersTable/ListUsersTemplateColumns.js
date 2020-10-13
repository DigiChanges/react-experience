import UserStateColumn from "./UserStateColumn"
import UserActionsColumn from "./UserActionsColumn"

const ListUsersTemplateColumns = (openUpdate, openChangePass, openConfirmDelete) => {
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
      cell: UserStateColumn,
    },
    {
      name: "Actions",
      selector: "",
      sortable: true,
      cell: () => UserActionsColumn(openUpdate, openChangePass, openConfirmDelete)
    },
  ];
  return columns;
};

export default ListUsersTemplateColumns;
