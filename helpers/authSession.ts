import {Cookies} from 'react-cookie'
import jwt_decode from 'jwt-decode'
import Router from 'next/router'
import moment from 'moment';

const USER = 'user';
const EXPIRES = 'expires';
const TOKEN = 'token';
const PERMISSIONS_LIST = 'permissionsList';
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

export const setPermsCookies = data =>
{
	const cookies = getCookies()
	cookies.set(PERMISSIONS_LIST, JSON.stringify(data), {path: '/'});
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
	cookies.remove(PERMISSIONS_LIST, {path: '/'});
	cookies.remove(MINUTES_DIFFERENCE_TOKEN, {path: '/'});
}

// export const isForExpired = () =>
// {
// 	let isAlive = false;
//
// 	if (isToken())
// 	{
// 		const {exp}: any = tokenDecode();
// 		isAlive = isTokenAlive(exp);
// 	}
//
// 	return isAlive;
// }
//
// const isTokenAlive = (exp: number) =>
// {
// 	const session = getSession();
//
// 	// console.log('session');
// 	// console.log(session);
//
// 	// console.log('exp')
// 	// console.log(exp)
// 	//
// 	// console.log('Date.now() / 1000')
// 	// console.log(Date.now() / 1000)
//
// 	return exp > (Date.now() / 1000)
// }
//
// const isToken = () =>
// {
// 	const cookies = getCookies();
// 	return cookies === cookies.get(TOKEN);
// }
//
// const tokenDecode = () =>
// {
// 	const cookies = getCookies();
// 	return jwt_decode(cookies.get(TOKEN));
// }