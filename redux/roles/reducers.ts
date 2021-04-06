import {
	GET_ROLES_SUCCESS,
	SELECTED_ROLE,
	UNSELECTED_ROLE,
	CREATE_ROLE_SUCCESS,
	UPDATE_ROLE_SUCCESS,
	REMOVE_ROLE_SUCCESS
} from './constants';
import {RolesActions} from './actions';

const INIT_STATE = {
	rolesList: null,
	roleSelected: null,
}

type State = {
	rolesList: [] | null
}

const addRole = (newRole, roles) =>
{
	if (!roles)
	{
		roles = []
	}
	roles.push(newRole)
	return roles
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

const Roles = (state: State = INIT_STATE, action: RolesActions) =>
{
	switch (action.type)
	{
		case GET_ROLES_SUCCESS:
			return {...state, rolesList: action.payload}

		case SELECTED_ROLE:
			return {...state, roleSelected: getSelectedRole(action.payload, state.rolesList)}

		case UNSELECTED_ROLE:
			return {...state, roleSelected: INIT_STATE.roleSelected}

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
