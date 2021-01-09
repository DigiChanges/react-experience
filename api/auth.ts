import { getSession } from '../helpers/authSession'

export const getHeader = () => {
  const session = getSession()
  return session && session.user && session.token 
    ? { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ session.token }`
      }
    : {}
}
