import {Cookies} from 'react-cookie'
import jwt_decode from 'jwt-decode'
import Router from 'next/router'
import moment from 'moment';

const USER = 'user';
const EXPIRES = 'expires';
const TOKEN = 'token';
const MINUTES_DIFFERENCE_TOKEN = 'minutesDifferenceToken';

let cookies

export const getCookies = () =>
{
	if (!cookies)
	{
		cookies = new Cookies()
	}
	return cookies
}

export const getNowTimestamp = () =>
{
	return +moment().format('X');
}

export const setSession = ({expires, user, token}) =>
{
	const cookies = getCookies();

	const now = getNowTimestamp();
	const minutesDifference = (expires - now) / 60; // Expires and now are seconds

	cookies.set(USER, JSON.stringify(user), {path: '/'});
	cookies.set(EXPIRES, JSON.stringify(expires), {path: '/'});
	cookies.set(TOKEN, JSON.stringify(token), {path: '/'});
	cookies.set(MINUTES_DIFFERENCE_TOKEN, minutesDifference, {path: '/'});
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
	cookies.remove(MINUTES_DIFFERENCE_TOKEN, {path: '/'});
}
