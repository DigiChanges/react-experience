import { GET_ROLES,
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
  name: string, 
  slug: string,
  permissions: [],
  ): RolesActions => ({
    type: CREATE_ROLE,
    payload: { name, slug, permissions }
  })

export const createRoleSuccess = (roles: {}): RolesActions => ({
  type: CREATE_ROLE_SUCCESS,
  payload: roles
})

export const updateRole = (
  id: string,
  name: string, 
  slug: string,
  permissions: [],
  enable: boolean
): RolesActions => ({
  type: UPDATE_ROLE,
  payload: {id, name, slug, permissions,enable }
})

export const updateRoleSuccess = (roles: {}): RolesActions => ({
  type: UPDATE_ROLE_SUCCESS,
  payload: roles
})


export const removeRole = (id: string): RolesActions => ({
  type: REMOVE_ROLE,
  payload: id
})

export const removeRoleSuccess = (roles: {}): RolesActions => ({
  type: REMOVE_ROLE_SUCCESS,
  payload: roles
})



