import {
  GET_USERS_SUCCESS,
  SELECTED_USER,
  UNSELECTED_USER,
  CREATE_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  REMOVE_USER_SUCCESS
} from './constants'
import { UserActions } from './actions';

const INIT_STATE = {
  list: [],
  selected: undefined
}

type State = { 
  list: {},
  selected: {} | undefined
}

const addUser = (newUser, users) => {
  if (!users) {
    users = []
  }
  users.push(newUser)
  return users
}

const updateUser = (user, users) => {
  if (users && users.length > 0) {
    const userIndex = users.findIndex(u => u.id === user.id)
    if( userIndex > -1 ) {
      users[userIndex] = user
    }
    return users
  }
  return INIT_STATE.list
}

const deleteUser = (user, users) => (
  users && users.length > 0 
    ? users.filter(u => u.id !== user.id)
    : INIT_STATE.list
)

const getSelectedUser = (id, users) => (
  users && 
    users.length > 0 && 
    users.find(user => user.id === id)
)

const Users = (state: State = INIT_STATE, action: UserActions) => {
  switch (action.type) {
    
    case GET_USERS_SUCCESS:
      return { ...state, list: action.payload }

    case SELECTED_USER:
      return { ...state, selected: getSelectedUser(action.payload, state.list) }
    
    case UNSELECTED_USER:
      return { ...state, selected: INIT_STATE.selected }
 
    case CREATE_USER_SUCCESS:
      return { ...state, list: addUser(action.payload, state.list) }

    case UPDATE_USER_SUCCESS:
      return { ...state, list: updateUser(action.payload, state.list) }

    case REMOVE_USER_SUCCESS:
      return { ...state, list: deleteUser(action.payload, state.list) }
    
    default: return { ...state }
  }
}

export default Users
