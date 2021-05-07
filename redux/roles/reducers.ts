import {
  GET_ROLE_SUCCESS,
  GET_ROLES_SUCCESS,
  REMOVE_ROLE_SUCCESS, RESET_ROLE_SELECTED,
  RESET_ROLES
} from './constants';
import {ReduxAction} from "../../interfaces/default";
import _ from "lodash";
import { IRoleApi } from '../../interfaces/role';

const INIT_STATE = {
	rolesList: [],
	roleSelected: null,
}

export type State = {
	rolesList: any[],
    roleSelected: IRoleApi
}

const deleteRole = (role, roles) => (
	roles && roles.length > 0
		? roles.filter(r => r.id !== role.id)
		: INIT_STATE.rolesList
)

const getRoles = (newRoles, currentRoles, pagination) =>
{
    if (!pagination) {
      return newRoles;
    }

	return _.concat(currentRoles, newRoles);
}

const Roles = (state: State = INIT_STATE, action: ReduxAction) =>
{
	switch (action.type)
	{
		case GET_ROLES_SUCCESS:
			return {...state, rolesList: getRoles(action.payload.roles, state.rolesList, action.payload.pagination)}

        case GET_ROLE_SUCCESS:
          return { ...state, roleSelected: action.payload }

		case RESET_ROLES:
            return { ...state, rolesList: INIT_STATE.rolesList }

        case RESET_ROLE_SELECTED:
            return { ...state, roleSelected: action.payload }

		case REMOVE_ROLE_SUCCESS:
			return {...state, rolesList: deleteRole(action.payload, state.rolesList)}

		default:
			return {...state}
	}
}

export default Roles
