import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import ListUsersTemplateColumns from "./ListUsersTemplateColumns";
import TableUsersStyle from "../../../assets/customStyles/TableUsersStyle";
import { getUsers } from '../../../redux/users/actions';
import { getPermissions } from '../../../redux/auth/actions';
import { getRoles } from '../../../redux/roles/actions';
import { useDispatch, useSelector } from 'react-redux';
import TitleH1 from '../../../atoms/TitleH1';

const UsersTable = () => {

  const dispatch = useDispatch()
  const { usersList } = useSelector( state => state.Users )
  // const { permissions } = useSelector( state => state.Auth )
  // const { rolesList } = useSelector( state => state.Roles )

  useEffect(() => {
    dispatch( getUsers() )
    dispatch( getRoles() )
    dispatch( getPermissions() )
  }, []);

  //TODO REMOVE COMMENTED CODE

  //wait some seconds before consuming the api
  // const getUsersData = async () => {
  //   console.log('Waiting to get users data')
  //   setTimeout(() => {
  //     console.log('Dispatching users data')
  //     dispatch( getUsers() )
  //   }, 2000);
  // }
  // const getPermissionsData = async () => {
  //   console.log('Waiting to get permissions data')
  //   setTimeout(() => {
  //     console.log('Dispatching permissions data')
  //     dispatch( getPermissions() )
  //   }, 4000)
  // }
  // const getRolesData = async () => {
  //   console.log('Waiting to get roles data')
  //   setTimeout(() => {
  //     console.log('Dispatching roles data')
  //     dispatch( getRoles() )
  //   }, 10000)
  // }

  const mapRoles = roles => {
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
    rolesData: mapRoles(roles)
  })

  const getRows = () => usersList.map(u => getUserRow(u.id, u.firstName, u.lastName, u.email, u.roles))

  return (
    <>
      <div className="px-16 pt-20">
        <TitleH1 titleName="Users" titleClass="text-5xl text-gray-500" />
        {usersList && (
          usersList.length > 0 ? (
            <DataTable
              columns={ListUsersTemplateColumns}
              data={getRows()}
              title={false}
              striped={true}
              noHeader
              theme="DGDarkTheme"
              customStyles={TableUsersStyle}

              //TODO: REMOVE COMMENTED CODE

              // progressPending={pending}
              // progressComponent={
              //   <CustomLoader cssClassName={"justify-center text-gray-700"} />
              // }
            />
          ) : (
            <p>No Users</p>
          )
        )}
      </div>
    </>
  );
};

export default UsersTable;
