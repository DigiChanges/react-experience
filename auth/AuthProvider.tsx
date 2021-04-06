import React, {useEffect} from 'react'
import IndexPage from '../pages/login'
import HomePage from '../pages/index';
import {useRouter} from 'next/router'
import {withCookies} from 'react-cookie'
import {useDispatch, useSelector} from 'react-redux'
import {setCurrentPathname, setStartPathname} from '../redux/paths/actions'
import {setDataAfterReloading} from '../redux/auth/actions'
import PrivateLayout from '../templates/layout/PrivateLayout'
import FilterFactory from "../helpers/FilterFactory";

const AuthProvider = ({children, ...props}) =>
{
	const dispatch = useDispatch();

	const { user } = props.allCookies;
	
	const auth  = useSelector(store => store.Auth);
	const { isLoading } = useSelector(state => state.General);
	
	const isAuth = user && user.enable && user.id;
	const router = useRouter();

	useEffect(() =>
	{
		console.log("router.query", router.query)

		const uriParam = FilterFactory.getPath(router.query);

		if (!isAuth)
		{
			dispatch(setStartPathname(router.pathname));
			router.push('/login');
		}
		if (!auth?.user && user)
		{
			console.log(router.pathname)
			console.log(router.route)
			dispatch(setDataAfterReloading(user))
			dispatch(setCurrentPathname(router.pathname))
			// router.replace(router.pathname)
		}
		if(!isLoading)
		{
			dispatch(setCurrentPathname(router.pathname))
			// router.replace(router.pathname)
		}
	}, [])

	const renderChildren = () =>
	{
		if (isAuth)
		{
			return router.pathname !== '/login'
				? <PrivateLayout>{children}</PrivateLayout>
				: <HomePage/>
		}
		else
		{
			return <IndexPage/>
		}
	}

	return renderChildren();
}

export default withCookies(AuthProvider);
