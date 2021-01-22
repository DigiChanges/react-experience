import { GET_ROLES,
  GET_ROLES_SUCCESS,
  SELECTED_ROLE,
  UNSELECTED_ROLE,
  CREATE_ROLE,
  CREATE_ROLE_SUCCESS,
  UPDATE_ROLE,
  UPDATE_ROLE_SUCCESS,
  CHANGE_ROLE,
  REMOVE_ROLE,
  REMOVE_ROLE_SUCCESS
 } from './constants';

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

export const selectedRole = (id: string): RolesActions => ({
  type: SELECTED_ROLE,
  payload: id
})

export const unselectedRole = (): RolesActions => ({
  type: UNSELECTED_ROLE,
  payload: null
})

export const createRole = (
  id: string,
  roleName: string, 
  roleLevel: number
  ): RolesActions => ({
    type: CREATE_ROLE,
    payload: { id, roleName, roleLevel }
  })

export const createRoleSuccess = (roles: {}): RolesActions => ({
  type: CREATE_ROLE_SUCCESS,
  payload: roles
})

export const updateRole = (
  id: string,
  roleName: string, 
  roleLevel: number,
  enable: boolean
): RolesActions => ({
  type: UPDATE_ROLE,
  payload: { id, roleName, roleLevel, enable }
})

export const updateRoleSuccess = (roles: {}): RolesActions => ({
  type: UPDATE_ROLE_SUCCESS,
  payload: roles
})

export const changeRole = (
  id: string, 
  roleName: string, 
  roleLevel: string
): RolesActions => {
  return {
    type: CHANGE_ROLE,
    payload: { id, roleName, roleLevel } 
  }
}

export const removeRole = (id: string): RolesActions => ({
  type: REMOVE_ROLE,
  payload: id
})

export const removeRoleSuccess = (roles: {}): RolesActions => ({
  type: REMOVE_ROLE_SUCCESS,
  payload: roles
})



