import React, {useEffect} from "react";
import {connect} from 'react-redux';
import RoleUpdate from "../../../templates/roles/RoleUpdate";
import { IRolePayload } from '../../../interfaces/role';
import withAuth from '../../../providers/withAuth';
import { getPermissions } from '../../../redux/auth/actions';
import { getRole, resetRoleSelected, updateRole } from '../../../redux/roles/actions';

const IndexPage = ({dispatch, Roles, Auth, query}): any =>
{
  const updateAction = (payload: IRolePayload, id: string) =>
  {
	dispatch(updateRole(payload, id));
  }

  useEffect(() =>
  {
      dispatch(getRole(query.roleId));
      dispatch(getPermissions());

      return () => {
        dispatch(resetRoleSelected());
      }
  }, []);

  return (
      <RoleUpdate updateAction={updateAction} roleSelected={Roles.roleSelected} permissionsList={Auth.permissionsList}/>
  )
};

IndexPage.getInitialProps = ({dispatch, Roles, Auth, query}) => ({dispatch, Roles, Auth, query});

export default connect((state) => state)(withAuth(IndexPage));
