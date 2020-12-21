import { Cookies } from 'react-cookie'

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

export const removeSession = () => {
  let cookies = getCookies()
  cookies.remove(USER, { path: '/' });
  cookies.remove(EXPIRES, { path: '/' });
  cookies.remove(TOKEN, { path: '/' });
}