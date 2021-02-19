import {Cookies} from 'react-cookie'
import jwt_decode from 'jwt-decode'
import Router from 'next/router'

const USER = 'user'
const EXPIRES = 'expires'
const TOKEN = 'token'
const PERMISSIONSLIST = 'permissionsList'

let cookies
const getCookies = () =>
{
	if (!cookies)
	{
		cookies = new Cookies()
	}
	return cookies
}

export const setSession = ({expires, user, token}) =>
{
	const cookies = getCookies()
	cookies.set(USER, JSON.stringify(user), {path: '/'});
	cookies.set(EXPIRES, JSON.stringify(expires), {path: '/'});
	cookies.set(TOKEN, JSON.stringify(token), {path: '/'});
}

export const setPermsCookies = data =>
{
	const cookies = getCookies()
	cookies.set(PERMISSIONSLIST, JSON.stringify(data), {path: '/'});
}

export const getSession = () =>
{
	const cookies = getCookies()
	return cookies.getAll()
}

export const isSessionTokenAlive = () =>
{
	const cookies = getCookies()

	if (cookies && cookies.get(TOKEN))
	{
		const {exp}: any = jwt_decode(cookies.get(TOKEN));
		const isAlive = isTokenAlive(exp);

		if (!isAlive)
		{
			removeSession()
			Router.replace('/login')
		}

		return isAlive
	}

	return false
}

const isTokenAlive = (exp: number) => exp > (Date.now() / 1000)

export const removeSession = () =>
{
	const cookies = getCookies()
	cookies.remove(USER, {path: '/'});
	cookies.remove(EXPIRES, {path: '/'});
	cookies.remove(TOKEN, {path: '/'});
	cookies.remove(PERMISSIONSLIST, {path: '/'});
}
