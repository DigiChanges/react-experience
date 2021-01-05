import { START_PATHNAME } from './constants'
import { PathActions } from './actions';

const INIT_STATE = {
  startPathname: ''
}

type State = { startPathname: string }

const Paths = (state: State = INIT_STATE, action: PathActions) => {
  switch( action.type ) {
    case START_PATHNAME: 
      return {
        ...state,
        startPathname: action.payload
      }
    default: return { ...state }
  }
}

export default Paths
