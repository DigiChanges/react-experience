import React from "react";
import { connect } from "react-redux";
import UserChangePassword from "../../../templates/users/UserChangePass";
import {changePasswordUser} from "../../../redux/users/actions";
import {IChangePasswordPayload} from "../../../interfaces/user";
import withAuth from '../../../providers/withAuth';

const IndexPage = ({dispatch, query}): any =>
{
	const changePasswordAction = (payload: IChangePasswordPayload) =>
	{
		dispatch(changePasswordUser(payload, query.userId));
	}

  return (
		<UserChangePassword changePasswordAction={changePasswordAction}/>
	)
}

IndexPage.getInitialProps = ({dispatch, query}) => ({dispatch, query});

export default connect((state) => state)(withAuth(IndexPage));