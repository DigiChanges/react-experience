import {
	GET_USERS_SUCCESS,
	CREATE_USER_SUCCESS,
	UPDATE_USER_SUCCESS,
	REMOVE_USER_SUCCESS,
	RESET_USERS, GET_USER_SUCCESS
} from './constants';
import _ from "lodash";
import {ReduxActions} from "../../interfaces/default";
import { HYDRATE } from 'next-redux-wrapper';

const INIT_STATE = {
  usersList: [],
  userSelected: null
}

export type State = {
  usersList: any[],
  userSelected: any | null
}

const addUser = (newUser, users) =>
{
    const user = users.find((user) => user.id === newUser.id);

    console.log('addUser 1', user, newUser, users);

    if (!users)
	{
        console.log('addUser 2',user, newUser, users);
		users = [];
	}

    console.log('addUser 3',user, newUser, users);
    if (!user)
    {
        console.log('addUser 4',user, newUser, users);
        users.push(newUser);
    }

    console.log('addUser 5',user, newUser, users);
	return users;
}

// const addUser = (newUser, users) => {
//   if (!users) {
//     users = []
//   }
//   users.push(newUser)
//   return users
// }

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
    case HYDRATE:
      return { ...state, ...action.payload.Users }

    case GET_USERS_SUCCESS:
      return { ...state, usersList: getUsers(action.payload, state.usersList) }

		case RESET_USERS:
      return { ...state, usersList: INIT_STATE.usersList }

    case GET_USER_SUCCESS:
      return { ...state, userSelected: action.payload }

    case CREATE_USER_SUCCESS:
      return { ...state, usersList: addUser(action.payload, state.usersList) }

    case UPDATE_USER_SUCCESS:
      return { ...state, usersList: updateUser(action.payload, state.usersList) }

    case REMOVE_USER_SUCCESS:
      return { ...state, usersList: deleteUser(action.payload, state.usersList) }

    default:
      return { ...state }
  }
}

export default Users;
