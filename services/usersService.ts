// TODO: Refactor to repository pattern

import { config } from '../api/config'
import { getHeader } from '../api/auth'
import HttpRequest from "../helpers/HttpRequest";
import {IChangePasswordPayload, IUserPayload} from "../interfaces/user";

const { protocol, hostname, port } = config.apiGateway.server
const { getAll, getOne, create, update, editPassword, remove, assignRole } = config.apiGateway.routes.users

export const getAllUsers = (uriParam: string) => {
  const requestOptions = {
    url: `${protocol}://${hostname}:${port}/${getAll}?${uriParam}`,
    method: 'GET',
    headers: getHeader()
  };

  return HttpRequest.request(requestOptions);
}

export const getOneUser = (id: string) => {
  const requestOptions = {
    url: `${protocol}://${hostname}:${port}/${getOne.replace(':id', id)}`,
    method: 'GET',
    headers: getHeader()
  };

  return HttpRequest.request(requestOptions);
}

export const postUser = (body: IUserPayload) => {

  const requestOptions = {
    url: `${protocol}://${hostname}:${port}/${create}`,
    method: 'POST',
    body,
    headers: getHeader()
  };

  return HttpRequest.request(requestOptions);
}

export const putUser = (body: IUserPayload, id: string) => {
  const requestOptions = {
    url: `${protocol}://${hostname}:${port}/${update.replace(':id', id)}`,
    method: 'PUT',
    body,
    headers: getHeader()
  };

  return HttpRequest.request(requestOptions);
}

export const changeUserPassword = (body: IChangePasswordPayload, id: string) => {
  const requestOptions = {
    url: `${protocol}://${hostname}:${port}/${editPassword.replace(':id', id)}`,
    method: 'PUT',
    body,
    headers: getHeader()
  };

  return HttpRequest.request(requestOptions);
}

export const deleteUser = (id: string) => {
  const requestOptions = {
    url: `${protocol}://${hostname}:${port}/${remove.replace(':id', id)}`,
    method: 'DELETE',
    headers: getHeader()
  };

  return HttpRequest.request(requestOptions);
}

export const assignUserRole = (id: string, body: any) => {
  const requestOptions = {
    url: `${protocol}://${hostname}:${port}/${assignRole.replace(':id', id)}`,
    method: 'PUT',
    body,
    headers: getHeader()
  };

  return HttpRequest.request(requestOptions);
}
