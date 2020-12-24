import React, { Fragment, useEffect } from 'react'
import IndexPage from '../pages/login'
import HomePage from '../pages/index';
import { useRouter } from 'next/router'
import { withCookies } from 'react-cookie'
import { useDispatch } from 'react-redux'
import { setStartPathname } from '../redux/paths/actions'

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
        return children
      } else {
        return <HomePage />
      }
    } else {
      return <IndexPage />
    }
  }

  return (
    <Fragment>
      { renderChildren() }
    </Fragment>  
  )
}

export default withCookies(AuthProvider)
