import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import ListUsersTemplateColumns from "./ListUsersTemplateColumns";
import CustomLoader from "../../../atoms/CustomLoader";
import TableUsersStyle from "../../../assets/customStyles/TableUsersStyle";

const UsersTable = (props: any): any => {
  const [pending, setPending] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setPending(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const createData = (id, firstName, lastName, email, roles, enable) => {
    let rolesData = "";
    const rolesId = [];

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

  const rows = props.data.map((user) => {
    return createData(
      user.data.user.id,
      user.data.user.firstName,
      user.data.user.lastName,
      user.data.user.email,
      user.data.user.roles,
      user.data.user.enable
    );
  });

  return (
    <>
      <div className="px-16 pt-20">
        <h1 className="text-5xl text-gray-500">Users</h1>
        <DataTable
          columns={ListUsersTemplateColumns}
          data={rows}
          title={false}
          striped={true}
          noHeader
          theme="DGDarkTheme"
          customStyles={TableUsersStyle}
          progressPending={pending}
          progressComponent={
            <CustomLoader cssClassName={"justify-center text-gray-700"} />
          }
        />
      </div>
    </>
  );
};

export default UsersTable;
