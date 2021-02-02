import { config } from '../api/config'
import { getHeader } from '../api/auth'
import HttpRequest from "../helpers/httpRequest";

const { protocol, hostname, port } = config.apiGateway.server
const { login, permissionsGetAll } = config.apiGateway.routes.auth

export const signin = (email, password) =>
{
  const requestOptions = {
    url: `${ protocol }://${ hostname }:${ port }/${ login }`,
    method: 'POST',
    body: { email, password },
    headers: {'Content-Type': 'application/json'}
  };

  return HttpRequest.request(requestOptions);
}

export const getAllPermissions = () =>
{
  const requestOptions = {
    url: `${ protocol }://${ hostname }:${ port }/${ permissionsGetAll }`,
    method: 'GET',
    headers: getHeader()
  };

  return HttpRequest.request(requestOptions);
}
