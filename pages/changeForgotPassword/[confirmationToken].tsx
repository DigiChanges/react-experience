import React from "react";
import {useDispatch} from "react-redux";
import ChangeForgotPassword from "../../templates/changeForgotPassword";
import {changeForgotPassword} from "../../redux/auth/actions";
import {IChangeForgotPasswordPayload} from "../../interfaces/auth";

const IndexPage = ({query}) =>
{
	const dispatch = useDispatch();

	const changePassword = (values: IChangeForgotPasswordPayload) =>
	{
			dispatch(changeForgotPassword({...values, confirmationToken: query.confirmationToken}));
	}

	return (
		<section className="text-gray-500 body-font bg-gray-900 h-screen">
      <div className="mx-auto h-full flex justify-center items-center">
        <div className="w-1/2 md:w-1/3 min-w-xxs max-w-lg ">
          <div className="bg-gray-650 rounded-lg border-teal p-8 border-t-12  mb-6 shadow-lg h-72">
						<ChangeForgotPassword action={changePassword}/>
          </div>
        </div>
      </div>
    </section>
	)
}

IndexPage.getInitialProps = ({query}) => ({query});

export default IndexPage;
