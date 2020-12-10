
//TODO: Create .env consts
//https://pokeapi.co/api/v2/pokemon
const AUTH_PROTOCOL =  ''
const AUTH_HOSTNAME = ''
const AUTH_PORT = ''

const API_PROTOCOL =  ''
const API_HOSTNAME = ''
const API_PORT = ''

const BACKEND_BASE_AUTH = ''

export const config = {
  restApiAuth: {
    server: {
      protocol: AUTH_PROTOCOL,
      hostname: AUTH_HOSTNAME,
      port: AUTH_PORT 
    },
    routes: {
      signin: '/signin',
      signout: '/signout'
    }
  },
  apiGateway: {
    server: {
      protocol: API_PROTOCOL,
      hostname: API_HOSTNAME,
      port: API_PORT 
    },
    routes: {
      //for example, projects getAll url endpoint
      getAll: `${BACKEND_BASE_AUTH}/projects`
    }
  }
}