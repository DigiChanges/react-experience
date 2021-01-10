import { HttpRequest } from '../helpers'
import { config } from '../api/config'
import { getHeader } from '../api/auth'

const { protocol, hostname, port } = config.apiGateway.server
const { getAll, create, update, editPassword, remove } = config.apiGateway.routes.users

export const getAllUsers = () => {
  const requestOptions = {
    url: `${ protocol }://${ hostname }:${ port }/${ getAll }`,
    method: 'GET',
    headers: getHeader()
  }
  return HttpRequest.request(requestOptions)
}

export const postUser = body => {
  const requestOptions = {
    url: `${ protocol }://${ hostname }:${ port }/${ create }`,
    method: 'POST',
    body,
    headers: getHeader()
  }
  return HttpRequest.request(requestOptions)
}

export const putUser = (id, body) => {
  const requestOptions = {
    url: `${ protocol }://${ hostname }:${ port }/${ update.replace(':id', id) }`,
    method: 'PUT',
    body,
    headers: getHeader()
  }
  return HttpRequest.request(requestOptions)
}

export const changeUserPassword = (id, body) => {
  const requestOptions = {
    url: `${ protocol }://${ hostname }:${ port }/${ editPassword.replace(':id', id) }`,
    method: 'PUT',
    body,
    headers: getHeader()
  }
  return HttpRequest.request(requestOptions)
}

export const deleteUser = id => {
  const requestOptions = {
    url: `${ protocol }://${ hostname }:${ port }/${ remove.replace(':id', id) }`,
    method: 'DELETE',
    headers: getHeader()
  }
  return HttpRequest.request(requestOptions)
}
