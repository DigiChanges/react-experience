import {
	GET_ROLES_SUCCESS,
	CREATE_ROLE_SUCCESS,
	UPDATE_ROLE_SUCCESS,
	REMOVE_ROLE_SUCCESS, RESET_ROLES
} from './constants';
import {ReduxActions} from "../../interfaces/default";
import _ from "lodash";

const INIT_STATE = {
	rolesList: [],
	roleSelected: null,
}

export type State = {
	rolesList: any[]
}

const addRole = (newRole, roles) =>
{
    const role = roles.find((role) => role.id === newRole.id);

    if (!roles)
	{
		roles = [];
	}

    if (!role)
    {
        roles.push(newRole);
    }

	return roles;
}

const updateRole = (role, roles) =>
{
	if (roles && roles.length > 0)
	{
		const roleIndex = roles.findIndex(r => r.id === role.id)
		if (roleIndex > -1)
		{
			roles[roleIndex] = role
		}
		return roles
	}
	return INIT_STATE.rolesList
}

const deleteRole = (role, roles) => (
	roles && roles.length > 0
		? roles.filter(r => r.id !== role.id)
		: INIT_STATE.rolesList
)

const getSelectedRole = (id, roles) => (
	roles &&
	roles.length > 0 &&
	roles.find(role => role.id === id)
)

const getRoles = (newRoles, currentRoles, pagination) =>
{
    if (!pagination) {
      return newRoles;
    }

	return _.concat(currentRoles, newRoles);
}

const Roles = (state: State = INIT_STATE, action: ReduxActions) =>
{
	switch (action.type)
	{
		case GET_ROLES_SUCCESS:
			return {...state, rolesList: getRoles(action.payload.roles, state.rolesList, action.payload.pagination)}

		case RESET_ROLES:
            return { ...state, rolesList: INIT_STATE.rolesList }

		case CREATE_ROLE_SUCCESS:
			return {...state, rolesList: addRole(action.payload, state.rolesList)}

		case UPDATE_ROLE_SUCCESS:
			return {...state, rolesList: updateRole(action.payload, state.rolesList)}

		case REMOVE_ROLE_SUCCESS:
			return {...state, rolesList: deleteRole(action.payload, state.rolesList)}

		default:
			return {...state}
	}
}

export default Roles
