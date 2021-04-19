import {ParsedUrlQuery} from "querystring";
import {
	GET_USERS,
	GET_USERS_SUCCESS,
	GET_USER,
	GET_USER_SUCCESS,
	CREATE_USER,
	CREATE_USER_SUCCESS,
	UPDATE_USER,
	UPDATE_USER_SUCCESS,
	CHANGE_PASSWORD,
	REMOVE_USER,
	REMOVE_USER_SUCCESS,
	RESET_USERS
} from './constants';

import { ReduxActions } from "../../interfaces/default";
import {IUserApi, IUserPayload} from "../../interfaces/user";

export const getUsers = (userFilterQueryParam: ParsedUrlQuery, nextQueryParamsPagination: string): ReduxActions => ({
  type: GET_USERS,
  payload: { userFilterQueryParam, nextQueryParamsPagination }
})

export const getUsersSuccess = (users: IUserApi[]): ReduxActions => ({
  type: GET_USERS_SUCCESS,
  payload: users
})

export const getUser = (id: string): ReduxActions => ({
  type: GET_USER,
  payload: id
})

export const getUserSuccess = (users: IUserApi): ReduxActions => ({
  type: GET_USER_SUCCESS,
  payload: users
})

export const resetUsers = (): ReduxActions => ({
  type: RESET_USERS,
  payload: null
})

export const createUser = (payload: IUserPayload): ReduxActions => ({
  type: CREATE_USER,
  payload
})

export const createUserSuccess = (payload: IUserApi): ReduxActions => ({
  type: CREATE_USER_SUCCESS,
  payload
})

export const updateUser = (body: IUserPayload, id: string): ReduxActions =>
{
	return ({
		type: UPDATE_USER,
		payload: { body, id }
	});
}

export const updateUserSuccess = (payload: IUserApi): ReduxActions => ({
  type: UPDATE_USER_SUCCESS,
  payload
})

export const changePassword = (
  id: string,
  password: string,
  passwordConfirmation: string
): ReduxActions => {
  return {
    type: CHANGE_PASSWORD,
    payload: { id, password, passwordConfirmation }
  }
}

export const removeUser = (id: string): ReduxActions => ({
  type: REMOVE_USER,
  payload: id
})

export const removeUserSuccess = (user: any): ReduxActions => ({
  type: REMOVE_USER_SUCCESS,
  payload: user
})
