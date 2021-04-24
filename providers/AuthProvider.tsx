import React, {useEffect, useState} from 'react'
import Router from 'next/router';
import PrivateLayout from '../templates/layout/PrivateLayout'
import {publicRoutes} from "../config/dashRoutes";
import PublicLayout from "../templates/layout/PublicLayout";
import {getSession} from "../helpers/AuthSession";

const AuthProvider = ({children}) =>
{
	const cookies = getSession();
	const [publicRoute, setPublicRoute] = useState(null);
	const [isAuth, setIsAuth] = useState(false)

	useEffect(() =>
	{
		setIsAuth(cookies?.user && cookies?.user.enable && cookies?.user.id)
	}, [cookies])

	useEffect(() =>
	{
		setPublicRoute(publicRoutes.find((route) => route === Router.pathname));
	}, [])

	const renderChildren = () =>
	{
		if (publicRoute)
		{
			return <PublicLayout>{children}</PublicLayout>;
		}
		
		return isAuth && typeof window !== 'undefined' && Router.pathname !== '/login'
			? <PrivateLayout>{children}</PrivateLayout>
			: <PublicLayout>{children}</PublicLayout>
	}

	return renderChildren();
}

export default AuthProvider;
