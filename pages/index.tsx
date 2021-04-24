import {useEffect} from 'react';
import {getSession} from "../helpers/AuthSession";
import Router from "next/router";
import {defaultRoute} from "../config/dashRoutes";

const HomePage = (): any =>
{
	const cookies = getSession();
	const isAuth = cookies?.user && cookies?.user.enable && cookies?.user.id;

	useEffect(() =>
	{
		if (isAuth)
		{
			getDefaultRoute();
		}
		else
		{
			getLoginRoute();
		}
	})

	const getDefaultRoute = () =>
	{
		Router.push(defaultRoute);
	}

	const getLoginRoute = () =>
	{
		Router.push('/login');
	}

	return (
		<span>...Redirecting</span>
	)
}

export default HomePage
