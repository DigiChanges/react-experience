import React from "react";
import UsersTable from "../../Templates/Tables/UsersTable";

const Users = () => {
  const customData = require("../../data/userdata.json");
  return (
    <React.Fragment>
      <UsersTable data={customData} />
    </React.Fragment>
  );
};

export default Users;
