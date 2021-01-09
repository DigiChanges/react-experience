import {
  GET_USERS,
  GET_USERS_SUCCESS,
  SELECTED_USER,
  CREATE_USER,
  CREATE_USER_SUCCESS,
} from './constants'

import { UserActions, selectedUser } from './actions';

const INIT_STATE = {
  list: [],
  selected: undefined
}

type State = { 
  list: {},
  selected: {} | undefined
}

const getUsers = (newUser, users) => {
  if (!users) {
    users = []
  }
  users.push(newUser)
  return users
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
      return { ...state, users: getUsers(action.payload, state.list) }
    
    default: return { ...state }
  }
}

export default Users
