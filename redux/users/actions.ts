import {
	GET_USERS,
	GET_USERS_SUCCESS,
	SELECTED_USER,
	UNSELECTED_USER,
	CREATE_USER,
	CREATE_USER_SUCCESS,
	UPDATE_USER,
	UPDATE_USER_SUCCESS,
	CHANGE_PASSWORD,
	REMOVE_USER,
	REMOVE_USER_SUCCESS, RESET_USERS
} from './constants';
import {ParsedUrlQuery} from "querystring";

export interface UserActions {
  type: string
  payload: any | null
}

export const getUsers = (userFilterQueryParam: ParsedUrlQuery, nextQueryParamsPagination: string): UserActions => ({
  type: GET_USERS,
  payload: { userFilterQueryParam, nextQueryParamsPagination }
})

export const getUserSuccess = (users: any): UserActions => ({
  type: GET_USERS_SUCCESS,
  payload: users
})

export const resetUsers = (): UserActions => ({
  type: RESET_USERS,
  payload: null
})

export const selectedUser = (id: string): UserActions => ({
  type: SELECTED_USER,
  payload: id
})

export const unselectedUser = (): UserActions => ({
  type: UNSELECTED_USER,
  payload: null
})

export const createUser = (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  passwordConfirmation: string,
  permissions: string[],
  roles: any[]
): UserActions => ({
  type: CREATE_USER,
  payload: { firstName, lastName, email, password, passwordConfirmation, permissions, roles }
})

export const createUserSuccess = (user: any): UserActions => ({
  type: CREATE_USER_SUCCESS,
  payload: user
})

export const updateUser = (
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  permissions: [],
  roles: [],
  enable: boolean
): UserActions => ({
  type: UPDATE_USER,
  payload: { id, firstName, lastName, email, permissions, roles, enable }
})

export const updateUserSuccess = (user: any): UserActions => ({
  type: UPDATE_USER_SUCCESS,
  payload: user
})

export const changePassword = (
  id: string,
  password: string,
  passwordConfirmation: string
): UserActions => {
  return {
    type: CHANGE_PASSWORD,
    payload: { id, password, passwordConfirmation }
  }
}

export const removeUser = (id: string): UserActions => ({
  type: REMOVE_USER,
  payload: id
})

export const removeUserSuccess = (user: any): UserActions => ({
  type: REMOVE_USER_SUCCESS,
  payload: user
})
