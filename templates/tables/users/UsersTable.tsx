import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import ListUsersTemplateColumns from "./ListUsersTemplateColumns";
import TableUsersStyle from "../../../assets/customStyles/TableUsersStyle";
import { getUsers } from '../../../redux/users/actions';
import { useDispatch, useSelector } from 'react-redux';

const UsersTable = () => {

  const dispatch = useDispatch()
  const { list } = useSelector( state => state.Users )

  useEffect(() => {
    setTimeout(() => {
      dispatch( getUsers() )
    }, 2000);
  }, []);

  const getRoles = roles => {
    if (roles && roles.length > 0) {
      let rolesData = ''
      roles.map(role => {
        rolesData = rolesData.concat(`${ role.name } `)
      })
      return rolesData
    } 
    return ''
  }

  const getUserRow = (id, firstName, lastName, email, roles) => ({
    id,
    firstName,
    lastName,
    email,
    rolesData: getRoles(roles)
  })

  const rows = list.map(u => getUserRow(u.id, u.firstName, u.lastName, u.email, u.roles))

  return (
    <>
      <div className="px-16 pt-20">
        <h1 className="text-5xl text-gray-500">Users</h1>
        {list && list.length > 0 ? (
          <DataTable
            columns={ListUsersTemplateColumns}
            data={rows}
            title={false}
            striped={true}
            noHeader
            theme="DGDarkTheme"
            customStyles={TableUsersStyle}
            // progressPending={pending}
            // progressComponent={
            //   <CustomLoader cssClassName={"justify-center text-gray-700"} />
            // }
          />
        ) : (
          <p>No Users</p>
        )}
      </div>
    </>
  );
};

export default UsersTable;
