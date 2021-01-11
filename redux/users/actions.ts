import {
  GET_USERS,
  GET_USERS_SUCCESS,
  SELECTED_USER,
  UNSELECTED_USER,
  CREATE_USER,
  CREATE_USER_SUCCESS,
  SELECTED_USER_TO_UPDATE,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  SELECTED_USER_TO_CHANGE_PASSWORD,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_SUCCESS,
  SELECTED_USER_TO_REMOVE,
  REMOVE_USER,
  REMOVE_USER_SUCCESS
} from './constants'

export interface UserActions {
  type: string
  payload: {} | null
}

export const getUsers = (): UserActions => ({
  type: GET_USERS,
  payload: null
})

export const getUserSuccess = (users: {}): UserActions => ({
  type: GET_USERS_SUCCESS,
  payload: users
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
  permissions: {},
  roles: {}
  ): UserActions => ({
    type: CREATE_USER,
    payload: { firstName, lastName, email, password, passwordConfirmation, permissions, roles }
  })

export const createUserSuccess = (user: {}): UserActions => ({
  type: CREATE_USER_SUCCESS,
  payload: user
})

export const selectedUserToUpdate = (id: string): UserActions => ({
  type: SELECTED_USER_TO_UPDATE,
  payload: id
})

export const updateUser = (
  id: string,
  firstName: string, 
  lastName: string,
  email: string,
  enable: boolean
): UserActions => ({
  type: UPDATE_USER,
  payload: { id, firstName, lastName, email, enable }
})

export const updateUserSuccess = (user: {}): UserActions => ({
  type: UPDATE_USER_SUCCESS,
  payload: user
})

export const selectedUserToChangePassword = (id: string): UserActions => ({
  type: SELECTED_USER_TO_CHANGE_PASSWORD,
  payload: id
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

export const changePasswordSuccess = (): UserActions => ({
  type: CHANGE_PASSWORD_SUCCESS,
  payload: null
})

export const selectedUserToRemove = (id: string): UserActions => ({
  type: SELECTED_USER_TO_REMOVE,
  payload: id
})

export const removeUser = (id: string): UserActions => ({
  type: REMOVE_USER,
  payload: id
})

export const removeUserSuccess = (user: {}): UserActions => ({
  type: REMOVE_USER_SUCCESS,
  payload: user
})
