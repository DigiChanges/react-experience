import React, {useEffect} from 'react'
import IndexPage from '../pages/login'
import HomePage from '../pages/index';
import {useRouter} from 'next/router'
import {withCookies} from 'react-cookie'
import {useDispatch, useSelector} from 'react-redux'
import {setStartPathname} from '../redux/paths/actions'
import {setDataAfterReloading} from '../redux/auth/actions'
import PrivateLayout from '../templates/layout/PrivateLayout'

const AuthProvider = ({children, ...props}) =>
{

	const dispatch = useDispatch()

	const {user, permissionsList } = props.allCookies
	
	const auth  = useSelector(store => store.Auth);
	
	const isAuth = user && user.enable && user.id
	const router = useRouter()

	useEffect(() =>
	{
		if (!isAuth)
		{
			dispatch(setStartPathname(router.pathname))
			router.replace('/login')
		}
		if (!auth?.user && user && permissionsList) 
		{
			dispatch(setDataAfterReloading(user, permissionsList))
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

	return renderChildren()
}

export default withCookies(AuthProvider)
