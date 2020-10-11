import * as React from "react";
import ModalAddUser from "../../Modal/AddUser";
import DataTable, { createTheme } from "react-data-table-component";
import UpdateUser from "../../Modal/UpdateUser";
import IconsTableAccion from "../../../atoms/IconsTableAccion";
import IconEnableTable from "../../../atoms/IconEnableTable";
import IconDisabledTable from "../../../atoms/IconsDisabledTable";
import ChangePassword from "../../Modal/ChangePassword";
import ConfirmDeleteUser from "../../Modal/ConfirmDeleteUser";
const UsersTable = (props) => {
  const [openModal, setOpenModal] = React.useState(false);
  const [booleanUpdate, setBooleanUpdate] = React.useState(false);
  const [booleanChangePass, setBooleanChangePass] = React.useState(false);
  const [booleanConfirmDelete, setBooleanConfirmDelete] = React.useState(false);
  const [pending, setPending] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setPending(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const createData = (id, firstName, lastName, email, roles, enable) => {
    let rolesData = "";
    let rolesId = [];
    roles.map((indice) => {
      if (rolesData.length === 0) {
        rolesData = `${rolesData} ${indice.name}`;
      } else {
        rolesData = `${rolesData}, ${indice.name}`;
      }
      rolesId.push(indice.id);
    });
    return { id, firstName, lastName, email, rolesData, rolesId, enable };
  };

  const openUpdate = () => {
    setBooleanUpdate(!booleanUpdate);
  };

  const openChangePass = () => {
    setBooleanChangePass(!booleanChangePass);
  };
  const openConfirmDelete = () => {
    setBooleanConfirmDelete(!booleanConfirmDelete);
  };

  const rows = props.data.map((user, index) => {
    return createData(
      user.data.user.id,
      user.data.user.firstName,
      user.data.user.lastName,
      user.data.user.email,
      user.data.user.roles,
      user.data.user.enable
    );
  });

  const stateModalChange = () => {
    setOpenModal(!openModal);
  };

  const customStyles = {
    headCells: {
      style: {
        fontSize: "0.9rem",
        justifyContent: "center",
      },
    },
    cells: {
      style: {
        fontSize: "0.8rem",
        justifyContent: "center",
      },
    },
  };
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
  const CustomLoader = () => (
    <div className=" justify-center text-gray-700">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="animate-spin w-1/2 ml-1/4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    </div>
  );
  return (
    <React.Fragment>
      <div className="text-gray-700 body-font bg-gray-900 h-screen flex justify-center">
        <div className="max-w-full w-3/4 px-16 pt-16">
          <h1 className="text-5xl text-gray-500">Users</h1>
          <DataTable
            columns={columns}
            data={rows}
            title={false}
            striped={true}
            noHeader
            theme="digiChangesThemeTable"
            customStyles={customStyles}
            progressPending={pending}
            progressComponent={<CustomLoader />}
          />
        </div>
        <div className="flex justify-center">
          {openModal ? <ModalAddUser close={stateModalChange} /> : null}
          {booleanUpdate ? <UpdateUser close={openUpdate} /> : null}
          {booleanChangePass ? <ChangePassword close={openChangePass} /> : null}
          {booleanConfirmDelete ? (
            <ConfirmDeleteUser close={openConfirmDelete} />
          ) : null}

          <div className="flex items-end mb-8">
            <button
              className="p-0 w-16 h-16 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
              onClick={stateModalChange}
            >
              <svg
                viewBox="0 0 20 20"
                enableBackground="new 0 0 20 20"
                className="w-6 h-6 inline-block"
              >
                <path
                  fill="#FFFFFF"
                  d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UsersTable;
