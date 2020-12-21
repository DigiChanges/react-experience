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
  cookies.set(USER, JSON.stringify(user), { path: '/', sameSite: 'none', secure: true });
  cookies.set(EXPIRES, JSON.stringify(expires), { path: '/', sameSite: 'none', secure: true });
  cookies.set(TOKEN, JSON.stringify(token), { path: '/', sameSite: 'none', secure: true });
}

export const getSession = () => {
  let cookies = getCookies()
  return cookies.getAll()
}

export const removeSession = () => {
  let cookies = getCookies()
  cookies.remove(USER, { path: '/', sameSite: 'none', secure: true });
  cookies.remove(EXPIRES, { path: '/', sameSite: 'none', secure: true });
  cookies.remove(TOKEN, { path: '/', sameSite: 'none', secure: true });
}