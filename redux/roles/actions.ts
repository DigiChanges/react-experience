import { GET_ROLES, GET_ROLES_SUCCESS } from './constants';

export interface RolesActions {
  type: string,
  payload: {} | null
}

export const getRoles = (): RolesActions => ({
  type: GET_ROLES,
  payload: null
})

export const getRolesSuccess = (roles: []): RolesActions => ({
  type: GET_ROLES_SUCCESS,
  payload: roles
})




