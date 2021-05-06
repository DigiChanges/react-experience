import {ParsedUrlQuery} from "querystring";
import {
	GET_USERS,
	GET_USERS_SUCCESS,
	GET_USER,
	GET_USER_SUCCESS,
	CREATE_USER,
	UPDATE_USER,
	CHANGE_PASSWORD_USER,
	REMOVE_USER,
	REMOVE_USER_SUCCESS,
	RESET_USERS
} from './constants';

import { ReduxActions } from "../../interfaces/default";
import {IChangePasswordPayload, IUserApi, IUserPayload} from "../../interfaces/user";

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

export const updateUser = (body: IUserPayload, id: string): ReduxActions =>
{
	return ({
		type: UPDATE_USER,
		payload: { body, id }
	});
}

export const changePasswordUser = (body: IChangePasswordPayload, id: string): ReduxActions => ({
    type: CHANGE_PASSWORD_USER,
    payload: { body, id }
})

export const removeUser = (id: string): ReduxActions => ({
  type: REMOVE_USER,
  payload: id
})

export const removeUserSuccess = (user: any): ReduxActions => ({
  type: REMOVE_USER_SUCCESS,
  payload: user
})
