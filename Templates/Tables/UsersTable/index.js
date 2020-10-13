import {useEffect, useState, Fragment}  from "react";
import DataTable, { createTheme } from "react-data-table-component";
import ListUsersTemplateColumns from "./ListUsersTemplateColumns";
import CustomLoader from "../../../atoms/CustomLoader"
import TableUsersStyle from "../../../assets/customStyles/TableUsersStyle"

const UsersTable = (props) => {
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPending(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const createData = (id, firstName, lastName, email, roles, enable) => {
    let rolesData = "";
    let rolesId = [];
    roles.map((index) => {
      if (rolesData.length === 0) {
        rolesData = `${rolesData} ${index.name}`;
      } else {
        rolesData = `${rolesData}, ${index.name}`;
      }
      rolesId.push(index.id);
    });
    return { id, firstName, lastName, email, rolesData, rolesId, enable };
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
 
  const columns = ListUsersTemplateColumns(props.openUpdate, props.openChangePass, props.openConfirmDelete);
  
  return (
    <Fragment>
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
            customStyles={TableUsersStyle}
            progressPending={pending}
            progressComponent={<CustomLoader />}
          />
        </div>
        <div className="flex justify-center">
          <div className="flex items-end mb-8">
            <button
              className="p-0 w-16 h-16 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
              onClick={props.openAddUser}
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
    </Fragment>
  );
};

export default UsersTable;
