import {config} from '../api/config'
import {getHeader} from '../api/auth'
import HttpRequest from "../helpers/HttpRequest";
import { IRolePayload } from '../interfaces/role';

const {protocol, hostname, port} = config.apiGateway.server
const {getAll, create, update, remove, getOne} = config.apiGateway.routes.roles

export const getAllRoles = (uriParam?: string) =>
{
    const params = uriParam ? `?${uriParam}`: '';

	const requestOptions = {
    url: `${protocol}://${hostname}:${port}/${getAll}${params}`,
		method: 'GET',
		headers: getHeader()
	}

	return HttpRequest.request(requestOptions);
}

export const getOneRole = (id: string) => {
  const requestOptions = {
    url: `${protocol}://${hostname}:${port}/${getOne.replace(':id', id)}`,
    method: 'GET',
    headers: getHeader()
  };

  return HttpRequest.request(requestOptions);
}

export const postRole = (body: IRolePayload) =>
{
	const requestOptions = {
		url: `${protocol}://${hostname}:${port}/${create}`,
		method: 'POST',
		body,
		headers: getHeader()
	}

	return HttpRequest.request(requestOptions);
}

export const putRole = (id: string, body: IRolePayload) =>
{
	const requestOptions = {
		url: `${protocol}://${hostname}:${port}/${update.replace(':id', id)}`,
		method: 'PUT',
		body,
		headers: getHeader()
	}

	return HttpRequest.request(requestOptions);
}

export const deleteRole = (id: string) =>
{
	const requestOptions = {
		url: `${protocol}://${hostname}:${port}/${remove.replace(':id', id)}`,
		method: 'DELETE',
		headers: getHeader()
	};

	return HttpRequest.request(requestOptions);
}
