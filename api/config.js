
const AUTH_PROTOCOL =  'http'
const AUTH_HOSTNAME = 'localhost'
const AUTH_PORT = '8089'

const API_PROTOCOL =  'http'
const API_HOSTNAME = 'localhost'
const API_PORT = '8089'

const BACKEND_BASE_PATH = 'api/auth'

export const config = {
  restApiAuth: {
    server: {
      protocol: AUTH_PROTOCOL,
      hostname: AUTH_HOSTNAME,
      port: AUTH_PORT 
    },
    routes: {
      login: `${BACKEND_BASE_PATH}/login`,
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
      //TODO
      // products: {
      //   getAll: `${BACKEND_BASE_PATH}/products`
      // }
    }
  }
}
