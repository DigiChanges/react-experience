// const AUTH_PROTOCOL =  process.env.NEXT_PUBLIC_AUTH_PROTOCOL // 'http'
// const AUTH_HOSTNAME = process.env.NEXT_PUBLIC_AUTH_HOSTNAME // 'localhost'
// const AUTH_PORT = process.env.NEXT_PUBLIC_AUTH_PORT // '8089'

const API_PROTOCOL = process.env.NEXT_PUBLIC_API_PROTOCOL // 'http'
const API_HOSTNAME = process.env.NEXT_PUBLIC_API_HOSTNAME //'localhost'
const API_PORT = process.env.NEXT_PUBLIC_API_PORT // '8089'

// const BACKEND_BASE_AUTH_PATH = 'api/auth'
const BACKEND_BASE_PATH = 'api'

export const config = {
  // restApiAuth: {
  //   server: {
  //     protocol: AUTH_PROTOCOL,
  //     hostname: AUTH_HOSTNAME,
  //     port: AUTH_PORT 
  //   },
  //   routes: {
  //     login: `${BACKEND_BASE_PATH}/auth/login`,
  //     //TODO
  //     // signout: '/signout'
  //   }
  // },
  apiGateway: {
    server: {
      protocol: API_PROTOCOL,
      hostname: API_HOSTNAME,
      port: API_PORT
    },
    routes: {
      auth: {
        login: `${BACKEND_BASE_PATH}/auth/login`,
        permissionsGetAll: `${BACKEND_BASE_PATH}/auth/permissions`,
        keepAlive: `${BACKEND_BASE_PATH}/auth/keepAlive`,
        forgotPassword: `${BACKEND_BASE_PATH}/auth/forgotPassword`,
        changeForgotPassword: `${BACKEND_BASE_PATH}/auth/changeForgotPassword`
      },
      users: {
        getAll: `${BACKEND_BASE_PATH}/users`,
        getOne: `${BACKEND_BASE_PATH}/users/:id`,
        create: `${BACKEND_BASE_PATH}/users`,
        update: `${BACKEND_BASE_PATH}/users/:id`,
        remove: `${BACKEND_BASE_PATH}/users/:id`,
        editPassword: `${BACKEND_BASE_PATH}/users/changeUserPassword/:id`,
        assignRole: `${BACKEND_BASE_PATH}/users/assignRole/:id`
      },
      roles: {
        getAll: `${BACKEND_BASE_PATH}/roles`,
        getOne: `${BACKEND_BASE_PATH}/roles/:id`,
        create: `${BACKEND_BASE_PATH}/roles`,
        update: `${BACKEND_BASE_PATH}/roles/:id`,
        remove: `${BACKEND_BASE_PATH}/roles/:id`
      }
    }
  }
}
