import { HttpRequest } from '../helpers'
import { config } from '../api/config'

const { protocol, hostname, port } = config.restApiAuth.server
const { login } = config.restApiAuth.routes

export const signin = (email, password) => {
  const requestOptions = {
    url: `${ protocol }://${ hostname }:${ port }/${ login }`,
    method: 'POST',
    body: { email, password },
    headers: {'Content-Type': 'application/json'}
  }
  return HttpRequest.request(requestOptions)
}
