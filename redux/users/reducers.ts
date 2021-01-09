import {
  GET_USERS,
  GET_USERS_SUCCESS,
  SELECTED_USER,
  CREATE_USER,
  CREATE_USER_SUCCESS,
  SELECTED_USER_TO_UPDATE,
  UPDATE_USER_SUCCESS,
  SELECTED_USER_TO_REMOVE,
  REMOVE_USER,
  REMOVE_USER_SUCCESS
} from './constants'

import { UserActions } from './actions';

const INIT_STATE = {
  list: [],
  selected: undefined,
  selectedToRemove: undefined,
  selectedToUpdate: undefined
}

type State = { 
  list: {},
  selected: {} | undefined,
  selectedToRemove: {} | undefined,
  selectedToUpdate: {} | undefined
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

const deleteUser = (user, users) => {
  if (users && users.length > 0) {
    return users.filter(u => u.id !== user.id)
  }
  return INIT_STATE.list
}

const getSelectedUser = (id, users) => {
  if (users && users.length > 0) {
    return users.find(user => user.id === id)
  }
  return undefined
}

const Users = (state: State = INIT_STATE, action: UserActions) => {
  switch (action.type) {
    
    case GET_USERS_SUCCESS:
      return { ...state, list: action.payload }

    case SELECTED_USER:
      return { ...state, selected: getSelectedUser(action.payload, state.list) }
 
    case CREATE_USER_SUCCESS:
      return { ...state, users: addUser(action.payload, state.list) }

    case SELECTED_USER_TO_UPDATE:
      return { ...state, selectedToUpdate: getSelectedUser(action.payload, state.list) }

    case SELECTED_USER_TO_UPDATE:
      return { ...state, list: updateUser(action.payload, state.list) }

    case SELECTED_USER_TO_REMOVE:
      return { ...state, selectedToRemove: getSelectedUser(action.payload, state.list) }

    case REMOVE_USER_SUCCESS:
      return { ...state, list: deleteUser(action.payload, state.list) }
    
    default: return { ...state }
  }
}

export default Users
