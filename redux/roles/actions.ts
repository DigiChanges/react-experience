import {
	GET_ROLES,
	GET_ROLES_SUCCESS,
	CREATE_ROLE,
	UPDATE_ROLE,
	REMOVE_ROLE,
	REMOVE_ROLE_SUCCESS,
    RESET_ROLES
} from './constants';
import {ReduxActions} from "../../interfaces/default";
import {ParsedUrlQuery} from "querystring";

export const getRoles = (userFilterQueryParam?: ParsedUrlQuery, nextQueryParamsPagination?: string): ReduxActions => ({
	type: GET_ROLES,
  payload: { userFilterQueryParam, nextQueryParamsPagination }
})

export const getRolesSuccess = (roles: [], pagination): ReduxActions => ({
	type: GET_ROLES_SUCCESS,
	payload: { roles, pagination }
})

export const resetRoles = (): ReduxActions => ({
  type: RESET_ROLES,
  payload: null
})

export const createRole = (
	name: string,
	slug: string,
	permissions: [],
): ReduxActions => ({
	type: CREATE_ROLE,
	payload: {name, slug, permissions}
})

export const updateRole = (
	id: string,
	name: string,
	slug: string,
	permissions: [],
	enable: boolean
): ReduxActions => ({
	type: UPDATE_ROLE,
	payload: {id, name, slug, permissions, enable}
})

export const removeRole = (id: string): ReduxActions => ({
	type: REMOVE_ROLE,
	payload: id
})

export const removeRoleSuccess = (roles: any): ReduxActions => ({
	type: REMOVE_ROLE_SUCCESS,
	payload: roles
})
