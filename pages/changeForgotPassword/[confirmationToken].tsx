import React from "react";
import {connect} from "react-redux";
import ChangeForgotPassword from "../../templates/changeForgotPassword";
import {changeForgotPassword} from "../../redux/auth/actions";
import {IChangeForgotPasswordPayload} from "../../interfaces/auth";
import Image from "../../atoms/Image";

const IndexPage = ({dispatch, query}) =>
{
	const changePassword = (values: IChangeForgotPasswordPayload) =>
	{
			dispatch(changeForgotPassword({...values, confirmationToken: query.confirmationToken}));
	}

	return (
		<section className="dg-main-bg h-screen">
			<div className="dg-full-center-flex">
				<div className="dg-rounded-small-box">
				  <div className="flex w-full justify-center mb-6 h-8">
					  <a href="/"><Image image={"/logonav.png"} className="h-8"/></a>
				  </div>
					<ChangeForgotPassword action={changePassword}/>
				</div>
			</div>
    </section>
	)
}

IndexPage.getInitialProps = ({dispatch, query}) => ({dispatch, query});

export default connect((state) => state)(IndexPage);
