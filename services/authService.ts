import {config} from '../api/config'
import {getHeader} from '../api/auth'
import HttpRequest from "../helpers/HttpRequest";

const {protocol, hostname, port} = config.apiGateway.server
const {login, permissionsGetAll, forgotPassword} = config.apiGateway.routes.auth

export const signin = (email, password) =>
{
	const requestOptions = {
		url: `${protocol}://${hostname}:${port}/${login}`,
		method: 'POST',
		body: {email, password},
		headers: {'Content-Type': 'application/json'}
	};

	return HttpRequest.request(requestOptions);
}

export const getAllPermissions = () =>
{
	const requestOptions = {
		url: `${protocol}://${hostname}:${port}/${permissionsGetAll}`,
		method: 'GET',
		headers: getHeader()
	};

	return HttpRequest.request(requestOptions);
}

export const getForgotPassword = (email) =>
{
	const requestOptions = {
		url: `${protocol}://${hostname}:${port}/${forgotPassword}`,
		method: 'POST',
		body: {email},
		headers: {'Content-Type': 'application/json'}
	};

	return HttpRequest.request(requestOptions);
}
