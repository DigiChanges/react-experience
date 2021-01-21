import { GET_ROLES_SUCCESS } from './constants';
import { RolesActions } from './actions';

const INIT_STATE = {
  rolesList: null
}

type State = {
  rolesList: [] | null
}

const Roles = (state: State = INIT_STATE, action: RolesActions) => {
  switch (action.type) {
    
    case GET_ROLES_SUCCESS:
      return { ...state, rolesList: action.payload }
    
    default:
      return { ...state }
  }
}

export default Roles
