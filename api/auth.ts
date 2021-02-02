import { getSession, isSessionTokenAlive } from '../helpers/authSession'

export const getHeader = () =>
{
  const { user, token } = getSession();
  const isAuth = user && token && isSessionTokenAlive();

  return isAuth
    ? { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ token }`
      }
    : null
}
