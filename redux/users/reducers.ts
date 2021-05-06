import {
	GET_USERS_SUCCESS,
	REMOVE_USER_SUCCESS,
	RESET_USERS, GET_USER_SUCCESS
} from './constants';
import _ from "lodash";
import {ReduxActions} from "../../interfaces/default";

const INIT_STATE = {
  usersList: [],
  userSelected: null
}

export type State = {
  usersList: any[],
  userSelected: any | null
}

const updateUser = (user, users) => {
  if (users && users.length > 0) {
    const userIndex = users.findIndex(u => u.id === user.id)
    if (userIndex > -1) {
      users[userIndex] = user
    }
    return users
  }
  return INIT_STATE.usersList
}

const deleteUser = (user, users) => (
  users && users.length > 0
    ? users.filter(u => u.id !== user.id)
    : INIT_STATE.usersList
)

const getUsers = (newUsers, currentUsers) => {
	return _.concat(currentUsers, newUsers);
}

const Users = (state: State = INIT_STATE, action: ReduxActions) => {
  switch (action.type)
  {
    case GET_USERS_SUCCESS:
      return { ...state, usersList: getUsers(action.payload, state.usersList) }

    case RESET_USERS:
      return { ...state, usersList: INIT_STATE.usersList }

    case GET_USER_SUCCESS:
      return { ...state, userSelected: action.payload }

    case REMOVE_USER_SUCCESS:
      return { ...state, usersList: deleteUser(action.payload, state.usersList) }

    default:
      return { ...state }
  }
}

export default Users;
