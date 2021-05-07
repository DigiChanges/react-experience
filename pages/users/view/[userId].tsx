import React, { useEffect } from "react";
import { connect } from 'react-redux';
import UserView from "../../../templates/users/UserView";
import { getUser, resetUserSelected } from '../../../redux/users/actions';
import { getRoles } from "../../../redux/roles/actions";
import { getPermissions } from "../../../redux/auth/actions";
import withAuth from '../../../providers/withAuth';

const IndexPage = ({dispatch, Users, Roles, Auth, query}): any =>
{
	useEffect(() =>
	{
		dispatch(getUser(query.userId));
		dispatch(getRoles());
		dispatch(getPermissions());

		return () => {
          dispatch(resetUserSelected());
        }
	}, []);

	return (
		<UserView userSelected={Users.userSelected} rolesList={Roles.rolesList} permissionsList={Auth.permissionsList}/>
	)
};

IndexPage.getInitialProps = ({dispatch, Users, Roles, Auth, query}) => ({dispatch, Users, Roles, Auth, query});

export default connect((state) => state)(withAuth(IndexPage));
