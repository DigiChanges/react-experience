import {
  START_GENERAL_LOADING,
  STOP_GENERAL_LOADING,
  SHOW_GENERAL_MESSAGE,
  DISMISS_GENERAL_MESSAGE
} from './constants';

const INIT_STATE = {
  isLoading: false,
  message: undefined
}

const General = (state= INIT_STATE, action ) => {
  switch (action.type) {
    case START_GENERAL_LOADING:
      return { 
        message: undefined,
        isLoading: true 
      }
    case STOP_GENERAL_LOADING:
      return {
        ...state, 
        isLoading: false 
      }
    case SHOW_GENERAL_MESSAGE: 
      return { 
        isLoading: false,
        message: {...action.payload}
      }
    case DISMISS_GENERAL_MESSAGE: 
      return { 
        ...state,
        message: undefined
      }
    default: return { ...state }
  }
}

export default General