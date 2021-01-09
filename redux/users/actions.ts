import {
  GET_USERS,
  GET_USERS_SUCCESS,
  CREATE_USER,
  CREATE_USER_SUCCESS,
} from './constants'

export interface UserActions {
  type: string
  payload: {} | null
}

export const getUsers = () => ({
  type: GET_USERS,
  payload: null
})

export const getUserSuccess = users => ({
  type: GET_USERS_SUCCESS,
  payload: users
})







export const createUser = (
  firstName: string, 
  lastName: string,
  email: string,
  password: string,
  roles: {} 
  ): UserActions => ({
    type: CREATE_USER,
    payload: { firstName, lastName, email, password, roles }
  })

export const createUserSuccess = (user:{}): UserActions => ({
  type: CREATE_USER_SUCCESS,
  payload: user
})

