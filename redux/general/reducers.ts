import {
  START_GENERAL_LOADING,
  STOP_GENERAL_LOADING,
  SHOW_GENERAL_NOTIFICATION
} from './constants';

const INIT_STATE = {
  isLoading: false,
  notification: undefined
}

const General = (state= INIT_STATE, action ) => {
  switch (action.type) {
    case START_GENERAL_LOADING:
      return { 
        notification: undefined,
        isLoading: true 
      }
    case STOP_GENERAL_LOADING:
      return {
        ...state, 
        isLoading: false 
      }
    case SHOW_GENERAL_NOTIFICATION: 
      return { 
        isLoading: false,
        notification: {...action.payload}
      }
    default: return { ...state }
  }
}

export default General
