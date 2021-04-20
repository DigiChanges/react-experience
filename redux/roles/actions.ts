import {
	GET_ROLES,
	GET_ROLES_SUCCESS,
	SELECTED_ROLE,
	UNSELECTED_ROLE,
	CREATE_ROLE,
	CREATE_ROLE_SUCCESS,
	UPDATE_ROLE,
	UPDATE_ROLE_SUCCESS,
	REMOVE_ROLE,
	REMOVE_ROLE_SUCCESS
} from './constants';
import {ReduxActions} from "../../interfaces/default";

export const getRoles = (): ReduxActions => ({
	type: GET_ROLES,
	payload: null
})

export const getRolesSuccess = (roles: []): ReduxActions => ({
	type: GET_ROLES_SUCCESS,
	payload: roles
})

export const selectedRole = (id: string): ReduxActions => ({
	type: SELECTED_ROLE,
	payload: id
})

export const unselectedRole = (): ReduxActions => ({
	type: UNSELECTED_ROLE,
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

export const createRoleSuccess = (roles: any): ReduxActions => ({
	type: CREATE_ROLE_SUCCESS,
	payload: roles
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

export const updateRoleSuccess = (roles: any): ReduxActions => ({
	type: UPDATE_ROLE_SUCCESS,
	payload: roles
})

export const removeRole = (id: string): ReduxActions => ({
	type: REMOVE_ROLE,
	payload: id
})

export const removeRoleSuccess = (roles: any): ReduxActions => ({
	type: REMOVE_ROLE_SUCCESS,
	payload: roles
})
