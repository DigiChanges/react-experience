import React, { useEffect } from 'react'
import IndexPage from '../pages/login'
import HomePage from '../pages/index';
import { useRouter } from 'next/router'
import { withCookies } from 'react-cookie'
import { useDispatch } from 'react-redux'
import { setStartPathname } from '../redux/paths/actions'
import  PrivateLayout from '../templates/layout/PrivateLayout'

const AuthProvider = ({ children, ...props }) => {

  const dispatch = useDispatch()

  const { user } = props.allCookies
  const isAuth = user && user.enable && user.id 
  const router = useRouter()

  useEffect(() => {
    if (!isAuth) {
      dispatch( setStartPathname(router.pathname) )
      router.replace('/login')
    }
  }, [])

  const renderChildren = () => {
    if (isAuth) {
      if (router.pathname !== '/login') {
        return <PrivateLayout children={ children }/>
      } else {
        return <HomePage />
      }
    } else {
      return <IndexPage />
    }
  }

  return renderChildren()
}

export default withCookies(AuthProvider)
