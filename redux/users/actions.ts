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
  RESET_USERS, RESET_USER_SELECTED
} from './constants';

import { ReduxAction } from "../../interfaces/default";
import {IChangePasswordPayload, IUserApi, IUserPayload} from "../../interfaces/user";
import { RESET_ROLE_SELECTED } from '../roles/constants';

export const getUsers = (userFilterQueryParam: ParsedUrlQuery, nextQueryParamsPagination: string): ReduxAction => ({
  type: GET_USERS,
  payload: { userFilterQueryParam, nextQueryParamsPagination }
})

export const getUsersSuccess = (users: IUserApi[]): ReduxAction => ({
  type: GET_USERS_SUCCESS,
  payload: users
})

export const getUser = (id: string): ReduxAction => ({
  type: GET_USER,
  payload: id
})

export const getUserSuccess = (users: IUserApi): ReduxAction => ({
  type: GET_USER_SUCCESS,
  payload: users
})

export const resetUsers = (): ReduxAction => ({
  type: RESET_USERS,
  payload: null
})

export const resetUserSelected = (): ReduxAction => ({
  type: RESET_USER_SELECTED,
  payload: null
})

export const createUser = (payload: IUserPayload): ReduxAction => ({
  type: CREATE_USER,
  payload
})

export const updateUser = (body: IUserPayload, id: string): ReduxAction =>
{
	return ({
		type: UPDATE_USER,
		payload: { body, id }
	});
}

export const changePasswordUser = (body: IChangePasswordPayload, id: string): ReduxAction => ({
    type: CHANGE_PASSWORD_USER,
    payload: { body, id }
})

export const removeUser = (id: string): ReduxAction => ({
  type: REMOVE_USER,
  payload: id
})

export const removeUserSuccess = (user: any): ReduxAction => ({
  type: REMOVE_USER_SUCCESS,
  payload: user
})
