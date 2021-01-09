import { HttpRequest } from '../helpers'
import { config } from '../api/config'
import { getHeader } from '../api/auth'

const { protocol, hostname, port } = config.apiGateway.server
const { getAll, create } = config.apiGateway.routes.users

export const getAllUsers = () => {
  const requestOptions = {
    url: `${ protocol }://${ hostname }:${ port }/${ getAll }`,
    method: 'GET',
    headers: getHeader()
  }
  return HttpRequest.request(requestOptions)
}

export const createUser = body => {
  const requestOptions = {
    url: `${ protocol }://${ hostname }:${ port }/${ create }`,
    method: 'POST',
    body,
    headers: getHeader()
  }
  return HttpRequest.request(requestOptions)
}
