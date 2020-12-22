import React, { Fragment } from 'react'
import Login from '../templates/login'
import { useRouter } from 'next/router'
import { withCookies } from 'react-cookie'

const AuthProvider = ({ children, ...props }) => {

  const { user } = props.allCookies
  const isAuth = user && user.enable && user.id 
  const router = useRouter()

  const renderChildren = () => {
    if (isAuth) {
      if (router.pathname !== '/login') {
        return children
      } else {
        router.replace('/')
      }
    } else {
      return <Login />
    }
  }

  return (
    <Fragment>
      { renderChildren() }
    </Fragment>   
  )
}

export default withCookies(AuthProvider)
