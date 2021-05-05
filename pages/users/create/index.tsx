import React, {useEffect} from "react";
import { connect } from 'react-redux';
import UserCreate from "../../../templates/users/UserCreate";
import {getRoles} from "../../../redux/roles/actions";
import {getPermissions} from "../../../redux/auth/actions";
import {createUser} from "../../../redux/users/actions";
import {IUserPayload} from "../../../interfaces/user";
import withAuth from '../../../providers/withAuth';

const IndexPage = ({dispatch, Auth, Roles}) =>
{
  const createAction = (payload: IUserPayload) =>
	{
		dispatch(createUser(payload));
	}

	useEffect(() => {
      dispatch(getRoles());
      dispatch(getPermissions());
  }, []);

  return <UserCreate permissionsList={Auth.permissionsList} rolesList={Roles.rolesList} createAction={createAction}/>;
};

IndexPage.getInitialProps = ({dispatch, Auth, Roles, query}) => ({dispatch, Auth, Roles, query});

export default connect((state) => state)(withAuth(IndexPage));
