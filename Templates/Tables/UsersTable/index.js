import * as React from "react";
import ModalAddUser from "../../Modal/AddUser";
import DataTable from "react-data-table-component";
import ActionsIcons from "../../ActionsIcons/ActionsIcons";
import UpdateUser from "../../Modal/UpdateUser";

const UsersTable = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [booleanUpdate, setBooleanUpdate] = React.useState(false);

  const customData = require("../../../data/userdata.json");

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

  const rows = customData.map((user) => {
    return createData(
      user.data.user.id,
      user.data.user.firstName,
      user.data.user.lastName,
      user.data.user.email,
      user.data.user.roles,
      user.data.user.enable
    );
  });
  console.log("plo", rows);
  const stateModalChange = () => {
    setOpenModal(!openModal);
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
      name: "Actions",
      selector: "",
      sortable: true,
      cell: (row) => (
        <div className="w-full">
          <div className="flex justify-around">
            <ActionsIcons enable={rows.enable} openUpdate={openUpdate} />
          </div>
        </div>
      ),
    },
  ];
  const customStyles = {
    rows: {
      style: {
        background: "#718096",
        "border-top": "1px solid #4a5568",
        "border-bottom": "1px solid #4a5568",
      },
    },
  };

  return (
    <React.Fragment>
      <div className="text-gray-700 body-font bg-gray-900 h-screen flex justify-center">
        <div className="max-w-full w-3/4 px-16 pt-16">
          <h1 className="text-5xl text-gray-500">Users</h1>
          <DataTable
            columns={columns}
            data={rows}
            keyField={rows.id}
            title={false}
            striped={true}
            noHeader
            // customStyles={customStyles}
          />
        </div>
        <div className="flex justify-center">
          {openModal ? <ModalAddUser close={stateModalChange} /> : null}
          {booleanUpdate ? <UpdateUser close={openUpdate} /> : null}
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
