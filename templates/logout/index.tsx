import React, {useEffect} from "react";
import {useRouter} from 'next/router'
import {removeSession} from '../../helpers/AuthSession'

const Logout = () =>
{
	const router = useRouter()

	useEffect(() =>
	{
		removeSession()
		router.replace('/login')
	}, []);

	return (
		<div>Logging Out</div>
	)
}

export default Logout;
