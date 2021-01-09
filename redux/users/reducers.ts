import {
  GET_USERS,
  GET_USERS_SUCCESS,
  CREATE_USER,
  CREATE_USER_SUCCESS,
} from './constants'

import { UserActions } from './actions';

const INIT_STATE = {
  list: []
}

type State = { 
  list: {}
}

// const getUsers = (users, user) => {
//   if (!users) {
//     users = []
//   }
//   users.push(user)
//   return users
// }

const Users = (state: State = INIT_STATE, action: UserActions) => {
  switch (action.type) {
    
    case GET_USERS_SUCCESS:
      return { ...state, list: action.payload }
 



    // case CREATE_USER:
    //   return { ...state, users: getUsers(state.users, action.payload) }
    
    
    default: return { ...state }
  }
}

export default Users
