import React, { Fragment } from 'react'
import { useEffect } from 'react';
import Login from '../templates/login'
import { useRouter } from 'next/router'
import { withCookies } from 'react-cookie'

const AuthProvider = ({ children, ...props }) => {
  
  const { user } = props.allCookies
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.replace('/login')
    }
  }, [])

  return (
    <Fragment>
      { user ? children : <Login /> }
    </Fragment>   
  )
}

export default withCookies(AuthProvider)