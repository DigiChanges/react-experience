import {getSession, isSessionTokenAlive} from '../helpers/AuthSession'
import {IHeader} from "../interfaces/default";

export const getHeader = (): IHeader | null =>
{
	const {user, token} = getSession();
	const isAuth = user && token && isSessionTokenAlive();

	return isAuth
		? {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`
		}
		: null
}
