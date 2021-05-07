import React, { useEffect } from "react";
import { connect } from 'react-redux';
import RoleView from "../../../templates/roles/RoleView";
import { getRole, resetRoleSelected } from '../../../redux/roles/actions';
import { getPermissions } from '../../../redux/auth/actions';
import withAuth from '../../../providers/withAuth';

const IndexPage = ({dispatch, Roles, Auth, query}): any =>
{
  useEffect(() =>
  {
      dispatch(getRole(query.roleId));
      dispatch(getPermissions());

      return () => {
        dispatch(resetRoleSelected());
      }
  }, []);

  return (
      <RoleView roleSelected={Roles.roleSelected} permissionsList={Auth.permissionsList}/>
  )
};

IndexPage.getInitialProps = ({dispatch, Roles, Auth, query}) => ({dispatch, Roles, Auth, query});

export default connect((state) => state)(withAuth(IndexPage));

