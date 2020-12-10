import {
  START_LOADING,
  STOP_LOADING
} from './constants';

const INIT_STATE = {
  isLoading: false
}

const Loading = (state= INIT_STATE, action ) => {
  switch (action.type) {
    case START_LOADING:
      return { isLoading: true }
    case STOP_LOADING:
      return { isLoading: false }
    default: return { ...state }
  }
}

export default Loading