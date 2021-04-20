import React from "react";
import { useDispatch } from "react-redux";
import UserChangePassword from "../../../templates/users/UserChangePass";
import {changePasswordUser} from "../../../redux/users/actions";
import {IChangePasswordPayload} from "../../../interfaces/user";

const IndexPage = ({query}): any =>
{
	const dispatch = useDispatch();

	const changePasswordAction = (payload: IChangePasswordPayload) =>
	{
		dispatch(changePasswordUser(payload, query.userId));
	}

  return (
		<UserChangePassword changePasswordAction={changePasswordAction}/>
	)
}

IndexPage.getInitialProps = ({query}) => ({query});

export default IndexPage;