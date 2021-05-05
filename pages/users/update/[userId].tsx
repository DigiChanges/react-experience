import React, {useEffect} from "react";
import UserUpdate from "../../../templates/users/UserUpdate";
import {connect} from 'react-redux';
import {getUser, getRoles, getPermissions, updateUser} from "../../../redux/actions";
import {IUserPayload} from "../../../interfaces/user";
import withAuth from '../../../providers/withAuth';

const IndexPage = ({dispatch, Users, Roles, Auth, query}): any =>
{
	const updateAction = (payload: IUserPayload, id: string) =>
	{
		dispatch(updateUser(payload, id));
	}

	useEffect(() =>
	{
		dispatch(getUser(query.userId));
		dispatch(getRoles());
		dispatch(getPermissions());
	}, []);

	return (
		<UserUpdate updateAction={updateAction} userSelected={Users.userSelected} rolesList={Roles.rolesList} permissionsList={Auth.permissionsList}/>
	);
};

IndexPage.getInitialProps = ({dispatch, Users, Roles, Auth, query}) => ({dispatch, Users, Roles, Auth, query});

export default connect((state) => state)(withAuth(IndexPage));
