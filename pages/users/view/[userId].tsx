import React, { useEffect } from "react";
import UserView from "../../../templates/users/UserView";
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from "../../../redux/users/actions";
import { getRoles } from "../../../redux/roles/actions";
import { getPermissions } from "../../../redux/auth/actions";

const IndexPage = ({query}): any =>
{
	const dispatch = useDispatch();

	const {userSelected} = useSelector(state => state.Users);
	const {rolesList} = useSelector(state => state.Roles);
	const {permissionsList} = useSelector(store => store.Auth);

	useEffect(() =>
	{
		dispatch(getUser(query.userId));
		dispatch(getRoles());
		dispatch(getPermissions());
	}, []);

	return (
		<UserView userSelected={userSelected} rolesList={rolesList} permissionsList={permissionsList}/>
	)
};

IndexPage.getInitialProps = ({query}) => ({query});

export default IndexPage;
