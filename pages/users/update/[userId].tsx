import React, {useEffect} from "react";
import UserUpdate from "../../../templates/users/UserUpdate";
import {useDispatch, useSelector} from 'react-redux'
import {unselectedUser} from '../../../redux/users/actions';
import {getRoles} from '../../../redux/roles/actions';
import { getPermissions } from "../../../redux/actions";

const IndexPage = (): any =>
{
	const dispatch = useDispatch()

	const {userSelected} = useSelector(state => state.Users);
	const {rolesList} = useSelector(state => state.Roles);
	const {permissionsList} = useSelector(store => store.Auth);

	useEffect(() =>
	{
		dispatch(getRoles());
		dispatch(getPermissions())
		//unmount component
		return () =>
		{
			dispatch(unselectedUser());
		}
	}, [])
	return (
		<UserUpdate userSelected={userSelected} rolesList={rolesList} permissions={permissionsList}/>
	)
};

export default IndexPage;
