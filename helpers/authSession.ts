import { Cookies } from 'react-cookie'
import jwt_decode from 'jwt-decode'
import Router from 'next/router'

const USER = 'user'
const EXPIRES = 'expires'
const TOKEN = 'token'

let cookies
const getCookies = () => {
  if (!cookies) {
    cookies = new Cookies()
  }
  return cookies
}

export const setSession = data => {
  let cookies = getCookies()
  const { expires, user, token } = data
  cookies.set(USER, JSON.stringify(user), { path: '/' });
  cookies.set(EXPIRES, JSON.stringify(expires), { path: '/' });
  cookies.set(TOKEN, JSON.stringify(token), { path: '/' });
}

export const getSession = () => {
  let cookies = getCookies()
  return cookies.getAll()
}

export const isSessionTokenAlive = () => {
  const cookies = getCookies()
  if (cookies && cookies.get(TOKEN) ) {
    //@ts-ignore
    const isAlive = isTokenAlive( jwt_decode( cookies.get(TOKEN) ).exp )
    if (!isAlive) {
      removeSession()
      Router.replace('/login')
    }
    return isAlive
  }
  return false
}

const isTokenAlive = (exp: number) => exp > (Date.now() / 1000)

export const removeSession = () => {
  let cookies = getCookies()
  cookies.remove(USER, { path: '/' });
  cookies.remove(EXPIRES, { path: '/' });
  cookies.remove(TOKEN, { path: '/' });
}
