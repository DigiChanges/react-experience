
const AUTH_PROTOCOL =  process.env.NEXT_PUBLIC_AUTH_PROTOCOL // 'http'
const AUTH_HOSTNAME = process.env.NEXT_PUBLIC_AUTH_HOSTNAME // 'localhost'
const AUTH_PORT = process.env.NEXT_PUBLIC_AUTH_PORT // '8089'

const API_PROTOCOL =  process.env.NEXT_PUBLIC_API_PROTOCOL // 'http'
const API_HOSTNAME = process.env.NEXT_PUBLIC_API_HOSTNAME //'localhost'
const API_PORT = process.env.NEXT_PUBLIC_API_PORT // '8089'

const BACKEND_BASE_AUTH_PATH = 'api/auth'
const BACKEND_BASE_PATH = 'api'

export const config = {
  restApiAuth: {
    server: {
      protocol: AUTH_PROTOCOL,
      hostname: AUTH_HOSTNAME,
      port: AUTH_PORT 
    },
    routes: {
      login: `${BACKEND_BASE_AUTH_PATH}/login`,
      //TODO
      // signout: '/signout'
    }
  },
  apiGateway: {
    server: {
      protocol: API_PROTOCOL,
      hostname: API_HOSTNAME,
      port: API_PORT 
    },
    routes: {
      users: {
        getAll: `${BACKEND_BASE_PATH}/users`,
        create: `${BACKEND_BASE_PATH}/users`,
        remove: `${BACKEND_BASE_PATH}/users`
      }
    }
  }
}
