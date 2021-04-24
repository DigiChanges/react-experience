import React, {useEffect} from "react";
import UserUpdate from "../../../templates/users/UserUpdate";
import {useDispatch, useSelector} from 'react-redux';
import {getUser, getRoles, getPermissions, updateUser} from "../../../redux/actions";
import {IUserPayload} from "../../../interfaces/user";

const IndexPage = ({query}): any =>
{
	const dispatch = useDispatch();

	const {userSelected} = useSelector((state : any) => state.Users);
	const {rolesList} = useSelector((state : any) => state.Roles);
	const {permissionsList} = useSelector((store : any) => store.Auth);

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
		<UserUpdate updateAction={updateAction} userSelected={userSelected} rolesList={rolesList} permissionsList={permissionsList}/>
	);
};

IndexPage.getInitialProps = ({query}) => ({query});

export default IndexPage;
