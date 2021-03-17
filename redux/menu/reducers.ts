<<<<<<< HEAD
import { TOGGLE_SIDEBAR } from './constants'
import { MenuActions } from './actions';

const INIT_STATE = {
  showSidebar: true,
}

type State = {
  showSidebar: boolean,
}

const Menu = (state: State = INIT_STATE, action: MenuActions) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, showSidebar: !state.showSidebar }
=======
import {
  GET_USERS_SUCCESS,
  SELECTED_USER,
  // UNSELECTED_USER,
  // CREATE_USER_SUCCESS,
  // UPDATE_USER_SUCCESS,
  // REMOVE_USER_SUCCESS
} from './constants'
import { UserActions } from './actions';

const INIT_STATE = {
  usersList: null,
  userSelected: null
}

type State = {
  usersList: [] | null,
  userSelected: any | null
}

// const addUser = (newUser, users) =>
// {
// 	if (!users)
// 	{
// 		users = []
// 	}
// 	users.push(newUser)
// 	return users
// }

// const updateUser = (user, users) =>
// {
// 	if (users && users.length > 0)
// 	{
// 		const userIndex = users.findIndex(u => u.id === user.id)
// 		if (userIndex > -1)
// 		{
// 			users[userIndex] = user
// 		}
// 		return users
// 	}
// 	return INIT_STATE.usersList
// }

// const deleteUser = (user, users) => (
// 	users && users.length > 0
// 		? users.filter(u => u.id !== user.id)
// 		: INIT_STATE.usersList
// )

const getSelectedUser = (id, users) => (
  users &&
  users.length > 0 &&
  users.find(user => user.id === id)
)

const Users = (state: State = INIT_STATE, action: UserActions) => {
  switch (action.type) {

    case GET_USERS_SUCCESS:
      return { ...state, usersList: action.payload }

    // case SELECTED_USER:
    // 	return {...state, userSelected: getSelectedUser(action.payload, state.usersList)}

    // case UNSELECTED_USER:
    // 	return {...state, userSelected: INIT_STATE.userSelected}

    // case CREATE_USER_SUCCESS:
    // 	return {...state, usersList: addUser(action.payload, state.usersList)}

    // case UPDATE_USER_SUCCESS:
    // 	return {...state, usersList: updateUser(action.payload, state.usersList)}

    // case REMOVE_USER_SUCCESS:
    // 	return {...state, usersList: deleteUser(action.payload, state.usersList)}
>>>>>>> cc365e6 (WIP navbar)

    default:
      return { ...state }
  }
}

<<<<<<< HEAD
export default Menu
=======
export default Users
>>>>>>> cc365e6 (WIP navbar)
