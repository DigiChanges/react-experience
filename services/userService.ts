import { HttpRequest } from '../helpers'
import { config } from '../api/config'

const { protocol, hostname, port } = config.restApiAuth.server

export const signin = (username, password) => {
  const requestOptions = {
    // url: `${ protocol }://${ hostname }:${ port }/auth-signin`,
    // method: 'POST',
    // body: {username, password},
    url: 'https://pokeapi.co/api/v2/pokemon',
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
  }
  return HttpRequest.request(requestOptions)
}