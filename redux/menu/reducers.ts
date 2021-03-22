<<<<<<< HEAD
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
=======
import { TOGGLE_SIDEBAR } from './constants'
import { MenuActions } from './actions';
>>>>>>> abd0100 ((WIP))

const INIT_STATE = {
  showSidebar: true,
}

type State = {
  showSidebar: boolean,
}

const Menu = (state: State = INIT_STATE, action: MenuActions) => {
  switch (action.type) {
<<<<<<< HEAD

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
=======
    case TOGGLE_SIDEBAR:
      return { ...state, showSidebar: !state.showSidebar }
>>>>>>> abd0100 ((WIP))

    default:
      return { ...state }
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
export default Menu
=======
export default Users
>>>>>>> cc365e6 (WIP navbar)
=======
export default Menu
>>>>>>> abd0100 ((WIP))
