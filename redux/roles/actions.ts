import {
  GET_ROLES,
  GET_ROLES_SUCCESS,
  CREATE_ROLE,
  UPDATE_ROLE,
  REMOVE_ROLE,
  REMOVE_ROLE_SUCCESS,
  RESET_ROLES,
  RESET_ROLE_SELECTED,
  GET_ROLE, GET_ROLE_SUCCESS
} from './constants';
import {ReduxAction} from "../../interfaces/default";
import {ParsedUrlQuery} from "querystring";
import { IRoleApi, IRolePayload } from '../../interfaces/role';

export const getRoles = (userFilterQueryParam?: ParsedUrlQuery, nextQueryParamsPagination?: string): ReduxAction => ({
	type: GET_ROLES,
  payload: { userFilterQueryParam, nextQueryParamsPagination }
})

export const getRolesSuccess = (roles: IRoleApi[], pagination): ReduxAction => ({
	type: GET_ROLES_SUCCESS,
	payload: { roles, pagination }
})

export const getRole = (id: string): ReduxAction => ({
  type: GET_ROLE,
  payload: id
})

export const getRoleSuccess = (users: IRoleApi): ReduxAction => ({
  type: GET_ROLE_SUCCESS,
  payload: users
})

export const resetRoles = (): ReduxAction => ({
  type: RESET_ROLES,
  payload: null
})

export const resetRoleSelected = (): ReduxAction => ({
  type: RESET_ROLE_SELECTED,
  payload: null
})

export const createRole = (payload: IRolePayload): ReduxAction   => ({
	type: CREATE_ROLE,
	payload
})

export const updateRole = (body: IRolePayload, id: string): ReduxAction => ({
	type: UPDATE_ROLE,
	payload: { body, id }
})

export const removeRole = (id: string): ReduxAction => ({
	type: REMOVE_ROLE,
	payload: id
})

export const removeRoleSuccess = (roles: any): ReduxAction => ({
	type: REMOVE_ROLE_SUCCESS,
	payload: roles
})
