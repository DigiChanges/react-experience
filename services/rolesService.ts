import { HttpRequest } from '../helpers'
import { config } from '../api/config'
import { getHeader } from '../api/auth'

const { protocol, hostname, port } = config.apiGateway.server
const { 
  getAll, 
  create, 
  update, 
  editRole, 
  remove  } = config.apiGateway.routes.roles

export const getAllRoles = () => {
  const requestOptions = {
    url: `${ protocol }://${ hostname }:${ port }/${ getAll }`,
    method: 'GET',
    headers: getHeader()
  }
  return HttpRequest.request(requestOptions)
}
export const postRole = (body: {}) => {
  const requestOptions = {
    url: `${ protocol }://${ hostname }:${ port }/${ create }`,
    method: 'POST',
    body,
    headers: getHeader()
  }
  return HttpRequest.request(requestOptions)
}

export const putRole = (id: string, body: {}) => {
  const requestOptions = {
    url: `${ protocol }://${ hostname }:${ port }/${ update.replace(':id', id) }`,
    method: 'PUT',
    body,
    headers: getHeader()
  }
  return HttpRequest.request(requestOptions)
}

export const assignRoles = (id: string, body: {}) => {
  const requestOptions = {
    url: `${ protocol }://${ hostname }:${ port }/${ editRole.replace(':id', id) }`,
    method: 'PUT',
    body,
    headers: getHeader()
  }
  return HttpRequest.request(requestOptions)
}

export const deleteRole = (id: string) => {
  const requestOptions = {
    url: `${ protocol }://${ hostname }:${ port }/${ remove.replace(':id', id) }`,
    method: 'DELETE',
    headers: getHeader()
  }
  return HttpRequest.request(requestOptions)
}